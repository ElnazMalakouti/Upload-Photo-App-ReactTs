import Button from "../Button"
import { Imodal } from "../../Interfaces/Imodal"
import ReactCrop, { Crop, makeAspectCrop } from 'react-image-crop'
import { useState } from "react"
import 'react-image-crop/dist/ReactCrop.css'
import { getCroppedImg } from "../../libs"
import CropImage from "../CropImage"


interface Iprops extends Imodal {
    inputFileValue: File | undefined
    setInputFileValue: Function
    inputRef: any
    finalImage: Blob | null
    setFinalImage: Function
    imageShow: any
    setImageShow: Function
}

const EditPhotoModal = ({ isModalOpen, setIsModalOpen, inputFileValue, setInputFileValue, inputRef, finalImage, setFinalImage, imageShow, setImageShow }: Iprops) => {

    const [crop, setCrop] = useState<Crop>()


    return (
        <>
            <div className={`${isModalOpen ? 'flex' : 'hidden'} w-full h-full justify-center items-center bg-white bg-opacity-70 fixed top-0 left-0 z-50`}>
                <div id="wrapper-modal" className='w-[400px] h-[430px] px-[16px] py-[24px] bg-white border border-[#525252] flex flex-col justify-between items-center'>


                    <CropImage                    
                        inputRef={inputRef}
                        finalImage={finalImage}
                        setFinalImage={setFinalImage}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        imageShow={imageShow}
                        setImageShow={setImageShow}
                    />


                    <div className="w-full flex justify-end items-end gap-[16px]">
                        <Button
                            onClick={() => setIsModalOpen(false)}
                            variant="secondary"
                            className="w-[130px]"
                        >
                            کنسل
                        </Button>
                        <Button
                            onClick={() => setIsModalOpen(false)}
                            variant="primary"
                            className="w-[130px]"
                        >
                            ثبت
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditPhotoModal