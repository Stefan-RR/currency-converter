

const Currency = () => {
  return (
    <div>
        <input type='number' className='amount'></input>
        <select className='currency'>
            <option value='USD'>USD</option>
            <option value='USD'>CAD</option>
            <option value='USD'>EUR</option>
        </select>
    </div>
  )
}

export default Currency