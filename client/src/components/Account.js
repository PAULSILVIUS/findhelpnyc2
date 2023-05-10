import React from "react";

const Account = ({ account, onRemoveAccount = (f) => f }) => (
  <div className="single-account" key={account.id}>
    <p>{account.email}</p>
    <p>{account.firstname}</p>
    <p>{account.password}</p>
    <p>{account.bio}</p>
    <p>{account.cost}</p>
    <p>{account.sliding_scale}</p>
    <p>{account.specialty}</p>
    <p>{account.borough}</p>
    <p>{account.address}</p>
    <p>{account.zip}</p>
    <p>{account.insurance}</p>
    <button onClick={() => onRemoveAccount(account.id)}>Delete Account</button>
    <button onClick={() => editingAccount(account.id)}>Edit Account</button>
  </div>
);

export default Account;