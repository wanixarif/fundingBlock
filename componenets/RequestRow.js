import React, {Component} from 'react'
import { Table,Button} from 'semantic-ui-react'
import web3 from '../ethereuem/web3'
import Campaign from '../ethereuem/campaign'
import {Router} from '../routes'
class RequestRow extends Component{

    state={
        messageApprove:'',
        messageFinalize:'',
        loadingApprove:false,
        loadingFinalize:false,
    }

    onApprove =async ()=>{
        this.setState({messageApprove:''})
        this.setState({loadingApprove:true})

        try {
                        
            const accounts = await web3.eth.getAccounts()
            await Campaign(this.props.address).methods
                .approveRequest( this.props.id)
                .send({from: accounts[0]})  
            Router.replaceRoute("/campaigns/"+this.props.address+'/requests')          
          } catch (error) {
            this.setState({messageApprove:error['message']})
          }


          this.setState({loadingApprove:false})

        
    }


    onFinalize =async ()=>{
        this.setState({messageFinalize:''})
        this.setState({loadingFinalize:true})

        try {
                        
            const accounts = await web3.eth.getAccounts()
            await Campaign(this.props.address).methods
                .finalizeRequest(this.props.id)
                .send({from: accounts[0]})      
            Router.replaceRoute("/campaigns/"+this.props.address+'/requests')          
          } catch (error) {
            this.setState({messageFinalize:error['message']})
          }


          this.setState({loadingFinalize:false})

        
    }

    render(){
        const readyToFinalize  = this.props.request.approvalCount > this.props.contributorCount/2 ;
        return(
                <Table.Row disabled={this.props.request.complete} positive={readyToFinalize && !this.props.request.complete}>
                    <Table.Cell>{this.props.id}</Table.Cell>
                    <Table.Cell>{this.props.request.description}</Table.Cell>
                    <Table.Cell>{web3.utils.fromWei(this.props.request.value)}</Table.Cell>
                    <Table.Cell>{this.props.request.recepient}</Table.Cell>
                    <Table.Cell>{this.props.request.approvalCount}/{this.props.contributorCount}</Table.Cell>
                    <Table.Cell>
                        {this.props.request.complete || readyToFinalize ? <p>Approved</p> :(
                        <Button loading={this.state.loadingApprove}  color='green' basic onClick={this.onApprove}>Approve</Button>
                        )}
                    </Table.Cell>
                    <Table.Cell>
                        {this.props.request.complete ? <p>Finalized </p> :(
                            <Button loading={this.state.loadingFinalize} disabled={!readyToFinalize}  color='teal' basic onClick={this.onFinalize}>Finalize</Button>
                        )}        
                    </Table.Cell>
                </Table.Row>
        )
    }
}
export default RequestRow