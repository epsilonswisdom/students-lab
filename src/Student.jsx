import Score from "./Score"

const Student = (props) => {
  console.log(props, 'score')
  
  return (
    <>
      <h1> 
        {props.student.name}
        </h1>
      <h2> 
        {props.student.bio}
        </h2>
      <h3>
        {props.student.scores.map((score, idx) =>
        <Score score={ score } 
        studentName={ props.student.name } 
        key={idx}/>
        
        )}
      </h3>
    </>
  )
}

export default Student