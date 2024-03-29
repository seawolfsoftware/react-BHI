import {useCookies} from 'react-cookie';

export default class APIService {


    static UpdatePressevent(pressevent_id, body, token ){

        return fetch(`http://127.0.0.1:8000/api/v1/press_events/${pressevent_id}/`,
        {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())

    }

    static InsertPressevent(body, token){
        return fetch(`http://127.0.0.1:8000/api/v1/press_events/`,
                    {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body:JSON.stringify(body)
    }).then(resp => resp.json())
    }



    static DeletePressevent(pressevent_id, token){
        return fetch(`http://127.0.0.1:8000/api/v1/press_events/${pressevent_id}/`,
        {
            'method': 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            }
        })

    }


    static LoginUser(body){
        return fetch(`http://127.0.0.1:8000/auth/`,
                    {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
    }).then(resp => resp.json())
    }



    static RegisterUser(body){
        return fetch(`http://127.0.0.1:8000/api/v1/users/`,
                    {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
    }).then(resp => resp.json())
    }



}
