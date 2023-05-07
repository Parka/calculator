import React, { FC } from "react";

const VARIANTS = {
  gray: "from-slate-200 to-slate-300 ",
  orange: "from-orange-200 to-orange-300",
  purple: "from-purple-200 to-purple-300",
};

type Props = JSX.IntrinsicElements["button"] & {
  variant?: keyof typeof VARIANTS;
  active?: boolean;
};

const Button: FC<Props> = ({
  className = "",
  variant = "gray",
  active = false,
  ...props
}) => {
  return (
    <button
      className={`
        rounded bg-gradient-to-b p-4
        text-3xl bg-blend-darken
        outline outline-1 outline-offset-0 outline-gray-400
        hover:shadow-inner active:bg-slate-300 active:drop-shadow-none
        ${active ? "bg-slate-300 drop-shadow-none" : ""}
        ${VARIANTS[variant]}
        ${className}
      `}
      {...props}
    />
  );
};

export default Button;
