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


  const presseventForm= () => {
    setEditPressevent({device_id: '',
      is_button_on: true})
  }


  return (
    <div className="App">

    <div className="row">
      <div className="col">
        <h2 className="telexi_header">telexi</h2>
        <br/>
        <br/>
      </div>

      <div className="col">
        <button onClick={logoutButton}
              className="logoutButton">Logout</button>
      </div>
    </div>



      <PresseventList pressevents={pressevents}
                      deleteButton={deleteButton}/>

    </div>
  );
}

export default App;
