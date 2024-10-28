import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image, ImageGalleryProps } from "../Types/types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  const handleImageClick = (
    event: React.MouseEvent<HTMLLIElement>,
    image: Image
  ) => {
    event.preventDefault();
    openModal(image);
  };

  return (
    <div className={styles.galleryContainer}>
      <ul className={styles.ul}>
        {images.map((image) => (
          <li
            key={image.id}
            className={styles.li}
            onClick={(event) => handleImageClick(event, image)}
          >
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
