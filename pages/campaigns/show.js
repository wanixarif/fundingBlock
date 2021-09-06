import React, {Component} from 'react';
import Layout from '../../componenets/Layout';
import { Button,Form ,Input, Message, Card, Grid, Image, Icon} from 'semantic-ui-react'
import {Router} from '../../routes'
import Campaign from '../../ethereuem/campaign';
import web3 from '../../ethereuem/web3';
import { Link } from "../../routes";

class CampaignShow extends Component{

    static async getInitialProps(props){
        const contractAddress= props.query.address;
        const campaign=await Campaign(contractAddress)
        const summary= await campaign.methods.showCampaignDetails().call()
        const stringSummary= await campaign.methods.showCampaignStrings().call()
        const finalizedRequestsCount= await campaign.methods.getFinalizedRequestsCount().call()
        const amountSpent= await campaign.methods.amountSpent().call()
        const amountRaised= await campaign.methods.amountRaised().call()

        return {
            contractAddress:contractAddress,
            minimumContribution:summary[0],
            balance:summary[1],
            requestsCount:summary[2],
            contributorCount:summary[3],
            manager:summary[4],
            campaignTitle:stringSummary[0],
            campaignDescription:stringSummary[1],
            category:stringSummary[2],
            website:stringSummary[3],
            campaignImageURL:stringSummary[4],
            campaignCreatorName:stringSummary[5],
            finalizedRequestsCount:finalizedRequestsCount,
            amountSpent:amountSpent,
            amountRaised:amountRaised,
        }
    }

    state={
        contributionAmount:'',
        message:'',
        loading:false,
        requestsLoading:false
    }

    onSubmit =async (event)=>{
        event.preventDefault();
        this.setState({message:''})
        this.setState({loading:true})

        try {
                        
            const accounts = await web3.eth.getAccounts()
            await Campaign(this.props.contractAddress).methods.contribute().send({
                from: accounts[0],
                value:web3.utils.toWei(this.state.contributionAmount,'ether')
            })
            Router.replaceRoute("/campaigns/"+this.props.contractAddress)
            
            
          } catch (error) {
            this.setState({message: error['message']})
          }


          this.setState({loading:false})
          

        
    }
    
    renderCard(){
      const items = [
            {
              header: 'Address of this campaign',
              description: this.props.contractAddress,
              meta: 'Campaign Address',
              style:{overflowWrap:'break-word'}
            },
            {
              header: 'Address of the creator of this campaign',
              description:this.props.manager,
              meta: 'Manager',
              style:{overflowWrap:'break-word'}
            },
            {
              header: web3.utils.fromWei(this.props.balance,'ether'),
              description:
                'Funds available right now',
              meta: 'Campaign balance',
            },
            {
              header: web3.utils.fromWei(this.props.amountSpent,'ether'),
              description:
                'Total amount withdrawn so far',
              meta: 'Funds spent',
            },
            {
              header: web3.utils.fromWei(this.props.amountRaised,'ether'),
              description:
              'Total amount raised so far',
              meta: 'Funds raised',
            },
            {
              header: this.props.contributorCount,
              description:
                'Number of people who contributed to this campaign',
              meta: 'Contributors',
            },
            {
              header: this.props.requestsCount - this.props.finalizedRequestsCount,
              description:
                'Withdrawal requests yet to be finalized',
              meta: 'Active requests',
            },
            {
              header: this.props.finalizedRequestsCount,
              description:
                'Withdrawal requests finalized so far',
              meta: 'Finalized requests',
            },
           
          ]
          return items;
    }
    
    render() {
        return(
            <Layout>

                <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <Card fluid color='red'>
                            <Card.Content>
                              <Card.Header>{this.props.campaignTitle}</Card.Header>
                              <Card.Description floated='left'>
                                <Image
                                  floated='right'
                                  size='small'
                                  src={this.props.campaignImageURL}
                                />
                                {this.props.campaignDescription}
                              </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                              <div className='ui two'>

                              {this.props.category} | Created by: {this.props.campaignCreatorName}
                            
                              <a style={{float:'right'}} href={this.props.website} target='_blank'>
                                <Icon name='globe' />
                                {this.props.website}
                              </a>
                              </div>
                          </Card.Content>
                        </Card>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Card.Group  itemsPerRow={2} items={this.renderCard()} />
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Form onSubmit={this.onSubmit} error={!!this.state.message}>
                                <Form.Field >
                                    <label>Contribute to this campaign:</label>
                                    <Input 
                                        type='number'
                                        step='any'
                                        label='ETH'
                                        labelPosition='right'
                                        value={this.state.contributionAmount}
                                        onChange={(event)=>this.setState({ contributionAmount: event.target.value })}
                                    />
                                </Form.Field>
                                <Message
                                    error
                                    header='Oops!'
                                    content={this.state.message}
                                />
                                
                                <div className='ui two'>
                                  <Button loading={this.state.loading} type='submit' basic color='green'>Contribute</Button>
                                  <span style={{float:'right'}}>Minimum: {web3.utils.fromWei(this.props.minimumContribution,'ether')}</span>
                                </div>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link  route={'/campaigns/'+this.props.contractAddress+'/requests'}>
                                    <a>
                                        <Button basic color='green' 
                                        loading={this.state.requestsLoading} 
                                        onClick={(event)=>{this.setState({requestsLoading:true})}}>
                                          View Requests</Button>
                                    </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        
                

                
                        
                
            </Layout>
        )
    }
}

export default CampaignShow;