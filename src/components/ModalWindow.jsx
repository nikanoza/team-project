import x from "../assets/add.svg";

const ModalWindow = ({ isTrue }) => {
  console.log(isTrue);
  return (
    <section
      className={`${
        isTrue
          ? "w-full h-full fixed inset-0 z-30 bg-dark bg-opacity-[0.24] flex justify-center items-center"
          : "hidden"
      }`}
    >
      <section className=" w-480 h-17 bg-white rounded-xl flex flex-col">
        <img src={x} className="float-right w-6 h-6" />
        <h2>შესვლა</h2>
        <form></form>
      </section>
    </section>
  );
};

export default ModalWindow;
