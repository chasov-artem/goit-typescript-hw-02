import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  const handleImageClick = (event, image) => {
    event.preventDefault();
    openModal(image);
  };

  return (
    <div>
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
