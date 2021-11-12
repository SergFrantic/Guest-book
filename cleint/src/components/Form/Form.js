

function Form({ handlerForm }) {

  return (
    <div className="card mt-3" >
      <form onSubmit={(e) => handlerForm(e)}>
        <div className="m-3">
          <label htmlFor="nickname" className="form-label">Nickname</label>
          <input type="text" className="form-control" id="nickname" name="nickname" aria-describedby="emailHelp" required />
        </div>
        <div className="m-3">
          <label htmlFor="message" className="form-label">Your message</label>
          <textarea type="text" className="form-control" id="message" name="message" aria-describedby="emailHelp" required />
        </div>
        <button type="submit" className="btn btn-primary m-3">leave a message</button>
      </form>
    </div>
  )
}
export default Form
//required .env.sample
