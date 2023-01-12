
import '../../../src/index.css'
const Game = ({question, handleClickQuiz, total, step}) => {
    // console.log(question);
    // console.log(handleClickQuiz);
    // console.log(total);
    // console.log(step);
    
    const percentage = Math.round((step / total.length) * 100);
    
return (
    <>
    <div className='progress'>
        <div className='progress__inner' style={{width: `${percentage}%`}}></div>
    </div>
<p>
{question['question']}
</p>
<ul>
    {question.answers.map((el, index) => (
        
        <li onClick={() => handleClickQuiz(index)} key={el}>{el}</li>
    ))}
</ul>
    </>
)
}

export default Game;