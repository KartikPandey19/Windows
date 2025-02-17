
export const FolderButton = ({name,imgSrc,clickHandler}) =>{

    return (
        <div className="inline-flex flex-col items-center text-center">
        <button className="bg-yellow-300 border-none rounded-lg p-5 w-20 h-16 shadow-md flex items-center justify-center"
        onClick={clickHandler}
        >
        <img src={imgSrc} alt="Folder Icon" className="w-8 h-8" /> 
      </button>
        <div className="mt-2 text-sm text-gray-800 text-center">{name}</div>
      </div>
      );
}