import React from "react";

const NewAccountForm = ({ onNewAccount = (f) => f }) => {
  let _email,
    _firstname,
    _lastname,
    _password,
    _bio,
    _cost,
    _sliding_scale,
    _specialty,
    _borough,
    _address,
    _zip,
    _insurance;
  const submit = (e) => {
    e.preventDefault();
    onNewAccount(
      _email.value,
      _firstname.value,
      _lastname.value,
      _password.value,
      _bio.value,
      _cost.value,
      _sliding_scale.value,
      _specialty.value,
      _borough.value,
      _address.value,
      _zip.value,
      _insurance.value
    );
    _email.value = "";
    _firstname.value = "";
    _lastname.value = "";
    _password.value = "";
    _bio.value = "";
    _cost.value = "";
    _sliding_scale.value = "";
    _specialty.value = "";
    _borough.value = "";
    _address.value = "";
    _zip.value = "";
    _insurance.value = "";
    _lastname.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={(input) => (_email = input)}
        type="text"
        placeholder="Email"
        required
      />
      <input
        ref={(input) => (_firstname = input)}
        type="text"
        placeholder="Firstname"
        required
      />
      <input
        ref={(input) => (_lastname = input)}
        type="text"
        placeholder="Lastname"
        required
      />
      <input
        ref={(input) => (_password = input)}
        type="text"
        placeholder="Password"
        required
      />
      <input
        ref={(input) => (_bio = input)}
        type="text"
        placeholder="Bio"
        required
      />
      <input
        ref={(input) => (_cost = input)}
        type="text"
        placeholder="Cost"
        required
      />
      <input
        ref={(input) => (_sliding_scale = input)}
        type="text"
        placeholder="Sliding Scale"
        required
      />
      <input
        ref={(input) => (_specialty = input)}
        type="text"
        placeholder="Specialty"
        required
      />
      <input
        ref={(input) => (_borough = input)}
        type="text"
        placeholder="Borough"
        required
      />
      <input
        ref={(input) => (_address = input)}
        type="text"
        placeholder="Address"
        required
      />
      <input
        ref={(input) => (_zip = input)}
        type="text"
        placeholder="Zip"
        required
      />
      <input
        ref={(input) => (_insurance = input)}
        type="text"
        placeholder="Insurance"
        required
      />

      <button>Add Account</button>
    </form>
  );
};

export default NewAccountForm;
