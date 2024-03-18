import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { placeholder, arrow, addImgIcon } from "../assets/images";
import useAuth from "../hooks/useAuth";
import Modal from "../components/Modal";
import ModalSaved from "../components/ModalSaved";

import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";

import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";

import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Strike from "@tiptap/extension-strike";
import Italic from "@tiptap/extension-italic";
import Heading from "@tiptap/extension-heading";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";

import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import History from "@tiptap/extension-history";
import Placeholder from "@tiptap/extension-placeholder";

import { Node, mergeAttributes } from "@tiptap/core";

const ArticleHandler = () => {
  const { authToken } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { article } = location.state || {};

  const [data, setData] = useState({});
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleModalSaved, setToggleModalSaved] = useState(false);
  const editorInsertImageRef = useRef(null);
  const imagePickerRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ImageExtension = Node.create({
    name: "image",

    // Definisce come l'HTML dovrebbe essere renderizzato
    group: "block",
    atom: true,
    addAttributes() {
      return {
        src: {},
        alt: {
          default: null,
        },
        title: {
          default: null,
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: "img[src]",
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      return ["img", mergeAttributes(HTMLAttributes)];
    },
  });

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      OrderedList,
      BulletList,
      ListItem,
      History,
      TextStyle,
      Strike,
      Italic,
      Underline,
      Image,
      Heading.configure({
        levels: [2],
      }),
      Placeholder.configure({
        placeholder: "Scrivi qui il contenuto...",
      }),
      ImageExtension,
    ],
  });

  useEffect(() => {
    const getArticleById = async () => {
      try {
        const response = await axios.get(`/posts/get/${id}`);
        if (!response.data) {
          return;
        }
        const data = await response.data;
        setData(data);
        editor.commands.setContent(data.content);
      } catch (error) {
        console.error(error);
      }
    };

    if (id && article) {
      getArticleById();
    }
  }, [id, navigate, editor, article]);

  const handleBackClick = () => {
    navigate("/personal-area");
  };

  const handleInsertEditorImage = () => {
    editorInsertImageRef.current.click();
  };

  const handleHeroFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      // Imposta l'immagine per l'anteprima
      const img = URL.createObjectURL(e.target.files[0]);
      setData({ ...data, imagePath: img, imgFile: e.target.files[0] });
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        const src = readerEvent.target.result;
        editor.chain().focus().setImage({ src }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImagePickerClick = (e) => {
    e.preventDefault();
    imagePickerRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("subTitle", data.subTitle);
    formData.append("content", editor.getHTML());

    if (data.imgFile) {
      formData.append("image", data.imgFile);
    }


    if (!article && !id) {
      try {
        const response = await axios.post("/posts/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "auth-token": authToken,
          },
        });
        if (response.status === 201) {
          setToggleModalSaved(true);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.post(`/posts/update/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "auth-token": authToken,
          },
        });
        setToggleModalSaved(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="article-handler--page">
      <div>
        <button onClick={handleBackClick} className="go-back--btn">
          <img src={arrow} alt="" />
          <p>indietro</p>
        </button>
      </div>

      <form>
        <div className="article-handler--container">
          <div className="title-paragraph-input--container">
            <input
              type="text"
              className="title--input"
              value={data?.title || ""}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Inserisci qui il titolo"
            />
            <input
              type="text"
              className="subtitle--input"
              value={data?.subTitle || ""}
              onChange={(e) => setData({ ...data, subTitle: e.target.value })}
              placeholder="Inserisci qui il sottotitolo"
            />
          </div>

          <div className="save-delete-btn--container">
            <button className="save--btn" onClick={handleSubmit}>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#78DB6B" />
                <path
                  d="M40 22.5L25.0843 37.5L20 32.3869"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Salva</p>
            </button>
            <button className="delete--btn">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="white" />
                <path
                  d="M40 20L20 40M40 40L20 20"
                  stroke="#FF8282"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <p>Elimina</p>
            </button>
          </div>
        </div>

        <div className="image-picker--container">
          <img src={data.imagePath || placeholder} alt="" />
          <button onClick={handleImagePickerClick}></button>
          <input
            type="file"
            accept="image/*"
            className="image-picker--input"
            onChange={handleHeroFileSelect}
            ref={imagePickerRef}
          />
        </div>

        <div>
          <h2>Paragrafo</h2>
        </div>

        <BubbleMenu editor={editor} className="editor--bubble-menu">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <strong>G</strong>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <i>I</i>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <u>U</u>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <s>S</s>
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            Aa
          </button>
        </BubbleMenu>
        <FloatingMenu editor={editor} className="editor--floating-menu">
          <button type="button" onClick={handleInsertEditorImage}>
            <img src={addImgIcon} alt="" />
            <input
              className="hidden"
              type="file"
              onChange={handleFileSelect}
              ref={editorInsertImageRef}
            />
          </button>
        </FloatingMenu>

        <EditorContent editor={editor} className="editor-content" />
      </form>
      {toggleModal && <Modal />}
      {toggleModalSaved && (
        <ModalSaved setToggleModalSaved={setToggleModalSaved} />
      )}
    </div>
  );
};
export default ArticleHandler;
