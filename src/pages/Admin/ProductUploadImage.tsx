import { useRef, useState, type ChangeEvent } from "react";

interface IUploadImageProps {
  onUploadImage: (file: File) => void;
  defaultImageUrl?: string;
}

const UploadImage = ({ onUploadImage, defaultImageUrl }: IUploadImageProps) => {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>("");
  const ImageRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    onUploadImage(file!);
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleClick = () => {
    ImageRef.current?.click();
  };
  return (
    <div>
      {defaultImageUrl && (
        <figure className="w-1/2 text-center m-auto mb-5 h-56 overflow-hidden rounded-md">
          <img
            src={defaultImageUrl}
            alt="image"
            className="w-full h-full object-cover"
          />
        </figure>
      )}

      <section className="flex flex-col items-center gap-7 mb-3">
        {image && (
          <figure className="w-52 h-56 overflow-hidden rounded-md">
            <img
              src={preview}
              alt="image"
              className="w-full h-full object-cover"
            />
          </figure>
        )}
        <label
          htmlFor="image"
          onClick={handleClick}
          className="border label-text w-full text-center p-7 rounded-md border-dashed input-bordered"
        >
          {image ? `Image Uploaded: ${image.name}` : "Upload image"}
        </label>
        <input
          type="file"
          id="image"
          onChange={handleFileChange}
          accept="image/*"
          hidden
        />
      </section>
    </div>
  );
};

export default UploadImage;
