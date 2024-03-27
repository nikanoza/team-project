const Success = ({ setIsTrue }) => {
  return (
    <div>
      <button
        onClick={() => {
          setIsTrue(false);
        }}
      >
        კარგი
      </button>
    </div>
  );
};

export default Success;
