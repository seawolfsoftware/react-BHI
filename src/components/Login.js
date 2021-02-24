import React, {useState, useEffect} from 'react';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';


function Login() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    let history = useHistory()

    useEffect(() => {
        if(token['mytoken']){
            history.push('/press_events')
        }
    }, [token])

    const loginButton = () => {
        APIService.LoginUser({username, password})
        .then(resp => setToken('mytoken', resp.token))
        .catch(error => console.log(error))
    }

    const registerButton = () => {
        APIService.RegisterUser({username, password})
        .then(() => loginButton())
        .catch(error => console.log(error))
    }

    return (
        <div className="App">

            {isLogin ? <h1>Login</h1> : <h1>Register</h1> }


            <div className="mb-3">
                <label htmlFor="username"
                        className="form-label">Username</label>
                <input type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="password"
                        className="form-label">Password</label>
                <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
            </div>


            {isLogin ? <button onClick={loginButton} className="btn btn-primary">Login</button>
            : <button onClick={registerButton} className="btn btn-primary">Register</button>}




            <div className="mb-3">
                {isLogin ? <h5>If you don't have an account, create one
                <button className="btn btn-primary" onClick={() => setLogin(false)}>Register</button>here</h5> :
                <h5>If you have an account, <button className="btn btn-primary" onClick={() => setLogin(true)}>Login</button>here</h5>}
            </div>


        </div>
    )
}

export default Login
