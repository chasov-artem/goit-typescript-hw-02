import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { fetchImages } from "../Services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ReactModal from "react-modal";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Image } from "../Types/types";

ReactModal.setAppElement("#root");

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetchImages(page, query);
        if (response) {
          const { images: newImages, totalPages } = response;
          setImages((prevImages) =>
            page === 1 ? newImages : [...prevImages, ...newImages]
          );
          setTotalPages(totalPages);
        } else {
          setIsError(true);
        }
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

  const handleSearch = (searchQuery: string) => {
    if (searchQuery !== query) {
      setQuery(searchQuery);
      setPage(1);
      setImages([]);
    } else {
      setPage(1);
    }
  };

  const openModal = (image: Image) => {
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
