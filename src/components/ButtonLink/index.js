import React from "react";
import Button from "./styled";

function ButtonLink({ name, link, className }) {
  return (
    <Button as="a" className={className} href={link}>
      {name}
    </Button>
  );
}

export default ButtonLink;
