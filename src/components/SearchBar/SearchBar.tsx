import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (newSearch: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchInput = form.elements.namedItem(
      "searchInput"
    ) as HTMLInputElement;
    const search = searchInput.value.trim();

    if (search === "") {
      toast.error("Please enter text to search for images");
      return;
    }

    onSearch(search);
    form.reset();
  };
  return (
    <header className={css.header}>
      <Toaster position="top-right" />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchInput"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
