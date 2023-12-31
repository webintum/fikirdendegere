"use clint";
import { FcIdea } from "react-icons/fc";
import { AiOutlinePlus } from "react-icons/ai";


const Library = () => {
    const onClick = () => {
        
        //Handle upload later
    };

    return ( 
        <div className="flex flex-col">
           <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2" >
                    <FcIdea className="text-neutral-400"size={26} />
                    <p className="text-neutral-400 font-medium text-md">Bir Fikir</p>
                </div>
                <AiOutlinePlus  onClick={onClick}  size={20} className="text-neutral-400 cursor-pointer hover:text-white"/>
           </div>
          
           
           
        </div>
     );
}
 
export default Library;