import React, { useEffect, useState } from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import data from '../utils/data.json'
import './Table.css'

const Table = ({state,setState}) => {

  

const  myFunction = () => {
    console.log("hello")
    document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    }

    const handleAscendingOrder = () => {
        let temp_array = [...state];

        temp_array.sort( (p1, p2) => {
            if (p1.first_name > p2.first_name) {
              return 1;
            }
            if (p1.first_name < p2.first_name) {
              return -1;
            }
            return 0;
          })
        setState(temp_array);
    }

    const handleDescendingOrder = () => {
        let temp_array = [...state];

        temp_array.sort( (p1, p2) => {
            if (p1.first_name > p2.first_name) {
              return -11;
            }
            if (p1.first_name < p2.first_name) {
              return 1;
            }
            return 0;
          })
        setState(temp_array);
    }

    const handleUnsort = () => {
        setState(state)
    }

    const ChangeCellColor = () => {
        var elements = document.getElementsByClassName('table__td');


        for (var i = 0; i < elements.length; i++) {
        var value = elements[i].innerText || elements[i].textContent;
        
        if (value === 'true') {
            elements[i].style.backgroundColor = '#ADE792';
        } else if (value === 'false') {
            elements[i].style.backgroundColor = '#F47C7C';
        }
        }
    }

    const ChangeRowColor = () => {
        var elements = document.getElementsByTagName('tr');
        console.log(elements)

        for(let i=0;i<elements.length;i++) {
            elements[i].addEventListener("click",()=>{
                elements[i].style.backgroundColor = "#62B6B7"
            })
        }
    }

    useEffect(()=>{
        ChangeCellColor();
        ChangeRowColor();
    },[])

  return (
    <><div className='table_ mb-2'>

              <table className='table table-striped table-hover w-auto'>

                  <thead>
                      <tr>
                          <th>First Name

                          <div className="dropdown">
                                <button onClick={myFunction} className="dropbtn">⋮</button>
                                <div id="myDropdown" className="dropdown-content">
                                <span onClick={handleUnsort} style={{cursor:"pointer"}}>Unsort</span>
                                    <span onClick={handleAscendingOrder} style={{cursor:"pointer"}}>Sort By ASC</span>
                                    <span onClick={handleDescendingOrder} style={{cursor:"pointer"}}>Sort BY DESC</span>
                                </div>
                            </div>

                          </th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Gender</th>
                          <th>IP Address</th>
                          <th>Airport Code</th>
                          <th>Time</th>
                          <th>Status</th>
                          <th>Mobile</th>
                          <th>Area</th>
                          {/* <th>Show</th> */}
                          {/* <th>Edit</th> */}
                      </tr>
                  </thead>

                  <tbody>
                      {state?.map(person => <tr key={person.id}>

                          <td>{person.first_name}</td>
                          <td>{person.last_name}</td>
                          <td>{person.email}</td>
                          <td>{person.gender}</td>
                          <td>{person.ip_address}</td>
                          <td>{person['airport code']}</td>
                          <td>{person.time}</td>
                          <td className='table__td'>{person.status.toString()}</td>
                          <td>{person.mobile}</td>
                          <td>{person.area}</td>
                          {/* <td>{person.show.toString()}</td> */}
                          {/* <td>{person.edit.toString()}</td> */}
                      </tr>
                      )}
                  </tbody>

              </table>

          </div></>
  )
}

export default Table