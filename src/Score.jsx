const Score = (props) => {
  console.log(props, 'score')
  return (
    <div>
      {props.studentName} scored: {props.score.score} on: {props.score.date}.
    </div>
  )
}

export default Score 