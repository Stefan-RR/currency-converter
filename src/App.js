import './App.css';
import Currency from "./components/Currency";

function App() {
  return (
    <div className="container">
        <span className='content'>
          <Currency />
          <div className='equal'>is equal to</div>
          <Currency />
        </span>
    </div>
  );
}

export default App;
