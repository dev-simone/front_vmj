import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

//axios config
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

/* ---------------- */
/* CONTEXT PROVIDER */
/* ---------------- */
import { AuthProvider } from "./context/AuthContext.jsx";

/* --------------- */
/* COMPONENTS      */
/* --------------- */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* --------------- */
/* PAGES           */
/* --------------- */
const Home = React.lazy(() => import("./pages/Home"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Login = React.lazy(() => import("./pages/Login"));
const PersonalArea = React.lazy(() => import("./pages/PersonalArea"));
const Article = React.lazy(() => import("./pages/Article"));
const ArticleHandler = React.lazy(() => import("./pages/ArticleHandler"));
import PrivateRoute from "./components/PrivateRoute";

/* --------------- */
/* DA CANCELLARE   */
/* --------------- */
import Contacts from "./components/Contacts.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/article/:id" element={<Article />} />
          {/* TEST */}
          <Route path="/test" element={<Contacts />} />
          {/**ROUTES TO PROTECT */}
          <Route element={<PrivateRoute />}>
            <Route path="/personal-area" element={<PersonalArea />} />
            <Route path="/article-handler" element={<ArticleHandler />} />
            <Route path="/article-handler/:id" element={<ArticleHandler />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </AuthProvider>
  );
};
export default App;
