import React from "react";

const Account = ({ account }) => (
  <div key={account.id}>
    <h4>{account.firstname} {account.lastname}</h4> 
    <p>{account.email}</p>
    <p>{account.zip}</p>
    <p>{account.cost}</p>
    <p>{account.specialty}</p>
  </div>
);

export default Account;