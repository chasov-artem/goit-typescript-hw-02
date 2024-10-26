import styles from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleChangePage }) => {
  return (
    <button className={styles.button} onClick={handleChangePage}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
