import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { searchIcon, writeArticle } from "../assets/images";
import BlogCard from "../components/BlogCard";

const PersonalArea = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("/posts/get", {});
        if (response?.data) {
          setPosts(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getPosts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredArticles = posts?.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const removePostFromState = (postId) => {
    const updatedPosts = posts.filter((post) => post._id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="blog-page">
      <div className="personal-area blog-page--header">
        <h1>Area Personale</h1>
        <h2>Bentornato Andrea</h2>
      </div>
      <div className="personal-area blog-searchbar--container">
        <div className="personal-area searchbar-input--container">
          <i className="personal-area search-icon">
            <img src={searchIcon} alt="" />
          </i>
          <input
            type="text"
            className="personal-area search-input"
            onChange={handleSearchChange}
            placeholder="Cerca un articolo di tuo interesse"
          />
        </div>
        <Link to="/article-handler" className="write-article--container">
          <i className="write-article--icon">
            <img src={writeArticle} alt="" />
          </i>
          <p>Scrivi un articolo</p>
        </Link>
      </div>

      <div className="blog-articles--container">
        {filteredArticles.length > 0
          ? filteredArticles.map((article, index) => (
            <BlogCard
              key={index}
              article={article}
              personalArea={true}
              removePostFromState={removePostFromState}
            />
          ))
          : posts.map((article, index) => (
            <BlogCard
              key={index}
              article={article}
              personalArea={true}
              removePostFromState={removePostFromState}
            />
          ))}
      </div>
    </div>
  );
};
export default PersonalArea;
