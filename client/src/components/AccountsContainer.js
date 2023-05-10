import React, { Component } from "react";
import axios from "axios";
import Account from "./Account";

export default class AccountsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
    };
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

  render() {
    return (
      <div>
        {this.state.accounts.map((account) => {
          return <Account account={account} key={account.id} />;
        })}
      </div>
    );
  }
}
