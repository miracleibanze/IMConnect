import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./design/Button";

const PageNotFound = () => {
  const location = useLocation();
  return (
    <div className="flex items-center flex-1 justify-center h-full">
      <div className="relative body-2">
        <h4 className="h4 font-normal">Error! Page not found.</h4>
        <p className="font-normal">
          this link "<u className="underline">{location.pathname}</u>" that you
          provided was not found, Please try other pages or go back home
        </p>
        <div className="min-w-full mt-4 flex place-content-end">
          <Link to={"/"}>
            <Button blue>Go back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(PageNotFound);
