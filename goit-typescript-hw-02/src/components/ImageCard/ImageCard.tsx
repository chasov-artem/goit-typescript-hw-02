import "./ImageCard.module.css";
const ImageCard = ({ image }) => {
  return (
    <div>
      <a href={image.links?.html} target="_blank" rel="noopener noreferrer">
        <img
          src={image.urls?.small}
          alt={image.alt_description || "No description available"}
        />
      </a>
      <p>{image.alt_description || "No description available"}</p>
      <p>Likes: {image.likes}</p>
      <p>Updated: {image.user.updated_at}</p>
      <p>Name: {image.user.name}</p>
      <p>Username: {image.user.username}</p>
    </div>
  );
};
export default ImageCard;
