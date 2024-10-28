import { loadMoreBtnProps } from "../Types/types";
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<loadMoreBtnProps> = ({ handleChangePage }) => {
  return (
    <button className={styles.button} onClick={handleChangePage}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
