import Button from "../Button"
import { Imodal } from "../../Interfaces/Imodal"
import ReactCrop, { Crop } from 'react-image-crop'
import { useState } from "react"

interface Iprops extends Imodal {
    inputFileValue: File | undefined
    setInputFileValue: Function
}

const EditPhotoModal = ({ isModalOpen, setIsModalOpen, inputFileValue, setInputFileValue }: Iprops) => {

    const [crop, setCrop] = useState<Crop>()


    return (
        <>
            <div className={`${isModalOpen ? 'flex' : 'hidden'} w-full h-full justify-center items-center bg-white bg-opacity-70 fixed top-0 left-0 z-50`}>
                <div id="wrapper-modal" className='w-[400px] h-[430px] px-[16px] py-[24px] bg-white border border-[#525252] flex flex-col justify-between items-center'>


                    <ReactCrop className="w-full h-[300px] rounded-[4px]" crop={crop} onChange={c => setCrop(c)}>
                        <img
                            src={`${inputFileValue ? URL.createObjectURL(inputFileValue) : '/pics/profile.png'}`}
                            className="w-full h-full"
                        />
                    </ReactCrop>

                    <div className="w-full flex justify-end items-end gap-[16px]">
                        <Button
                            onClick={() => setIsModalOpen(false)}
                            variant="secondary"
                            className="w-[130px]"
                        >
                            کنسل
                        </Button>
                        <Button
                            variant="primary"
                            className="w-[130px]"
                        >
                            ثبت
                        </Button>
                    </div>

                </div>
            </div>
            {console.log(crop)}
        </>
    )
}

export default EditPhotoModal