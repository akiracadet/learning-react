import {useState} from 'react'
import Header from './components/Header'
import InvestmentCalculatorForm from './components/InvestmentCalculatorForm'
import InvestmentCalculatorTable from './components/InvestmentCalculatorTable'

function App() {
  const [yearlyData, setYealyData] = useState([])

  return (
    <div>
      <Header />
      <InvestmentCalculatorForm setYealyData={setYealyData} />
      <InvestmentCalculatorTable yearlyData={yearlyData} />
    </div>
  );
}

export default App;
