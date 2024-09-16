import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <InfinitySpin width="200" color="#4d5ca9" />
    </div>
  );
};

export default Loader;
