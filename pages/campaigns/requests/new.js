import React, { Component } from "react";
import Layout from "../../../componenets/Layout";
import { Button, Form, Input, Message, TextArea } from "semantic-ui-react";
import { Router } from "../../../routes";
import Campaign from "../../../ethereuem/campaign";
import web3 from "../../../ethereuem/web3";

class RequestNew extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  state = {
    description: "",
    amount: "",
    recepient: "",
    message: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ message: "" });
    this.setState({ loading: true });

    try {
      const accounts = await web3.eth.getAccounts();
      await Campaign(this.props.address)
        .methods.createRequest(
          this.state.description,
          web3.utils.toWei(this.state.amount, "ether"),
          this.state.recepient
        )
        .send({ from: accounts[0] });

      Router.pushRoute("/campaigns/" + this.props.address + "/requests");
    } catch (error) {
      this.setState({ message: error["message"] });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h4>Create a new request:</h4>
        <Form onSubmit={this.onSubmit} error={!!this.state.message}>
          <Form.Field style={{ maxWidth: "40%" }}>
            <label>Description:</label>
            <TextArea
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>

          <Form.Field style={{ maxWidth: "40%" }}>
            <label>Amount:</label>
            <Input
              type="number"
              step="any"
              label="ETH"
              labelPosition="right"
              value={this.state.amount}
              onChange={(event) =>
                this.setState({ amount: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field style={{ maxWidth: "40%" }}>
            <label>Receipient:</label>
            <Input
              value={this.state.recepient}
              onChange={(event) =>
                this.setState({ recepient: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.message} />

          <Button
            loading={this.state.loading}
            type="submit"
            color="green"
            basic
          >
            Submit Request
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default RequestNew;
