import React, { Component } from "react";
import axios from "axios";
import Account from "./Account";
import NewAccountForm from "./NewAccountForm";

export default class AccountsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
    };
    this.addNewAccount = this.addNewAccount.bind(this);
    this.removeAccount = this.removeAccount.bind(this);
  }

  componentDidMount() {
    axios
      .get("api/v1/Accounts.json")
      .then((response) => {
        console.log(response);
        this.setState({
          accounts: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  addNewAccount(firstname, lastname) {
    axios
      .post("api/v1/Accounts.json", { account: { firstname, lastname } })
      .then((response) => {
        console.log(response);
        const accounts = [...this.state.accounts, response.data];
      })
      .catch((error) => console.log(error));
  }

  removeAccount(id) {
    axios
      .delete("api/v1/Accounts/" + id)
      .then((response) => {
        console.log(response);
        const accounts = this.state.accounts.filter(
          (account) => account.id !== id
        );
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.accounts.map((account) => {
          return <Account account={account} key={account.id} />;
        })}
        <NewAccountForm onNewAccount={this.addNewAccount} />
      </div>
    );
  }
}
