
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/cards";
import Blog from "./components/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
