import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import PresseventList from './components/PresseventList';
import Form from './components/Form';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';
import telexiLogo from './static/img/rsz_telexi_blue_transparent.png';



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

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
      <img className="telexi_logo" src={telexiLogo} alt="telexi logo" height="58px"/>
      </a>
    </div>
    <ul class="nav navbar-nav">

    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> <button onClick={logoutButton}
                className="logoutButton">Logout</button></a></li>
    </ul>
  </div>
</nav>





    <div className="row">
      <div className="col">
        <h2 className="stream_header">Event Stream</h2>
        <br/>
        <br/>
      </div>


    </div>



      <PresseventList pressevents={pressevents}
                      deleteButton={deleteButton}/>

    </div>
  );
}

export default App;
