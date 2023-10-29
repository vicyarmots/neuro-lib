import cn from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./Button.modules.css";
import React from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  label?: string;
};

export function Button({
  label,
  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(s.box, className, {
        [s.iconBox]: !children,
      })}
      {...props}
    >
      {icon}
      {children}
      {label}
    </button>
  );
}
