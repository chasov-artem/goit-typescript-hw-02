import { Vortex } from "react-loader-spinner";
import "./Loader.module.css";

const Loader = () => {
  return (
    <Vortex
      visible={true}
      height="180"
      width="180"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={["blue", "yellow"]}
    />
  );
};
export default Loader;
