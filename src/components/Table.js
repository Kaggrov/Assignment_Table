import React from 'react'
import {BiDotsVertical} from 'react-icons/bi'
import dat

const Table = () => {
  return (
    <div className='table_'>
        <table>

            <thead>
                <tr>
                    <th>First Name
                        <button><BiDotsVertical/></button>
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
                    <th>Show</th>
                    <th>Edit</th>
                </tr>
            </thead>

            <tbody>
                
                   data
                
            </tbody>

        </table>
        
    </div>
  )
}

export default Table