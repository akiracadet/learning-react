import styles from './InvestmentCalculatorTable.module.css'

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
        {yearlyData.map(({year, yearlyInterest, savingsEndOfYear, yearlyContribution}) => (
          <tr>
            <td>{year}</td>
            <td>{yearlyInterest}</td>
            <td>{savingsEndOfYear}</td>
            <td>{yearlyContribution}</td>
            <td>{year * yearlyContribution}</td>
          </tr>
        ))}
      </tbody>
    </table>}
  </>)
}