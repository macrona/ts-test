import React from 'react';
const Crop = () => {
    const [preview, setPreview] = useState(null);
    const [crop, setCrop] = useState(null);
    const [cropData, setCropData] = useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        scale: 1
    });
    const [isLoading, setIsLoading] = useState(false);
    const inputFileRef = useRef(null);
    const canvasRef = useRef(null);
    // 选择图片并展示预览
    const handleSelectFile = event => {
        const file = event.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setCrop(null);
            setCropData({ x: 0, y: 0, width: 0, height: 0, scale: 1 });
        }
    };
    // 图片裁剪伸缩操作
    const handleCropChange = data => {
        setCropData(data);
    };
    // 点击裁剪并上传按钮，进行裁剪，并上传
    const handleCropAndUpload = async () => {
        setIsLoading(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = previewUrl;
        // 加载图片，绘制裁剪后的图像到画布上
        img.onload = () => {
            const x = cropData.x / cropData.scale;
            const y = cropData.y / cropData.scale;
            const width = cropData.width / cropData.scale;
            const height = cropData.height / cropData.scale;

            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, x, y, width, height, 0, 0, width, height);

            canvas.toBlob(blob => {
                const formData = new FormData();
                formData.append('image', blob, 'crop.jpg');
                // TODO: 调用后端API，上传blob数据
            });
            setIsLoading(false);
        };
    };

    return (
        <div className="crop">
            <canvas
                ref={canvasRef}
                style={{ width: cropData.width / cropData.scale, height: cropData.height / cropData.scale }}
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleSelectFile}
                style={{ display: 'none' }}
                ref={inputFileRef}
            />
            <div id="preview-container"></div>
            <button id="crop-btn">裁剪并上传</button>
        </div>
    )
};
export default Crop;