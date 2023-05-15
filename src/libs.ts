export function getCroppedImg({ image, pixelCrop, fileName }: any) {

    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');

    if (typeof (image)) {
        ctx?.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );


        return new Promise((resolve, reject) => {
            canvas.toBlob((file: any) => {
                file.name = fileName;
                resolve(file);
            }, 'image/jpeg');
        });
    }

}