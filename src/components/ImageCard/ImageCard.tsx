import { CiHeart, CiUser } from "react-icons/ci";
import css from "./ImageCard.module.css";

export interface Image {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
  description?: string;
}

interface ImageCardProps {
  image: Image;
  onImageClick: (
    regular: string,
    alt_description: string,
    userName: string,
    likes: number,
    description?: string
  ) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={css.imgContainer}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() =>
          onImageClick(
            image.urls.regular,
            image.alt_description,
            image.user.name,
            image.likes,
            image.description
          )
        }
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
