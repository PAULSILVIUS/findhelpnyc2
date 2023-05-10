import React from "react";
import axios from "axios";
import Account from "../Account";
import NewAccountForm from "../NewAccountForm";
import EditAccountForm from "../EditAccountForm";

export default class AccountsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      editAccountId: null,
    };

    this.addNewAccount = this.addNewAccount.bind(this);
    this.removeAccount = this.removeAccount.bind(this);
    this.editingAccount = this.editingAccount.bind(this);
    this.editAccount = this.editAccount.bind(this);
  }

  componentDidMount() {
    axios
      .get("api/v1/accounts.json")
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
      .post("api/v1/accounts.json", { account: { firstname, lastname } })
      .then((response) => {
        console.log(response);
        const accounts = [...this.state.accounts, response.data];
        this.setState({ accounts });
      })
      .catch((error) => console.log(error));
  }

  removeAccount(id) {
    axios
      .delete("api/v1/accounts/" + id)
      .then((response) => {
        const accounts = this.state.accounts.filter(
          (account) => account.id !== id
        );
        this.setState({ accounts });
      })
      .catch((error) => console.log(error));
  }

  editingAccount(id) {
    this.setState({ editAccountId: id });
  }

  editAccount(firstname, lastname) {
    axios
      .put("/api/v1/accounts/" + id, {
        account: {
          firstname,
          lastname,
        },
      })
      .then((response) => {
        console.log(response);
        const accounts = this.state.accounts;
        accounts[id - 1] = { firstname, lastname };
        this.setState(() => ({
          accounts,
          editAccountId: null,
        }));
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="accounts-container">
        {this.state.accounts.map((account) => {
          if (this.state.editingAccountId === account.id) {
            return (
              <EditAccountForm
                account={account}
                key={account.id}
                editAccount={this.editAccount}
              />
            );
          } else {
            return (
              <Account
                account={account}
                key={account.id}
                onRemoveAccount={this.removeAccount}
                editingAccount={this.editingAccount}
              />
            );
          }
        })}
        <NewAccountForm onNewAccount={this.addNewAccount} />
      </div>
    );
  }
}
