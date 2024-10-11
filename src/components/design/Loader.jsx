import { loaderSvg } from "../../assets";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[80] bg-zinc-50 flex place-content-center place-items-center">
      <img src={loaderSvg} alt="loading" className="w-12 h-12" />
    </div>
  );
};

export default Loader;
