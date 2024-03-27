// import { useState } from "react";
import Header from "../components/Header";
import ModalWindow from "../components/ModalWindow";

const Home = ({ isTrue, setIsTrue , allow, setAllow}) => {
  return (
    <div>
      <Header isTrue={isTrue} setIsTrue={setIsTrue} allow={allow} setAllow={setAllow}/>
      <ModalWindow isTrue={isTrue} setIsTrue={setIsTrue} allow={allow} setAllow={setAllow} />
    </div>
  );
};

export default Home;
