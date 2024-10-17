import { loaderSvg } from "../../assets";

const Loader = () => {
  return (
    <div className="absolute inset-0 bg-zinc-50 flex place-content-center place-items-center">
      <img src={loaderSvg} alt="loading" className="w-12 h-12" />
    </div>
  );
};

export default Loader;
