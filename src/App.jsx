import { Route, Routes } from "react-router-dom";
import { AddBlog, Blog, Home } from "./pages";

function App() {
  return (
    <main className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Add-blog" element={<AddBlog />} />
      </Routes>
    </main>
  );
}

export default App;
