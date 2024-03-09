import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AddArticle from "./pages/addArticle/AddArticle";
import EditArticle from "./pages/editArticle/EditArticle";
import Article from "./pages/article/Article";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/add-article" element={<AddArticle />}></Route>
          <Route path="/article/:articleId" element={<Article />}></Route>
          <Route
            path="/edit-article/:articleId"
            element={<EditArticle />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
