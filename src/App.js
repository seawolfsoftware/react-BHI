import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import PresseventList from './components/PresseventList';
import Form from './components/Form';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import profile_icon from './static/img/dog_profile.png';
import Avatar from '@material-ui/core/Avatar';



function App() {


  const [pressevents, setPressevents] = useState([])
  const [editPressevent, setEditPressevent] = useState(null)
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let history = useHistory()

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/press_events/', {
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

    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand"
              href="#">
              Bonobo Hope Initiative
          </a>
        </div>
        <ul className="nav navbar-nav">

        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="#">
                <button onClick={logoutButton}
                        className="logoutButton">
                        <Avatar alt="dog profile" src={profile_icon}/>
                </button>
              </a>
          </li>
        </ul>
      </div>
    </nav>


    <div className="row">
      <div className="col">
        <h2 className="stream_header">Event Stream</h2>

        <br/>
      </div>
    </div>

      <div className="press_events">
        <PresseventList pressevents={pressevents}
                        deleteButton={deleteButton}/>
      </div>
    </div>
  );
}

export default App;
