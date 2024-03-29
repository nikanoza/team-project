import PropTypes from "prop-types";

const Button = ({ text, fnc }) => {
  return (
    <button
      className=" bg-violet px-1/4 py-[10px] rounded-lg text-white text-sm font-medium"
      onClick={() => fnc()}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  fnc: PropTypes.func,
};

export default Button;
