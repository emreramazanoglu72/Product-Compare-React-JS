import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { AppContext } from "../AppProvider";
const ProductCard = ({ id, title, image, price, altText }) => {
  const { productList, compareList, setCompareList } = useContext(AppContext);
  const [selectButton, setSelectButton] = useState(false);
  useEffect(() => {
    controlCompare();
  }, [id]);

  const controlCompare = () => {
    var selectItem = compareList.filter((filter) => filter.id == id)[0];
    selectItem && setSelectButton(true);
  };

  const addCompareList = () => {
    var newList = [...compareList];
    var selectItem = productList.filter((filter) => filter.id == id)[0];
    newList.push(selectItem);
    setCompareList(newList);
    setSelectButton(true);
  };

  const removeCompareList = () => {
    var selectItem = compareList.filter((filter) => filter.id != id);
    setSelectButton(false);
    setCompareList(selectItem);
  };
  return (
    <Card>
      <CardImg
        top
        width="100%"
        height="250px"
        src={image}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {price}
        </CardSubtitle>
        <CardText>{altText}</CardText>
        <Button
          onClick={selectButton ? removeCompareList : addCompareList}
          outline
          active={selectButton}
          color={"dark"}
          className="w-100"
        >
          {selectButton ? "Remove Compare" : "Compare"}
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
