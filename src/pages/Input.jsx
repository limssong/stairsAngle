import { useState } from "react"

const Input = () => {
  const [angle, setAngle] = useState('');
  const onChange = (event) => {
    setAngle(event.target.value)
  }
  return (
    <>
      <input type="text" placeholder="cm" name="base" onChange={onChange} />
      <input type="text" placeholder="cm" name="height" onChange={onChange} />
    </>
  )
}

export default Input