// import { useState } from "react";
import Header from "../components/Header";
import ModalWindow from "../components/ModalWindow";

const Home = ({ isTrue, setIsTrue }) => {
  return (
    <div>
      <Header isTrue={isTrue} setIsTrue={setIsTrue} />
      <ModalWindow isTrue={isTrue} />
    </div>
  );
};

export default Home;
