import React, { useRef, useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { FaFileUpload } from "react-icons/fa";
import { ImageCropper } from './ImageCropper';

const Moderm = ({setShow}) => {
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const cropperRef = useRef();

  const handleChang =(e)=>{
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);  
    };
    reader.readAsDataURL(files[0]);
    
  }

    const ShowRef = useRef(null)
  return (
    <>
     <div className='fixed top-0 right-0 h-screen w-full bg-[#2e2e2ef0] flex items-center justify-center'>

    <div className='w-[50%] rounded-md bg-white p-4 relative'>
        <div>
            <h4 className='font-serif text-base text-black text-center'>Upload photo</h4>
        </div>
     <span  onClick={()=>{setShow(false)}} className='absolute top-2 right-2 text-xl cursor-pointer'><RxCrossCircled /></span>
     
     <div className='w-full border border-slate-400 rounded-md h-[200px] mt-3 p-2 box-border cursor-pointer'
      onClick={()=>ShowRef.current.click()}>
        <div className='w-full rounded-md bg-slate-200 h-full flex items-center justify-center'>
            <div>
                 <span className='text-2xl flex justify-center items-center'> <FaFileUpload /></span>
                 <h4 className='text-base font-serif'>Upload your photo</h4>
                 <input type="file" ref={ShowRef}  hidden onChange={handleChang} />

            </div>

        </div>
     </div>
    </div>
    
    {
      image && <ImageCropper setImage={setImage} cropperRef={cropperRef} image={image}/>
     }
     </div>
    </>
  )
}

export default Moderm