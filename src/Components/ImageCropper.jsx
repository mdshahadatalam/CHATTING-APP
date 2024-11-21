import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { FaFileUpload } from "react-icons/fa";
import { Cropper } from 'react-cropper';



export const ImageCropper = ({setImage,cropperRef,image}) => {
  return (
    <>

<div className='fixed top-0 right-0 h-screen w-full flex items-center justify-center'>
    <div className='w-[30%] rounded-md bg-white p-4 relative'>
       <div>
       <div>
            <h4 className='font-serif text-base text-black text-center'>Upload photo</h4>
        </div>
     <span className='absolute top-2 right-2 text-xl cursor-pointer' onClick={()=>setImage()}>
        <RxCrossCircled />
        </span>
       </div>

        <div className='w-20 h-20 rounded-md mx-auto overflow-hidden'>
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
          />
        </div>

        <div>
        <Cropper
          ref={cropperRef}
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
        </div>
     
     {/* <div className='w-full border border-slate-400 rounded-md h-[200px] mt-3 p-2 box-border cursor-pointer'
      onClick={()=>ShowRef.current.click()}>
        <div className='w-full rounded-md bg-slate-200 h-full flex items-center justify-center'>
            <div>
                 <span className='text-2xl flex justify-center items-center'> <FaFileUpload /></span>
                 <h4 className='text-base font-serif'>Upload your photo</h4>
                 <input type="file" ref={ShowRef}  hidden onChange={handleChang} />

            </div>

        </div>
     </div> */}

    </div>
    </div>
    </>
  )
}
