import { useNavigate } from "react-router-dom";
import windowsLogo from "/windows.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 left-0 w-full h-10 flex items-center bg-blue-600 shadow-lg">
      <button
        className="flex items-center bg-green-600 hover:bg-green-700 text-white px-3 py-1 cursor-pointer rounded-tr-md rounded-br-md shadow-md"
        onClick={() => navigate("/")}
      >
        <img src={windowsLogo} alt="Windows Logo" className="w-4 h-4 mr-2" />
        <span className="text-sm font-semibold">Home</span>
      </button>

      <div className="flex-grow bg-blue-600 h-full"></div>
    </footer>
  );
};

export default Footer;
