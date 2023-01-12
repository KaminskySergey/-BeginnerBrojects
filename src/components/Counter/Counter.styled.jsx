import styled from '@emotion/styled'



export const CounterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 300px;
    height: 350px;
    
    outline: 2px solid black;
    border-radius: 10px;
    
    
`

export const Value = styled.p`
    font-size: ${p => p.theme.space[5]}px;
    color: getRandomHexColor();
`

export const ButtonContainer = styled.div`
        width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const Button = styled.button`
    height: ${p => p.theme.space[4]}px;
    width: ${p => p.theme.space[6]}px;

    border-radius: 3px;
    border: none;
    cursor: pointer;
    transition: 250ms all;

    &:hover, &:focus {
        transform: scale(1.1);
    }
`