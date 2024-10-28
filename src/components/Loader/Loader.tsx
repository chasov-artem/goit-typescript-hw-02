import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader color="#3498db" size={150} />
    </div>
  );
};

export default Loader;
