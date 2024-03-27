const Button = ({ text, setIsTrue }) => {
  return (
    <button
      className=" bg-violet px-1/4 py-[10px] rounded-lg text-white text-sm font-medium"
      onClick={() => setIsTrue(true)}
    >
      {text}
    </button>
  );
};

export default Button;
