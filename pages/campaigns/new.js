import React, { Component } from "react";
import Layout from "../../componenets/Layout";
import {
  Button,
  Form,
  Input,
  Message,
  TextArea,
  Select,
} from "semantic-ui-react";
import instance from "../../ethereuem/factory";
import web3 from "../../ethereuem/web3";
import { Router } from "../../routes";

const options = [
  { text: "Arts", value: "Arts" },
  { text: "Comics & Illustration", value: "Comics & Illustration" },
  { text: "Design & Tech", value: "Design & Tech" },
  { text: "Film", value: "Film" },
  { text: "Food & Craft", value: "Food & Craft" },
  { text: "Games", value: "Games" },
  { text: "Music", value: "Music" },
  { text: "Publishing", value: "Publishing" },
];

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    Title: "",
    Description: "",
    Category: "",
    Website: "",
    ImageURL: "",
    CreatorName: "",
    message: "",
    loading: false,
  };
  handleChange = (e, { value }) => this.setState({ Category: value });
  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ message: "" });
    this.setState({ loading: true });

    try {
      const accounts = await web3.eth.getAccounts();
      await instance.methods
        .createCampaign(
          web3.utils.toWei(this.state.minimumContribution, "ether"),
          this.state.Title,
          this.state.Description,
          this.state.Category,
          this.state.Website,
          this.state.ImageURL,
          this.state.CreatorName
        )
        .send({
          from: accounts[0],
        });

      Router.pushRoute("/");
    } catch (error) {
      this.setState({ message: "Transaction failed: " + error["message"] });
    }

    this.setState({ loading: false });
  };

  render() {
    console.log(this.state.Category);
    return (
      <Layout>
        <h3>Start a new campaign</h3>
        <Form
          onSubmit={this.onSubmit}
          error={!!this.state.message}
          loading={this.state.loading}
        >
          <Form.Group>
            <Form.Field width={8} required>
              <label>Title:</label>
              <Input
                value={this.state.Title}
                onChange={(event) =>
                  this.setState({ Title: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field width={8} required>
              <label>Minimum donation amount:</label>
              <Input
                type="number"
                step="any"
                label="ETH"
                labelPosition="right"
                value={this.state.minimumContribution}
                onChange={(event) =>
                  this.setState({ minimumContribution: event.target.value })
                }
              />
            </Form.Field>
          </Form.Group>

          <Form.Field required>
            <label>Description:</label>
            <TextArea
              value={this.state.Description}
              onChange={(event) =>
                this.setState({ Description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Group>
            <Form.Field
              width="8"
              onChange={this.handleChange}
              value={this.state.Category}
              control={Select}
              label="Category"
              options={options}
              placeholder="Select one"
            />
            <Form.Field width={8}>
              <label>Website:</label>
              <Input
                value={this.state.Website}
                onChange={(event) =>
                  this.setState({ Website: event.target.value })
                }
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field width={8} required>
              <label>Project thumbnail URL:</label>
              <Input
                value={this.state.ImageURL}
                onChange={(event) =>
                  this.setState({ ImageURL: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field width={8} required>
              <label>Your full name:</label>
              <Input
                value={this.state.CreatorName}
                onChange={(event) =>
                  this.setState({ CreatorName: event.target.value })
                }
              />
            </Form.Field>
          </Form.Group>
          <Message error header="Oops!" content={this.state.message} />

          <Button
            loading={this.state.loading}
            type="submit"
            color="green"
            fluid
            basic
          >
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
