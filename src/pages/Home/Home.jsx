import { FolderButton } from "../../components/Common/FolderButton"
import folderIcon from "../../assets/icons/Folder.svg";
import { Header } from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import.meta.url

export const Home = () => {
    const navigate = useNavigate();
    const handleClick = (action) => {

        switch (action) {
            case 'draw':
                navigate('/draw');
                break;
            default:
                alert('Unknown action'); 
                break;
        }
    }
    return (
        <div className="min-h-screen flex flex-col">
            <div
                className="flex-grow bg-cover bg-center bg-no-repeat w-full " 
                 style={{backgroundImage:"url(/src/assets/images/Widow_bg.jpg)"}}>
                <div className="p-2">
                <FolderButton name={"Draw"} imgSrc={folderIcon} clickHandler={() => handleClick("draw")} />
                </div>
                <div className="p-2">
                <FolderButton name={"Draw"} imgSrc={folderIcon} clickHandler={() => handleClick("draw")} />
                </div>
                <div className="p-2">
                <FolderButton name={"Draw"} imgSrc={folderIcon} clickHandler={() => handleClick("draw")} />
                </div>
            </div>
            <Footer />
        </div>
    )
}