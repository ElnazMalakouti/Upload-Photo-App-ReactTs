import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import FileInput from './Components/FileInput';
import EditPhotoModal from './Components/EditPhotoModal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const [inputFileValue, setInputFileValue] = useState<File | undefined>(undefined)

  // const handleClick = (e: any) => {
  //   if ((e.target.id !== "wrapper-modal")) {
  //     setIsModalOpen(false)
  //     document.removeEventListener("click", handleClick)
  //   }
  // }

  // useEffect(() => {
  //   if (isModalOpen) {
  //     setTimeout(() => {
  //       document.addEventListener("click", handleClick)
  //     }, 10);
  //   }
  // }, [isModalOpen])

  const [finalImage, setFinalImage] = useState<Blob | null>(null)

  const [imageShow , setImageShow] = useState<any>()

  const inputRef: any = useRef(null);

  return (
    <>
      <div className='w-full h-full flex justify-center items-center font-[IranYekan-Reqular]'>
        <FileInput
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          inputFileValue={inputFileValue}
          setInputFileValue={setInputFileValue}
          inputRef={inputRef}
          finalImage={finalImage}
          setFinalImage={setFinalImage} 
          imageShow={imageShow}
          setImageShow={setImageShow}
          />

        <EditPhotoModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          inputFileValue={inputFileValue}
          setInputFileValue={setInputFileValue}
          inputRef={inputRef}
          finalImage={finalImage}
          setFinalImage={setFinalImage}
          imageShow={imageShow}
          setImageShow={setImageShow}
        />
      </div>
    </>
  );
}

export default App;
