import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import CurrencyHook from "./hooks/currencyHook.js";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted, setConverted] = useState(0);
  const currencyInfo = CurrencyHook(from);
  const options = Object.keys(currencyInfo);

  const calculate = () => {
    setConverted(amount * currencyInfo[to]);
  }

  return (
    
      <div className="container">
        <Input
          inputDisable={false}
          amount={amount}
          label="From"
          currencyOptions={options}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <Input
          inputDisable
          label="To"
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          amount={converted}
        />

        <button id="button" onClick={calculate}>
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    
  );
}

export default App;
