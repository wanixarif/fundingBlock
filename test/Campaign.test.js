const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereuem/build/CampaignFactory.json");
const compiledCampaign = require("../ethereuem/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods
    .createCampaign("100")
    .send({ from: accounts[0], gas: "1000000" });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

describe("Campaigns", () => {
  it("deplys campaign and factory", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("marks caller as manager", async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });
  it("lets people fund", async () => {
    await campaign.methods.contribute().send({ value: 200, from: accounts[1] });
    const isContributor = await campaign.methods
      .contributors(accounts[1])
      .call();
    assert(isContributor);
  });
  it("requires a min contribution", async () => {
    try {
      await campaign.methods
        .contribute()
        .send({ value: "1", from: accounts[0] });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });
  it("allows manager to create a request", async () => {
    await campaign.methods
      .createRequest(
        (description = "Hello"),
        (value = "100"),
        (recepient = accounts[1])
      )
      .send({ from: accounts[0], gas: "1000000" });
    const request = await campaign.methods.requests(0).call();
    assert.equal("Hello", request.description);
  });
  it("does the job entirely", async () => {
    await campaign.methods
      .contribute()
      .send({ value: web3.utils.toWei("10", "ether"), from: accounts[0] });
    await campaign.methods
      .createRequest(
        (description = "Hello"),
        (value = web3.utils.toWei("5", "ether")),
        (recepient = accounts[1])
      )
      .send({ from: accounts[0], gas: "1000000" });
    await campaign.methods
      .approveRequest(0)
      .send({ from: accounts[0], gas: "1000000" });
    await campaign.methods
      .finalizeRequest(0)
      .send({ from: accounts[0], gas: "1000000" });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);

    assert(balance > 103);
  });
});
