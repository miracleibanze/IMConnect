import { memo } from "react";

const Button = ({
  className,
  onClick,
  children,
  dark,
  blue,
  red,
  light,
  rounded,
  hFull,
  border,
}) => {
  const classes = `button relative inline-flex items-center justify-center cursor-pointer transition-colors px-5 text-n-1 ${
    dark && "text-slate-100 bg-zinc-800 "
  } ${blue && "text-zinc-100 bg-blue-700"} ${
    border && "text-blue-700 border border-blue-700"
  } ${light && "text-zinc-800 bg-zinc-200"} ${
    rounded ? "rounded-full" : "rounded-md"
  } ${className && ""} ${hFull ? "h-full" : "h-8"}`;

  const spanClasses = `relative z-10 flex gap-4 items-center`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  return renderButton();
};

export default memo(Button);
