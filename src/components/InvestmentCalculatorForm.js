import styles from './InvestmentCalculatorForm.module.css'

export default function InvestmentCalculatorForm(props) {
  const setYearlyData = props.setYealyData

  const calculateUserInput = (userInput) => {
    const yearlyData = []; // per-year results

    const initialInvestment = +(userInput['current-savings'].value)
    let currentSavings = initialInvestment
    const yearlyContribution = +(userInput['yearly-contribution'].value)
    const expectedReturn = +(userInput['expected-return'].value) / 100
    const duration = +(userInput['duration'].value)

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: (currentSavings - initialInvestment - yearlyContribution * (i + 1)),
        yearlyContribution: yearlyContribution,
        investedCapital: (initialInvestment + yearlyContribution * (i + 1))
      });
    }

    return yearlyData
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const userInput = event.target.elements
    const yearlyData = calculateUserInput(userInput)
    setYearlyData(yearlyData)

    event.target.reset()
  }

  return (
    <form className={styles['form']} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className={styles['actions']}>
        <button type="reset" className={styles['buttonAlt']}>
          Reset
        </button>
        <button type="submit" className={styles['button']}>
          Calculate
        </button>
      </p>
    </form>
  )
}