import React from "react";

import { Container } from "@material-ui/core";

import CategoryFilter from './CategoryFilter'

const Aside = () => {

  return (
    <>
      <Container>
        <CategoryFilter />
      </Container>
    </>
  );
};

export default Aside;
