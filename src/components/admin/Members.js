import React from "react";
import firebase from "firebase";
import { useCollection,useDocument } from "react-firebase-hooks/firestore";
import {Modal, Form, Button, Table} from "react-bootstrap";

const Members = () => {

  const [usersSnapshot,usersloading, userserror] = useCollection(firebase.firestore().collection('users'));

  const HandleAccessChange = (user) => {
    firebase.firestore().collection('users').doc(user.id).update({
      access: !user?.data()?.access
    })
  }

return(
  <Table striped bordered hover responsive variant="dark">
    <thead>
   <tr>
     <th>Name</th>
     <th>Email</th>
     <th>Request Granted</th>
   </tr>
  </thead>

  <tbody>

  {usersSnapshot?.docs?.map((user,key) => (
  <tr>
    <td>{user?.data()?.name}</td>
    <td>{user?.data()?.email}</td>
    <td>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={user?.data()?.access} onChange={() => HandleAccessChange(user)} />

    </div>
    </td>

  </tr>
 ))}


  </tbody>

  </Table>



);
}

export default Members;
