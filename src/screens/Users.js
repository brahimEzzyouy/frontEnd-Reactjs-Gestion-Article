import React from 'react'
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";

const Users=()=>{
  return (
    <div style={{padding:'20px'}}>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <button type="button" class="btn btn-outline-dark">New User</button>
        </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope='col'>Role</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>0</td>
            <td>Admin</td>
            <td>
                <button className='btn btn-warning'><BsPencilFill icon="fa-solid fa-user" /></button>
                &nbsp;
                <button className='btn btn-danger'><BsFillTrashFill icon="fa-solid fa-user" /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default  Users;
