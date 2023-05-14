import React, { useEffect, useState } from 'react';
import './App.css';
import FileInput from './Components/FileInput';
import EditPhotoModal from './Components/EditPhotoModal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const [inputFileValue, setInputFileValue] = useState<File | undefined>(undefined)

  const handleClick = (e: any) => {
    if ((e.target.id !== "wrapper-modal")) {
      setIsModalOpen(false)
      document.removeEventListener("click", handleClick)
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClick)
      }, 10);
    }
  }, [isModalOpen])

  return (
    <>
      <div className='w-full h-full flex justify-center items-center font-[IranYekan-Reqular]'>
        <FileInput
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          inputFileValue={inputFileValue}
          setInputFileValue={setInputFileValue}
        />

        <EditPhotoModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          inputFileValue={inputFileValue}
          setInputFileValue={setInputFileValue}
        />
      </div>
    </>
  );
}

export default App;
