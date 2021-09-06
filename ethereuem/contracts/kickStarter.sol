pragma solidity ^0.4.23;


contract CampaignFactory{
    address[] public deployedCampaigns;
    
    function createCampaign(
        uint256 minContrib,
        string Title,
        string Description,
        string Category,
        string Website,
        string ImageURL,
        string CreatorName
        ) public {
        address newCampaign = new Campaign(minContrib,Title,Description,Category,Website,ImageURL,CreatorName,msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(address[]){
        return deployedCampaigns;
    }
}

contract Campaign{
    struct Request{
        string description;
        uint256 value;
        address recepient;
        bool complete;
        uint256 approvalCount;
        mapping(address=>bool) approvals;
    }
    
    
    Request[] public requests;
    uint[] public finalizedRequests;
    uint256 public minimumContrbution;
    string public campaignTitle;
    string public campaignDescription;
    string public category;
    string public website;
    string public campaignImageURL;
    string public campaignCreatorName;
    address public manager;
    mapping(address=>bool) public contributors;
    uint256 public contributorCount;
    uint256 public amountRaised;
    uint256 public amountSpent;
    
    modifier onlyManager(){
        require (msg.sender==manager);
        _;
    }
    
    constructor(
        uint256 minContrib,
        string Title,
        string Description,
        string Category,
        string Website,
        string ImageURL,
        string CreatorName, 
        address campaignCreator
        )
            public {
            minimumContrbution=minContrib;
            manager=campaignCreator;
            campaignTitle=Title;
            campaignDescription=Description;
            category=Category;
            website= Website;
            campaignImageURL=ImageURL;
            campaignCreatorName=CreatorName;
    }

    
    function contribute() public payable{
        require(msg.value>=minimumContrbution && !contributors[msg.sender]);
        contributors[msg.sender]=true;
        contributorCount++;
        amountRaised+=(msg.value);
    }
    
    function createRequest(string description,uint256 value,address recepient)  public onlyManager {
        
        Request memory newRequest = Request({
            description:description,
            value:value,
            recepient: recepient,
            complete: false,
            approvalCount:0
        }); //Request(description,value,recepient,false)  Ordered only
        requests.push(newRequest);
    }
    
    function approveRequest(uint256 index) public{
        Request storage request=requests[index];
        require(contributors[msg.sender] && !request.approvals[msg.sender] && !request.complete);
        request.approvals[msg.sender]=true;
        request.approvalCount++;
        
    }
    
    function finalizeRequest(uint256 index) public payable onlyManager{
        Request storage request = requests[index];
        
        require(!request.complete);
        require(request.approvalCount>(contributorCount/2));
        
        request.recepient.transfer(request.value);
        request.complete=true;
        finalizedRequests.push(index);
        amountSpent+=request.value;
    }
    function showCampaignDetails() public view returns (uint,uint,uint,uint,address){
        return(
            minimumContrbution,
            address(this).balance,
            requests.length,
            contributorCount,
            manager
        );
    }
    function  showCampaignStrings() public view returns(string, string, string, string, string, string){
            return (
                campaignTitle,
                campaignDescription,
                category,
                website,
                campaignImageURL,
                campaignCreatorName
            );
    }
    
    function updateDescription(string Description) public onlyManager {
        campaignDescription=Description;
    }
    function updateWebsite(string Website) public onlyManager {
        website = Website;
    }
    function updateImageURL(string ImageURL) public onlyManager {
        campaignImageURL=ImageURL;
    }
    function getRequestsCount() public view returns(uint){
        return requests.length;
    }
    function getFinalizedRequestsCount() public view returns(uint){
        return finalizedRequests.length;
    }
    
}