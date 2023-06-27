import "../stylesheets/pages/NewProducts.scss";
import Button from "../components/Button/Button";
import { useForm } from "react-hook-form";
import { createNewProduct } from "../api/firebase";
import { useState } from "react";
import { uploadImageCloudinary } from "../api/cloudinary";

export default function NewProducts() {
  const { register, handleSubmit, reset } = useForm();
  const [imgURL, setImgURL] = useState(null);
  const [isUploding, setIsUploding] = useState(false);
  const [uploadText, setUploadText] = useState("");

  const onSubmit = (data) => {
    setIsUploding(true);
    uploadImageCloudinary(imgURL)
      .then((url) => {
        createNewProduct(data, url) //
          .then(() => {
            setUploadText("성공적으로 제품이 추가 되었습니다.");
            setTimeout(() => {
              setUploadText("");
            }, 4000);
          });
      })
      .finally(() => setIsUploding(false));
    reset();
    setImgURL(null);
  };

  const handleImage = (event) => {
    const imgFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = (e) => {
      setImgURL(e.target.result);
    };
  };

  return (
    <div className="new_product_wrap">
      <h2>새로운 제품 등록</h2>
      {imgURL && (
        <div className="product_img">
          <img src={imgURL} alt="상품 이미지미리보기" />
        </div>
      )}
      <form className="new_product_form" onSubmit={handleSubmit(onSubmit)}>
        <input type="file" accept="image/*" onChange={handleImage} required />
        <input
          type="text"
          placeholder="제품명"
          {...register("title", { required: true })}
        />
        <input
          type="number"
          placeholder="가격"
          {...register("price", { required: true })}
        />
        <input
          type="text"
          placeholder="카테고리"
          {...register("category", { required: true })}
        />
        <input
          type="text"
          placeholder="제품정보"
          {...register("description", { required: true })}
        />
        <input
          type="text"
          placeholder="(,)를 사용하여 옵션을 등록해주세요"
          {...register("options", { required: true })}
        />
        <Button disabled={isUploding}>
          {isUploding ? "업로드중..." : "제품등록"}
        </Button>
      </form>
      {uploadText && <p className="success_text">✅ {uploadText}</p>}
    </div>
  );
}
