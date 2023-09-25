import styles from './InvestmentCalculatorTable.module.css'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export default function InvestmentTable(props) {
  const yearlyData = props.yearlyData
  const hasData = yearlyData.length > 0

  return (<>
    {!hasData && <p className={styles['fallback']}>Data returned no results.</p>}
    {hasData && <table className={styles['result']}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map(({year, yearlyInterest, savingsEndOfYear, totalInterest, investedCapital}) => (
          <tr key={year}>
            <td>{year}</td>
            <td>{formatter.format(savingsEndOfYear)}</td>
            <td>{formatter.format(yearlyInterest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>}
  </>)
}