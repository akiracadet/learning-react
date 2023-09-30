import "./styles.css"

export default function AgeInput(props) {
  const {age, setAge} = props

  const onChangeAge = (event) => {
    const ageValue = event.target.value.trim();
    const lastChar = ageValue[ageValue.length - 1]

    if (isNaN(lastChar) && ageValue.length !== 0) return
    if (/^0[0-9]/.test(ageValue)) return

    setAge(ageValue)
  };

  return (
    <div>
      <div>
        <label htmlFor="age">Age (Years)</label>
        <input
          className="input"
          type="text"
          id="age"
          name="age"
          value={age}
          onChange={onChangeAge}
        />
      </div>
    </div>
  )
}
