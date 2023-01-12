import { useState } from "react"
import { ButtonContainer, CounterContainer, Value, Button } from "./Counter.styled"

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


  function Counter () {
const [value, setValue] = useState(0)

const handleClick = (number) => {
    setValue(pS =>  pS + number)
}

return (
    <CounterContainer>
        <Value style={{color: getRandomHexColor()}}>{value}</Value>
        <ButtonContainer>
            <Button style={{backgroundColor: "#1c36cd"}} type="button" onClick={() => handleClick(1)}>Додати</Button>
            <Button style={{backgroundColor: "#b9c515"}} type="button" onClick={() => handleClick(-1)}>Відняти</Button>
        </ButtonContainer>
    </CounterContainer>
)
}

export default Counter