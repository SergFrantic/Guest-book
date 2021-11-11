import Form from "./components/Form/Form";
import Message from "./components/Message/Message";
import { useEffect, useState } from 'react'
import MessageDefault from "./components/MessageDefault/MessageDefault";
import * as endPoints from "./config/endPoints"


function App() {

  const [listMessage, setlistMessage] = useState([])

  useEffect(() => {

    fetch(endPoints.viewAll())
      .then(res => res.json())
      .then(data => {
        setlistMessage(data)
      }, (error) => setlistMessage([{ id: 0, nickname: "Error", message: "the remote server is down" }]))

  }, [])

  const handlerForm = (e) => {
    e.preventDefault()
    const dataForm = Object.fromEntries(new FormData(e.target))
    if (dataForm.nickname.trim() && dataForm.message.trim()) {
      fetch(endPoints.addMessage(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForm)
      })
        .then(res => res.json())
        .then(data => {
          data.id === 0 ?
            alert('no form data') :
            setlistMessage(prev => [data, ...prev])
        })
        .catch(error => setlistMessage([{ id: 0, nickname: "Error", message: error.message }]))

      e.target.reset()
    } else {
      alert('no form data')
    }
  }

  return (
    <div className="container mt-5">
      <Form handlerForm={handlerForm} />

      {listMessage.length ?
        listMessage.map((e, i) => <Message key={e.id} props={[e, i]} />) :
        <MessageDefault />}

    </div>
  );
}

export default App;
