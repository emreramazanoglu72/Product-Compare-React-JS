import React from "react";
import { Container } from "reactstrap";
import CompareList from "./components/CompareList";
import ProductList from "./components/productList";

const App = () => {
  return (
    <div>
      <Container className="mt-4 pt-4">
        <ProductList />
        <CompareList />
      </Container>
    </div>
  );
};

export default App;
