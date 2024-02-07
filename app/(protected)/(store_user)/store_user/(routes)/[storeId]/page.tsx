"use client";

import React from "react";
import Container from "../../../_components/container";

const StorePage: React.FC = ({}) => {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <Billboard data={billboard} /> */}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {/* <ProductList title="Featured Products" items={products} /> */}
        </div>
      </div>
    </Container>
  );
};
export default StorePage;
