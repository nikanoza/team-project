import logo from "../assets/logo.png";
import Button from "./Button";
const Header = ({ isTrue, setIsTrue, allow }) => {
  console.log(isTrue);
  return (
    <header className=" flex flex-row justify-between px-[76px] py-7">
      <img className="h-6 w-[150px]" src={logo} />

      {allow ? (
        <Button text="ბლოგის დამატება"></Button>
      ) : (
        <Button text={"შესვლა"} setIsTrue={setIsTrue} />
      )}
    </header>
  );
};

export default Header;
