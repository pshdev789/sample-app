
const CAMPAIGNS=[
  {
    "campaignDesc": "DEscCampaign",
    "campaignName": "Campaign1",
    "id": "57496cf9-552a-4349-be88-521b06f6ecf7",
    "createdAt": "2020-10-21T10:41:14.805Z",
    "updatedAt": "2020-10-21T10:41:14.805Z",
    "company": {
      "name": "Comapny3"
    }
  },
  {
    "campaignDesc": "DEscCampaign2",
    "campaignName": "Campaign2",
    "id": "86f6754b-3897-4c3a-83c7-0445d6c58b0a",
    "createdAt": "2020-10-21T10:41:25.633Z",
    "updatedAt": "2020-10-21T10:41:25.633Z",
    "company": {
      "name": "Comapny3"
    }
  }
];


function getCampaigns(){
   return CAMPAIGNS;
}

const resolvers = {
  Query: {
    campaigns: (ctx) => {
     
      return getCampaigns();
    },
    
  },

};

exports.handler = async (event) => {

  const typeHandler = resolvers[event.typeName];


  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];

    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
};
