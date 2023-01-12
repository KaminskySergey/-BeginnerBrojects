
const GameResult = ({total, correct}) => {
    console.log(total);
    return (
        <>
        <p>Вы ответили правильно на {correct} из {total.length}</p>
        
        </>
    )
}

export default GameResult;