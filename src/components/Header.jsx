import logo from "../assets/logo.png";
const Header = ({ isTrue, setIsTrue }) => {
  console.log(isTrue);
  return (
    <header className=" flex flex-row justify-between px-[76px] py-7">
      <img className="h-6 w-[150px]" src={logo} />
      <button
        className=" bg-violet px-1/4 py-[10px] rounded-lg text-white text-sm font-medium"
        onClick={() => setIsTrue(true)}
      >
        შესვლა
      </button>
    </header>
  );
};

export default Header;
