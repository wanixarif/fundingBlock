import React,{Component} from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'
import {Link} from '../routes'


class Header extends Component{
  state={
    buttonConnect:'Connect Wallet'
  }

  getAccount=async()=> {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    this.setState({buttonConnect:'Connected'})
  }
  render(){
    return (
      <Menu style={{marginTop: '12px'}} size='massive' color='green' inverted>
      <Link route='/'>
          <a className='item'><Icon name='bitcoin'/>Funding Block</a>
      </Link>
      <Menu.Menu position='right'>
        <Button onClick={this.getAccount}  color='green' content={this.state.buttonConnect}/>
        <Link route='/campaigns/new'>
            <a className='item'><Icon name='add square'/></a>
        </Link>
      </Menu.Menu >

    </Menu>
  )
  }
}


export default Header