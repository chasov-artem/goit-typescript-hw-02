import { useEffect, useState } from "react";
import styles from "./App.module.css";

import ImageGallery from "../ImageGallery/ImageGallery.tsx";
import Loader from "../Loader/Loader.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.tsx";
import ImageModal from "../ImageModal/ImageModal.tsx";
import ReactModal from "react-modal";
import { Toaster } from "react-hot-toast";
import { ErrorMessage } from "formik";
import { fetchImages } from "../Services/api.tsx";

ReactModal.setAppElement("#root");

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { images: newImages, totalPages } = await fetchImages(
          page,
          query
        );
        setImages((prevImages) =>
          page === 1 ? newImages : [...prevImages, ...newImages]
        );
        setTotalPages(totalPages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getData();
    }
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <header className={styles.header}>
        <SearchBar setQuery={handleSearch} />
      </header>
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}

      {isOpen && selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onRequestClose={closeModal}
          selectedImage={selectedImage}
        />
      )}

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
