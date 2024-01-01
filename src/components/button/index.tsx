import React from "react";

export function Button(props: React.ComponentPropsWithRef<"button">) {
  const { children, className, ...rest } = props;

  return (
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className ? className : ''}`} {...rest}>{children}</button>
  )
}