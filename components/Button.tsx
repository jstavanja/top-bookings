import Link from "next/link";
import { FC, MouseEventHandler, PropsWithChildren, ReactElement } from "react";

interface ButtonProps {
  iconClass: string;
  onClick?: MouseEventHandler;
  href?: string;
  transparent?: boolean;
  className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  iconClass,
  onClick,
  href,
  transparent,
  children,
}) => {
  const btn = (
    <button
      className={
        (transparent
          ? "bg-white text-gray-800 active:bg-gray-100"
          : "bg-pink-500 text-white active:bg-pink-600") +
        " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
      }
      type="button"
      onClick={onClick}
      style={{ transition: "all .15s ease" }}
    >
      <i className={iconClass}></i> {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{btn}</Link>;
  }

  return btn;
};
