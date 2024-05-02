import axios from "axios"
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';

const UnitSearch = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  
    });
  };
    const [unit, setUnit] = useState({
        unitnumber: "",
        buildingname:"",
    })

    const [rooms, setRooms] = useState([])

    useEffect(() => {
      if (rooms.length > 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, [rooms]);  // This effect runs every time 'rooms' changes.
  
    const nav = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3600/server/unitsearch",unit)
            .then(result=>{
              if(result.data.Status){
                setRooms(result.data.Result)
                console.log(result)
              }
            })
            .catch(err => console.log(err))
            // see what the error is
    };















return (
  <div style={styles.container}>
      <div style={styles.loginBox}>
          <h1 style={styles.header}>Search for Apartment 
</h1>
    
          <form onSubmit={handleSubmit} style={styles.form}>
              <div style={{marginBottom:"15px"}}>
                  <label style={{marginRight:"5px"}} htmlFor="unitnumber">Unit Number:</label>
                  <input
                      type="text"
                      id="unitnumber"
                      onChange={(e) => setUnit({...unit, unitnumber : e.target.value})} 
                      required
                      //mandatory
                      style={styles.input}
                  />
              </div>
              <button onClick={scrollToTop} style={styles.scrollButton}>Scroll to Top</button>

              <div style={styles.inputGroup}>
                  <label style={{marginRight:"9px"}} htmlFor="companyname">Building Name:</label>
                  <input
                      type="text"
                      id="buildingname"
                      onChange={(e) => setUnit({...unit, buildingname : e.target.value})} 
                      required
                      //mandatory
                      style={styles.input}
                  />
              </div>

              <button type="submit" style={{padding: 10, backgroundColor: '#007BFF',color: 'white', border: 'none',
              borderRadius: 4,  cursor: 'pointer', marginTop: 15,justifyContent:"center"}}>Search</button>

              <p style={{textAlign: 'center', color: '#007BFF', textDecoration: 'none',fontWeight: 'bold',}}>
                   <a href="#"  style={{   color: '#007BFF', textDecoration: 'none',fontWeight: 'bold',}}>Additioanl feature</a>
              </p>



              <table style={styles.table} >

      
            <thead>
              <tr>
               

            
                <th style={styles.th}>AddrZipCode</th>
                <th style={styles.th}>unitNumber</th>
                <th style={styles.th}>MonthlyRent</th>

                <th style={styles.th}>squareFootage</th>
                <th style={styles.th}>AvailableDateForMoveIn</th>
                <th style={styles.th}>BathroomCount</th>
                <th style={styles.th}>BedroomCount</th>
                <th style={styles.th}>LivingRoomCount</th>
                <th style={styles.th}>TotalRoomCount</th>
              </tr>
             
            </thead>

       

            <tbody>
              {rooms.map(i => (
                <tr key={i.id}>
        
                
                  <td style={styles.td}>{i.AddrZipCode}</td>
                  <td style={styles.td}>{i.unitNumber}</td>
                  <td style={styles.td}>{i.MonthlyRent}</td>

                  <td style={styles.td}>{i.squareFootage}</td>
                  <td style={styles.td}>{i.AvailableDateForMoveIn}</td>
                  <td style={styles.td}>{i.BathroomCount}</td>
                  <td style={styles.td}>{i.BedroomCount}</td>
                  <td style={styles.td}>{i.LivingRoomCount}</td>
                  <td style={styles.td}>{i.TotalRoomCount}</td>


                </tr>
              ))}
            </tbody>

            

          

          </table>

    
     
              
      
          </form>
      </div>
  </div>
);
}


const styles = {
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'lightgrey',
  },
  loginBox: {
      background: 'white',
      padding: 25,
      borderRadius: 10,
      boxShadow: '10 10 30px rgba(0, 0, 0, 0.2)',
      width: '90vw',
  },
  header: {
      textAlign: 'center',
      marginBottom: 20,
  },
  form: {
      display: 'flex',
      flexDirection: 'column',
      height:"!000px"
  },
  input: {
      padding: 10,
      border: '1px solid #ccc',
      borderRadius: 4,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    
    
  },
  th: {
    background: '#f4f4f4',
    color: '#333',
    fontWeight: 'bold',
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  },
  tbody:{
    padding:"300px"
  },
  scrollButton: {
    position: 'fixed',
    right: 20,
    bottom: 20,
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer'
  }
  //styles

}

export default UnitSearch