import React from "react";
import "./input.css";
import { useId } from "react";
function Input({
  amount,
  onAmountChange,
  onCurrencyChange,
  label,
  currencyOptions=[],
  selectCurrency = "usd",
  inputDisable=false,
}) {
  const amountId = useId();
  return (
    <>
      <div className="input">
        <form action="">
          <div id="formLeft">
            <label htmlFor={amountId}> {label}</label>
            <input
            id={amountId}
           
            disabled={inputDisable}
              type="number"
              value={amount}
              onChange={(e) =>
                onAmountChange && onAmountChange(Number(e.target.value))
              }
            />
          </div>
          <div id="formRight">
            <label>Currency Type</label> <br />
            <select
              name="currNameFrom"
              id="currNameFrom"
              onChange={(e) => {
                onCurrencyChange && onCurrencyChange(e.target.value);
              }}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </>
  );
}

export default Input;
