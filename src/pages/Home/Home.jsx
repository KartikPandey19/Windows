import { FolderButton } from "../../components/Common/FolderButton"
import folderIcon from "../../assets/icons/Folder.svg";
import { Header } from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";

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
        <>
            <FolderButton name={"Draw"} imgSrc={folderIcon} clickHandler={()=>handleClick("draw")} />
            <Header />
        </>
    )
}