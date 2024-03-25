import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { placeholder, arrow } from "../assets/images";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getArticleById = async () => {
      try {
        const response = await axios.get(`/posts/get/${id}`);
        if (!response.data) {
          throw new Error("Articolo non trovato");
        }
        const data = await response.data;
        setArticle(data);
      } catch (error) {
        console.error(error);
      }
    };

    getArticleById();
  }, [id, navigate]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="article-page">
      <button onClick={handleBackClick} className="go-back--btn">
        <img src={arrow} alt="" />
        <p>indietro</p>
      </button>
      <div>
        <h1>{article?.title}</h1>
        <h2>{article?.subtitle}</h2>
      </div>
      <div className="article-page--img">
        <img src={article?.imagePath || placeholder} alt="" />
      </div>

      <div dangerouslySetInnerHTML={{ __html: article?.content }} />
    </div>
  );
};
export default Article;
