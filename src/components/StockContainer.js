import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock }) {

  //create stock component in a variable, pass it db info.

const stockList = stocks.map((stock) => (
  <Stock 
    key={stock.id}
    stock={stock} 
    onStockClick={onAddStock}/>
))


  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
