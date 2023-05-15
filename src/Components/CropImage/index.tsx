import React, { useState, useRef, useEffect } from 'react';
import ImageCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Imodal } from '../../Interfaces/Imodal';

interface Iprops extends Imodal {
    inputRef: any
    finalImage: Blob | null
    setFinalImage: Function
    imageShow: any
    setImageShow: Function
}

const CropImage = ({ isModalOpen, setIsModalOpen, inputRef, finalImage, setFinalImage, imageShow, setImageShow }: Iprops) => {


    const [src, setSrc] = useState<string>('');
    const [crop, setCrop] = useState<Crop>({ aspect: 1 / 1 });
    const [croppedImage, setCroppedImage] = useState<Blob | undefined>(undefined)

    const imageRef: any = useRef<HTMLImageElement>(null);

    //choose image function
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setSrc(reader.result as string);
        reader.readAsDataURL(file);
        setIsModalOpen(true)
    };

    //set cropped image to state
    const handleCrop = async () => {
        if (!src) return;
        const temp = await getCroppedImg(src, crop);
        setCroppedImage(temp)
    };

    useEffect(() => {
        if (croppedImage) {
            const temp = URL.createObjectURL(croppedImage)
            setImageShow(temp)
        }
    }, [croppedImage])

    const getCroppedImg = (imageSrc: string, crop: Crop): Promise<Blob> => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = imageSrc;
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const scaleX = image.naturalWidth / image.width;
                const scaleY = image.naturalHeight / image.height;
                canvas.width = crop.width! * scaleX;
                canvas.height = crop.height! * scaleY;
                const ctx = canvas.getContext('2d')!;                                        
                ctx.drawImage(
                    image,
                    crop.x! * scaleX,
                    crop.y! * scaleY,
                    crop.width! * scaleX,
                    crop.height! * scaleY,
                    0,
                    0,
                    crop.width! * scaleX,
                    crop.height! * scaleY
                ); 
                canvas.toBlob((blob) => resolve(blob!), 'image/jpeg');
            };
            image.onerror = reject;
        });
    };

    const handleImageLoaded = (image: HTMLImageElement) => {
        imageRef.current = image;
    };



    return (
        <>
            <div>
                <input id='file-input' type="file" accept="image/*" onChange={handleFileSelect} ref={inputRef} />
                {src && (
                    <div style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}>
                        <ImageCrop
                            src={src}
                            crop={crop}
                            onChange={setCrop}
                            onImageLoaded={handleImageLoaded}
                            onComplete={handleCrop}
                        />

                    </div>
                )}
            </div>
        </>
    );
};

export default CropImage;