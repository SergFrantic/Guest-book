

function Message({ props }) {
  const i = props[1]
  const { nickname, message } = props[0]

  return (
    <div className="card mt-3" >
      <div className="card-body">
        <h5 className="card-title">{i + 1}. {nickname}</h5>
        <p className="card-text">{message}</p>
      </div>
    </div>
  )
}
export default Message
