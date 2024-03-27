import { useForm } from "react-hook-form";
import x from "../assets/add.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import validationScheme from "../login-schema";
import axios from "axios";
import { useState } from "react";
import Success from "./Success";

const ModalWindow = ({ isTrue, setIsTrue, allow, setAllow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationScheme),
  });
  let [isStatus, setStatus] = useState(false);
  let [statusCode, setStatusCode] = useState("");

  async function onSubmit(data) {
    try {
      let information = JSON.stringify(data);
      const response = await axios.post(
        "https://api.blog.redberryinternship.ge/api/login",
        information,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setStatusCode(response.status);
      if (response.status == 204) {
        setAllow(true);
        console.log("macaco");
      }
    } catch (error) {
      error.response.status === 422 ? setStatus(true) : setStatus(false);
    }
  }

  return (
    <section
      className={`${
        isTrue
          ? "w-full h-full fixed inset-0 z-30 bg-dark bg-opacity-[0.24] flex justify-center items-center"
          : "hidden"
      }`}
    >
      {statusCode ? (
        <Success setIsTrue={setIsTrue} />
      ) : (
        <section className=" w-480 h-17 bg-white rounded-xl flex flex-col">
          <img src={x} className="float-right w-6 h-6" />
          <h2>შესვლა</h2>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">ელ-ფოსტა</label>
            <input
              onKeyDown={() => setStatus(false)}
              type="email"
              id="email"
              {...register("email")}
            ></input>
            <p>{errors.email && errors.email.message}</p>
            <p>{isStatus && "ელ ფოსტა ვერ მოიძებნა"}</p>
            <button type="submit">შესვლა</button>
          </form>
        </section>
      )}
    </section>
  );
};

export default ModalWindow;
