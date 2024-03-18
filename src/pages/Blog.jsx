import { useEffect, useState } from "react";
import axios from "axios";
import { searchIcon, manichinoBlog } from "../assets/images";
import BlogCard from "../components/BlogCard";

const Blog = () => {
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

  // Funzione per aggiornare lo stato con l'input dell'utente
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtra gli articoli in base al termine di ricerca
  // Puoi personalizzare la condizione di filtro in base alle tue esigenze
  const filteredArticles = posts?.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-page">
      <div className="blog-page--header">
        <h1>News e Blog</h1>
      </div>
      <div className="blog-searchbar--container">
        <div className="searchbar-input--container">
          <img src={manichinoBlog} className="manichino-blog" alt="" />
          <i className="search-icon">
            <img src={searchIcon} alt="" />
          </i>
          <input
            type="text"
            className="search-input"
            onChange={handleSearchChange}
            placeholder="Cerca un articolo di tuo interesse"
          />
        </div>
      </div>

      <div className="blog-articles--container">
        {filteredArticles.length > 0
          ? filteredArticles.map((article, index) => (
              <BlogCard key={index} article={article} />
            ))
          : posts.map((article, index) => (
              <BlogCard key={index} article={article} />
            ))}
      </div>
    </div>
  );
};

export default Blog;