function InputBox({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions = [],
  isDisabled = false,
}) {
  return (
    <div className="bg-white p-4 rounded shadow w-80 m-2">
      <label className="block text-gray-700 font-bold mb-2">{label}</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        className="w-full border rounded p-2 mb-2"
        disabled={isDisabled}
      />
      <select
        className="w-full border rounded p-2"
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;





