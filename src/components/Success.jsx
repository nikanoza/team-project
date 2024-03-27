import useLogin from "../store/store";

const Success = () => {
  const { setIsFalse, setAllow } = useLogin();
  return (
    <div>
      <button
        onClick={() => {
          setAllow();
          setIsFalse();
        }}
      >
        კარგი
      </button>
    </div>
  );
};

export default Success;
