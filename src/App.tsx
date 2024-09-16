import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import { useState, useEffect, useRef } from "react";
import getImages from "./js/unsplash-api";
import toast from "react-hot-toast";
import { Image } from "../src/js/unsplash-api";
export interface ModalState {
  modalIsOpen: boolean;
  srcUrl: string;
  altDescription: string;
  authorName: string;
  likes: string;
  largeDescription: string;
}

export interface ImageData {
  srcUrl: string;
  altDescription: string;
  authorName: string;
  likes: number;
  largeDescription: string;
}

function App() {
  const MODAL_INITIAL_STATE: ModalState = {
    modalIsOpen: false,
    srcUrl: "",
    altDescription: "",
    authorName: "",
    likes: "",
    largeDescription: "",
  };
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState<boolean>(false);
  const [modalState, setModalState] = useState<ModalState>(MODAL_INITIAL_STATE);

  const mainElem = useRef<HTMLDivElement>(null);

  const handleSearch = (newSearch: string) => {
    setSearch(newSearch);
    setPage(1);
    setImages([]);
  };

  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };

  const handleModalOpen = (image: Image) => {
    setModalState({
      modalIsOpen: true,
      srcUrl: image.urls.regular,
      altDescription: image.alt_description,
      authorName: image.user.name,
      likes: image.likes,
      largeDescription: image.alt_description,
    });
  };

  const handleModalClose = (image?: Image) => {
    setModalState(MODAL_INITIAL_STATE);
  };

  useEffect(() => {
    async function getImagesData() {
      try {
        setError(false);
        if (search === "") {
          setShowLoadMoreBtn(false);
          return;
        }
        setLoading(true);
        const data = await getImages(search, page);
        if (data.total === 0) {
          setShowLoadMoreBtn(false);
          toast("There are no results!");
          return;
        }
        setImages((prevImages) => [...prevImages, ...data.results]);
        setShowLoadMoreBtn(data.total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImagesData();
  }, [search, page]);

  useEffect(() => {
    if (page === 1) return;
    mainElem.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [images, page]);

  return (
    <div ref={mainElem}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={handleModalOpen} />
      {showLoadMoreBtn && !loading && (
        <LoadMoreBtn onLoadMoreBtn={handleLoadMoreBtn} />
      )}
      {loading && <Loader />}
      <ImageModal onModalClose={handleModalClose} modalState={modalState} />
    </div>
  );
}

export default App;
