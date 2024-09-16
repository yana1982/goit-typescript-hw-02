import { CiHeart, CiUser } from "react-icons/ci";
import css from "./ImageCard.module.css";
import { Image } from "../../js/unsplash-api";

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={css.imgContainer}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image)}
      />
      <ul className={css.imgList}>
        <li className={css.imgItem}>
          <CiUser size="20" />
          {image.user.name}
        </li>
        <li className={css.imgItem}>
          <CiHeart size="20" />
          {image.likes}
        </li>
      </ul>
    </div>
  );
};

export default ImageCard;
