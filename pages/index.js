import React, { Component } from "react";
import instance from "../ethereuem/factory";
import { Card, Icon, Image, Button, Dimmer, Loader } from "semantic-ui-react";
import Layout from "../componenets/Layout";
import { Link } from "../routes";
import Campaign from "../ethereuem/campaign";

class CampaignIndex extends Component {
  state = {
    loading: false,
    cardsLoading: false,
    loader: true,
    campaignLoader: false,
  };

  componentDidMount() {
    this.setState({ loader: false });
  }

  static async getInitialProps() {
    const campaigns = await instance.methods.getDeployedCampaigns().call();
    const numCampaigns = campaigns.length;
    const campaignDetails = await Promise.all(
      Array(parseInt(numCampaigns))
        .fill()
        .map((element, index) => {
          const campaign = Campaign(campaigns[index]);
          return campaign.methods.showCampaignStrings().call();
        })
    );
    return { campaigns, campaignDetails };
  }

  renderCampaigns() {
    const items = this.props.campaignDetails.map((strings, index) => {
      return (
        <Card fluid onClick={() => this.setState({ campaignLoader: true })}>
          <Link route={"/campaigns/" + this.props.campaigns[index]}>
            <Card fluid color="red">
              <Card.Content>
                <Card.Header>{strings[0]}</Card.Header>
                <Card.Description floated="left">
                  <Image floated="right" size="small" src={strings[4]} />
                  {strings[1]}
                </Card.Description>
              </Card.Content>

              <Card.Content extra>
                <div className="ui two">
                  {strings[2]} | Created by: {strings[5]}
                  <Link route={"/campaigns/" + this.props.campaigns[index]}>
                    <a style={{ float: "right" }}>
                      <Icon name="chevron circle right" />
                      View Campaign
                    </a>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          </Link>
        </Card>
      );
    });

    return <Card.Group>{items}</Card.Group>;
  }

  render() {
    return (
      <Layout>
        <div>
          <Dimmer active={this.state.loader}>
            <Loader size="huge" />
          </Dimmer>
          <Dimmer active={this.state.campaignLoader} page>
            <Loader size="huge">Fetching campaign from blockchain</Loader>
          </Dimmer>

          <h3>&nbsp;Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                color="green"
                floated="right"
                basic
                loading={this.state.loading}
                onClick={() => {
                  this.setState({ loading: true });
                }}
              >
                Create Campaign +
              </Button>
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
