import React, { Component } from "react";
import Layout from "../../../componenets/Layout";
import { Link } from "../../../routes";
import { Button, Table, Icon } from "semantic-ui-react";
import Campaign from "../../../ethereuem/campaign";
import RequestRow from "../../../componenets/RequestRow";
import web3 from "../../../ethereuem/web3";

class RequestIndex extends Component {
  state = { loading: false };
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const managerAddress = await campaign.methods.manager().call();
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];
    const contributorCount = await campaign.methods.contributorCount().call();
    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    const completeRequests = requests.filter(
      (request) => request.complete == true
    );
    const pendingRequests = requests.filter(
      (request) => request.complete == false
    );

    return {
      address,
      completeRequests,
      pendingRequests,
      requestCount,
      contributorCount,
      managerAddress,
      userAddress,
    };
  }

  renderPendingRows() {
    return this.props.pendingRequests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          contributorCount={this.props.contributorCount}
        />
      );
    });
  }
  renderCompleteRows() {
    return this.props.completeRequests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          contributorCount={this.props.contributorCount}
        />
      );
    });
  }

  renderManagerButton() {
    if (this.props.managerAddress) {
      return (
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Link
                route={"/campaigns/" + this.props.address + "/requests/new"}
              >
                <a>
                  <Button
                    floated="right"
                    icon
                    labelPosition="left"
                    color="green"
                    size="small"
                    loading={this.state.loading}
                    onClick={(event) => {
                      this.setState({ loading: true });
                    }}
                  >
                    <Icon name="add" /> Add Request
                  </Button>
                </a>
              </Link>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <Layout>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="7">Pending requests</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Receipient</Table.HeaderCell>
              <Table.HeaderCell>Approval Count</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
              <Table.HeaderCell>Finalize</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderPendingRows()}</Table.Body>
          {this.renderManagerButton()}
        </Table>

        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="7">
                Finalized requests
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Receipient</Table.HeaderCell>
              <Table.HeaderCell>Approval Count</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
              <Table.HeaderCell>Finalize</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderCompleteRows()}</Table.Body>
        </Table>
      </Layout>
    );
  }
}

export default RequestIndex;
