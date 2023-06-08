import { useState, useRef, useEffect } from "react"
import { MdOutlineAddAPhoto } from 'react-icons/md'
import Button from "../Button"
import { Imodal } from "../../Interfaces/Imodal"
import CropImage from "../CropImage"
import EditPhotoModal from "../EditPhotoModal"

interface Iprops extends Imodal {
    inputFileValue: File | undefined
    setInputFileValue: Function
    inputRef: any
    finalImage: Blob | null
    setFinalImage: Function
    imageShow: any
    setImageShow: Function
}

const FileInput = ({ isModalOpen, setIsModalOpen, inputFileValue, setInputFileValue, inputRef, finalImage, setFinalImage, imageShow, setImageShow }: Iprops) => {


    const [croppedImageLink, setCroppedImageLink] = useState<string | null>(null)

    const handleClick = () => {
        inputRef.current.click()
    }

    useEffect(() => {
        if (inputFileValue) {
            setIsModalOpen(true)
        }
    }, [inputFileValue])

    return (
        <>
            <div className="bottomShadow w-full max-w-[350px] h-[360px] p-[24px] border border-[#525252] flex flex-col justify-start items-center gap-[20px] z-10">

                <label
                    id="file-input-lable"
                    htmlFor="file-input"
                    className={`${inputFileValue ? 'hidden' : imageShow ? 'hidden' : ''} custom-file-input bg-cover w-[230px] h-[230px] rounded-[50%] border-2 border-[#959595] border-dashed text-[32px] text-[#959595] flex justify-center items-center`}
                >
                </label>

                <input
                    ref={inputRef}
                    id='file-input'
                    type="file"
                    className={`hidden w-[200px] h-[100px] rounded-[4px]`}
                    accept='image/*'
                    maxLength={50}
                    onChange={(e) => e.target.files && setInputFileValue(e.target.files[0])}
                />

                <div className={`${inputFileValue ? 'block' : imageShow ? 'block' : 'hidden'} w-full h-full object-cover object-center rounded-[50%] relative overflow-hidden`}>
                    <img
                        className="w-full h-full"
                        title='file'
                        alt='piiic'
                        src={
                            croppedImageLink ?? ''
                        }
                    />
                </div>

                <div className="w-full flex justify-center items-center gap-[16px]">
                    <Button
                        className={`${inputFileValue ? 'block' : 'hidden'}`}
                        variant="secondary"
                        onClick={() => {
                            setCroppedImageLink(null)
                            setInputFileValue(undefined)
                            inputRef.current.value = ''
                        }}
                    >
                        حذف
                    </Button>
                    <Button
                        variant="primary"
                        onClick={(() => handleClick())}
                    >
                        آپلود عکس
                    </Button>
                </div>

                <EditPhotoModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    croppedImageLink={croppedImageLink}
                    setCroppedImageLink={setCroppedImageLink} 
                    inputFileValue={inputFileValue}
                    setInputFileValue={setInputFileValue}
                    inputRef={inputRef}
                />

            </div>      
        </>
    )
}

export default FileInput