import React, { useContext } from "react";
import { Table } from "reactstrap";
import { AppContext } from "../AppProvider";

const CompareList = () => {
  const { compareList } = useContext(AppContext);
  const colors = ["bg-dark", "bg-success", "bg-primary", "bg-danger"];
  if (compareList.length < 2) {
    return null;
  }
  return (
    <Table>
      <tbody>
        <tr className="p-4">
          <th scope="row"></th>
          {compareList.map((item) => (
            <td className="text-center text-weight-bold">
              <h3>{item.name}</h3>
            </td>
          ))}
        </tr>
        <tr className="p-4">
          <th scope="row">
            <h3>Price</h3>
          </th>
          {compareList.map((item) => (
            <td className="text-center text-weight-bold">
              <h4>{item.price}</h4>
            </td>
          ))}
        </tr>
        <tr className="p-4">
          <th scope="row">
            <h3>Colors</h3>
          </th>
          {compareList.map((item) => (
            <td className="text-center text-weight-bold">
              <h4>{item.colors.join(" ")}</h4>
            </td>
          ))}
        </tr>
        <tr className="p-4">
          <th scope="row">
            <h3>Condition</h3>
          </th>
          {compareList.map((item, key) => (
            <td
              className={`${colors[key]} text-center text-weight-bold text-white`}
            >
              <h4>{item.condition}</h4>
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default CompareList;
