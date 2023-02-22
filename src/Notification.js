import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios"

function Notification() {

    const [dataa, setDataa] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:8000/displaynotification")
        .then((a) => {
          setDataa(a.data.data);
        })
        .catch((e) => {
          console.log(e, "error");
        });
    }, []);

    return (
      <>
        <form>
        <table align="center" className="table-notification" style={{width:"60%"}}>
          <thead style={{ fontWeight: "bold", color: "red" }}>
            <td>ID</td>
            <td>NOTIFICATIONS</td>
            </thead>
  
          {
          dataa.map((e) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td key={e.id}>{e._id}</td>
                    <td>{e.notification}</td>                 
                  </tr>
                </tbody>
              </>
            );
          })}
  
        </table>
        </form>
      </>
    );
      
}

export default Notification