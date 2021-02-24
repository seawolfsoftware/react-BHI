import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import PresseventList from './components/PresseventList';
import Form from './components/Form';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';


function App() {


  const [pressevents, setPressevents] = useState([])
  const [editPressevent, setEditPressevent] = useState(null)
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let history = useHistory()

  useEffect(() => {
    fetch('https://telexi.seawolfsoftware.io/api/v1/press_events/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['mytoken']}`,
      }
    })
  .then(resp => resp.json())
  .then(resp => setPressevents(resp))
  .catch(error => console.log(error))

  }, [])

    useEffect(() => {
        if(!token['mytoken']){
            history.push('/')
        }
    }, [token])


  const editButton = (pressevent) => {
    setEditPressevent(pressevent)
  }

  const deleteButton = (pressevent) => {
    const new_pressevents = pressevents.filter(mypressevent => {
      if(mypressevent.id === pressevent.id) {
        return false
      }
      return true
    })

    setPressevents(new_pressevents)
  }

  const logoutButton = () => {
    removeToken(['mytoken'])

  }

  const updatedInformation= (pressevent) => {
      const new_pressevent = pressevents.map(mypressevent => {
        if(mypressevent.id == pressevent.id){
          return pressevent;
        }
        else{
          return mypressevent;
        }
      })

      setPressevents(new_pressevent)
  }

  const insertedInformation = (pressevent) => {
    const new_pressevents = [...pressevents, pressevent]
    setPressevents(new_pressevents)

  }


  const presseventForm= () => {
    setEditPressevent({device_id: '', is_button_on: true, created_at: ''})
  }


  return (
    <div className="App">

    <div className="row">
      <div className="col">
        <h3>telexi stream</h3>
        <br/>
      </div>

      <div className="col">
        <button onClick={presseventForm} className="btn btn-primary">Insert Press Event</button>
      </div>


      <div className="col">
        <button onClick={logoutButton} className="btn btn-primary">Logout</button>
      </div>


    </div>


      <PresseventList pressevents={pressevents} editButton={editButton} deleteButton={deleteButton}/>

      {editPressevent ? <Form pressevent={editPressevent} updatedInformation={updatedInformation} insertedInformation={insertedInformation}/> : null}


    </div>
  );
}

export default App;
