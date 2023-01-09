

const Currency = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
    <div className='values'>
        <input type='number' className='amount' value={amount} onChange={onChangeAmount}></input>
        <select value={selectedCurrency} className='currency' onChange={onChangeCurrency}>
            {currencyOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default Currency