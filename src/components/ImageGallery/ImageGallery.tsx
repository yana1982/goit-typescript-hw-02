import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../ImageCard/ImageCard";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (
    regular: string,
    alt_description: string,
    userName: string,
    likes: number,
    description?: string
  ) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={css.imgList}>
      {images.map((image) => {
        return (
          <li className={css.imgItem} key={image.urls.regular}>
            <ImageCard
              image={image}
              onImageClick={(
                regular,
                alt_description,
                userName,
                likes,
                description
              ) =>
                onImageClick(
                  image.urls.regular,
                  image.alt_description,
                  image.user.name,
                  image.likes,
                  image.description
                )
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
