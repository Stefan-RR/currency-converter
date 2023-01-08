

const Currency = (props) => {
  const {
    currencyOptions
  } = props

  return (
    <div className='values'>
        <input type='number' className='amount'></input>
        <select className='currency'>
            {currencyOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default Currency