import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded shadow">
        <InputBox
          label="From"
          amount={amount}
          currency={from}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          currencyOptions={options}
        />

        <div className="text-center my-4">
          <button onClick={swap} className="bg-gray-200 px-4 py-2 rounded mx-2">🔄 Swap</button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          currency={to}
          onCurrencyChange={setTo}
          currencyOptions={options}
          isDisabled={true}
        />

        <button onClick={convert} className="w-full bg-green-600 text-white mt-4 px-4 py-2 rounded">
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;


