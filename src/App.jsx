import { Route, Routes } from "react-router-dom";
import { AddBlog, Blog, Home } from "./pages";

function App() {
  return (
    <main className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </main>
  );
}

export default App;
