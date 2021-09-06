import web3 from './web3'

import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), "0xB327B00c47286EFD257E0fD25CE01b407a83fF4A")


export default instance;