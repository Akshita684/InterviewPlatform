import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);

      const localPreview = URL.createObjectURL(file);
      setPreview && setPreview(localPreview);
      setPreviewUrl(localPreview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (setPreview) setPreview(null);

    // Allow re-selecting same file later
    if (inputRef.current) inputRef.current.value = "";
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  // use either external preview or internal one
  const displayedPreview = preview || previewUrl;

  return (
    <div className="flex justify-center mb-2">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Show placeholder when no image */}
      {!displayedPreview ? (
        <div
          className="w-20 h-20 flex items-center justify-center bg-rose-100 rounded-full relative cursor-pointer"
          onClick={onChooseFile}
        >
          <LuUser className="text-4xl text-rose-500" />

          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-rose-400/100 to-rose-600 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onChooseFile();
            }}
          >
            <LuUpload className="text-lg"/>
          </button>
        </div>
      ) : (
        // Show uploaded/selected image
        <div className="relative">
          <img
            src={displayedPreview}
            alt="profile photo"
            className="w-20 h-20 rounded-full object-cover bg-gray-100"
          />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-rose-500 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer"
            onClick={handleRemoveImage}
          >
            <LuTrash className="text-lg" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
