import React from "react";

export const MyButton = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Button</button>;
};
