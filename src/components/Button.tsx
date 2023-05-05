import React, { FC } from "react";

const VARIANTS = {
  gray: "from-slate-200 to-slate-300 ",
  orange: "from-orange-200 to-orange-300",
  purple: "from-purple-200 to-purple-300",
};

type Props = JSX.IntrinsicElements["button"] & {
  variant?: keyof typeof VARIANTS;
};

const Button: FC<Props> = ({ className = "", variant = "gray", ...props }) => {
  return (
    <button
      className={`
        rounded p-4 text-3xl
        hover:shadow-inner active:drop-shadow-none
        outline outline-1 outline-offset-0 outline-gray-400
        bg-gradient-to-b bg-blend-darken active:bg-slate-300
        ${VARIANTS[variant]}
        ${className}
      `}
      {...props}
    />
  );
};

export default Button;
