/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Modal from "./Modal";

import {
  sfondoLegno,
  modifyIcon,
  trashIcon,
  placeholder,
} from "../assets/images";

const BlogCard = ({ article, personalArea, removePostFromState }) => {
  const { title, imagePath } = article;
  const { authToken } = useAuth();
  const [toggleModal, setToggleModal] = useState(false);

  const handleDeleteButton = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/posts/delete/${article._id}`,
        {},
        {
          headers: {
            "auth-token": authToken,
          },
        }

      );
      removePostFromState(article._id);
      setToggleModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setToggleModal(true);
  };

  return (
    <>
      {toggleModal && (
        <Modal
          setToggleModal={setToggleModal}
          handleDeleteButton={handleDeleteButton}
        />
      )}

      <Link
        to={`/article/${article._id}`}
        state={{ article }}
        className="blog-article"
      >
        <div className={`${personalArea && "personal-area"} blog-card`}>
          <div className="blog-view-icon">
            {!personalArea ? (
              <svg
                width="48"
                height="35"
                viewBox="0 0 48 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.69528 18.8547C2.38886 18.3695 2.23564 18.1269 2.14988 17.7527C2.08546 17.4716 2.08546 17.0284 2.14988 16.7473C2.23564 16.3731 2.38885 16.1305 2.69527 15.6453C5.22744 11.6359 12.7646 1.5 24.2509 1.5C35.7372 1.5 43.2744 11.6359 45.8065 15.6453C46.113 16.1305 46.2662 16.3731 46.3519 16.7473C46.4164 17.0284 46.4164 17.4716 46.3519 17.7527C46.2662 18.1269 46.113 18.3695 45.8065 18.8547C43.2744 22.8641 35.7372 33 24.2509 33C12.7647 33 5.22744 22.8641 2.69528 18.8547Z"
                  stroke="#454545"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.2509 24C27.9788 24 31.0009 20.9779 31.0009 17.25C31.0009 13.5221 27.9788 10.5 24.2509 10.5C20.523 10.5 17.5009 13.5221 17.5009 17.25C17.5009 20.9779 20.523 24 24.2509 24Z"
                  stroke="#454545"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <>
                <div className="blog-card--dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="icons--container">
                  <Link
                    to={`/article-handler/${article._id}`}
                    state={{ article }}
                  >
                    <img src={modifyIcon} alt="modify-icon" />
                  </Link>
                  <img src={trashIcon} alt="trash-icon" onClick={handleClick} />
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.69528 18.8547C2.38886 18.3695 2.23564 18.1269 2.14988 17.7527C2.08546 17.4716 2.08546 17.0284 2.14988 16.7473C2.23564 16.3731 2.38885 16.1305 2.69527 15.6453C5.22744 11.6359 12.7646 1.5 24.2509 1.5C35.7372 1.5 43.2744 11.6359 45.8065 15.6453C46.113 16.1305 46.2662 16.3731 46.3519 16.7473C46.4164 17.0284 46.4164 17.4716 46.3519 17.7527C46.2662 18.1269 46.113 18.3695 45.8065 18.8547C43.2744 22.8641 35.7372 33 24.2509 33C12.7647 33 5.22744 22.8641 2.69528 18.8547Z"
                      stroke="white"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.2509 24C27.9788 24 31.0009 20.9779 31.0009 17.25C31.0009 13.5221 27.9788 10.5 24.2509 10.5C20.523 10.5 17.5009 13.5221 17.5009 17.25C17.5009 20.9779 20.523 24 24.2509 24Z"
                      stroke="white"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
          <h3>{title}</h3>
          <div className="blog-box">
            <div className="blog-article--bg-container">
              <img src={sfondoLegno} className="blog-article--bg" alt="" />
            </div>
            <div className="blog-article-img--container">
              <div>
                <img
                  src={imagePath || placeholder}
                  className="article-img"
                  alt={title}
                />
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="blog-border"></div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
