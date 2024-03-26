import { Route, Routes } from "react-router-dom";
import { AddBlog, Blog, Home } from "./pages";
import { useState } from "react";

function App() {

  let [isTrue, setIsTrue] = useState(false);
  return (
    <main className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home isTrue={isTrue} setIsTrue={setIsTrue} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </main>
  );
}

export default App;
