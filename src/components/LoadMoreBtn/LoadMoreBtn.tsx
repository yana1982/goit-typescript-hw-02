import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMoreBtn: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMoreBtn }) => {
  return (
    <>
      <button className={css.btn} type="button" onClick={onLoadMoreBtn}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
