const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3')
const compiledFactory=require('./build/CampaignFactory.json')
const KEYS = require('./KEYS.json')
const provider= new HDWalletProvider(
    KEYS.SEED,
    KEYS.INFURA_API
)

const web3 = new Web3(provider);

const deploy= async ()=>{
    const accounts=await web3.eth.getAccounts();
    const result= await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data:compiledFactory.bytecode}) //,arguments:[]
    .send({from:accounts[0], gas:10000000});

    console.log('Contract deployed at :',result.options.address);
    console.log(compiledFactory.interface);
}

deploy();