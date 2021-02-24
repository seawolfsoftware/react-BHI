import React from 'react';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';


function PresseventList(props) {


    const [token] = useCookies(['mytoken'])


    const deleteButton = (pressevent) => {
        APIService.DeletePressevent(pressevent.id, token['mytoken'])
        .then(() => props.deleteButton(pressevent))
        .catch(error => console.log(error))

    }


    return (

        <div class="container">

          {props.pressevents && props.pressevents.map(pressevent => {

            return (
              <div className="row">
                  <div className="row"
                        key={pressevent.id}>

                    <div className="col-sm-1">
                      <h4>{pressevent.device_id}</h4>
                    </div>

                    <div className="col-sm-8">
                      <h5>{pressevent.created_at}</h5>
                    </div>

                    <div className="col-sm-3">
                      <button onClick={() => deleteButton(pressevent)}
                              className="btn btn-danger">Delete</button>
                    </div>

                    <hr className="col hrclass"/>
                </div>
              </div>

          )
        })}

        </div>

    )
}

export default PresseventList

