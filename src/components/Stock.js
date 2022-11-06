import React, {useState} from "react";

function Stock({stock, onStockClick}) {


const {id, ticker, name, date, price} = stock

//write function to call the onStockCLick function in parent

function handleClick() {
  onStockClick(stock);
}

console.log(onStockClick)

  return (
    <div onClick={handleClick}>
      <div  className="card">
        <div className="card-body">
          <h5 className="card-title">{ticker}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
