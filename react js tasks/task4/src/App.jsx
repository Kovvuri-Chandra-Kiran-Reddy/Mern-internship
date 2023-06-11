import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import './App.css'

const App = () => {

  const [users, setUsers] = useState([]);

  // const getData = () => {
  //   Axios.get("https://dummyjson.com/users")
  //     .then((res) => {
  //       var abcd = res.data.users;
  //       console.log(abcd);
  //       setUsers(abcd);
  //     }, [])
  //     .catch((err) => { console.log(err); })
  // }

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        var abcd = res.data.users;
        console.log(abcd);
        setUsers(abcd);
      }, [])
      .catch((err) => { console.log(err); })
  })

  return (
    <table id='table'>
      <tr>
        <th>Id</th>
        <th>firstName</th>
        <th>lastName</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Username</th>
        <th>Birth Date</th>
        <th>Image</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Bank Card Expire</th>
        <th>Company Name</th>
      </tr>
      {users.map((user) => {
        return (<tr>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.age}</td>
          <td>{user.gender}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.username}</td>
          <td>{user.birthDate}</td>
          <td>{<img src={user.image} style={{ width: "20px", height: "20px" }} alt="img" />}</td>
          <td>{user.height}</td>
          <td>{user.weight}</td>
          <td>{user.bank.cardExpire}</td>
          <td>{user.company.name}</td>
        </tr>)
      })}
    </table>
  )
}

export default App
