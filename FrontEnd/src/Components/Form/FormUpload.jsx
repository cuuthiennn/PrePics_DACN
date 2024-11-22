import React, { useState } from 'react';
const inputClasses = 'border border-zinc-300 rounded-lg p-2 w-full';
const labelClasses = 'block text-sm font-medium text-zinc-700';
const buttonClasses = 'bg-blue-500 text-primary-foreground hover:bg-primary/80 rounded-lg p-2 w-full';
const FormUpload = () => {
    const [dragOver, setDragOver] = useState(false);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [fileType, setFileType] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        handleFile(selectedFile);
    };

    const handleFile = (selectedFile) => {
        if (!selectedFile) return;

        const validImageExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
        const validVideoExtensions = ['video/mp4', 'video/webm', 'video/ogg'];

        if (validImageExtensions.includes(selectedFile.type)) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);
                setFileType('image');
            };
            reader.readAsDataURL(selectedFile);
            setFile(selectedFile);
        } else if (validVideoExtensions.includes(selectedFile.type)) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);
                setFileType('video');
            };
            reader.readAsDataURL(selectedFile);
            setFile(selectedFile);
        } else {
            alert('Chỉ chấp nhận file ảnh hoặc video!');
            setFile(null);
            setPreview(null);
            setFileType(null);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const droppedFile = e.dataTransfer.files[0];
        handleFile(droppedFile);
    };
    return (
        <div>
            <div className="grid grid-cols-[70%,auto] gap-6 p-6 bg-gray-50 ml-[160px] mt-[100px]">
             {/* Upload Section */}
            <div className={` drag-area w-full h-full rounded-2xl border-2 ${dragOver ? 'border-green-500' : 'border-dashed border-neutral-500'} p-6 flex flex-col items-center justify-center`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}>
                <img src='./src/assets/images/images22.png'/>
                    {preview ? (
                        fileType === 'image' ? (
                            <img src={preview} alt="Preview" className="max-h-48 object-contain" />
                        ) : (
                            <video src={preview} controls className="max-h-48 object-contain" />
                        )
                    ) : (
                        <>
                            <header className="text-lg text-black font-bold text-[31px]">
                                {dragOver ? 'Thả để tải ảnh/video lên' : 'Kéo và thả để tải file lên'}
                            </header>
                            <span className="my-3 text-black font-bold text-[31px]">Hoặc</span>
                            <button
                                type="button"
                                className="px-4 py-2 rounded bg-[#379d7d] text-white"
                                onClick={() => document.getElementById('fileInput').click()}
                            >
                                Khám phá
                            </button>
                            <input type="file" id="fileInput" accept="image/jpeg, image/jpg, image/png, video/mp4, video/webm, video/ogg" className="hidden" onChange={handleFileChange} />
                        </>
                    )}
                </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                {/* Form Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className={labelClasses}>Tiêu đề</label>
                    <input type="text" placeholder="Nhập tiêu đề" className={inputClasses} />
                </div>
                <div className="mb-4">
                    <label className={labelClasses}>Tiêu đề gắn thẻ</label>
                    <input type="text" placeholder="Nhập tag" className={inputClasses} />
                </div>
                
            </div>
            <button type="submit" className={`${buttonClasses} mt-10`}>
                Tải lên
            </button>
            </div>
            
        </div>
        </div>
    );
};

export default FormUpload;