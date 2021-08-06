import React, { useContext } from "react";
import { Col, Row } from "reactstrap";
import { AppContext } from "../AppProvider";
import ProductCard from "./productCard";

const ProductList = () => {
  const context = useContext(AppContext);
  return (
    <React.Fragment>
      <h3 className="text-weight-bold mb-4">Compare Products</h3>
      <Row>
        {context?.productList?.map((item) => (
          <Col sm={3}>
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.name}
              image={item.image}
              price={item.price}
              altText={item.description}
            />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default ProductList;
