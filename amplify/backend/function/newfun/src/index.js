
// const retrieveCampaigns = require("./retrieveCampaigns");
// const addCampaign = require("./addCampaign");
// const removeCampaign = require("./removeCampaign");
// const modifyCampaign = require("./modifyCampaign");

const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

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



function retrieveCampaigns(){
  //  return CAMPAIGNS;
  const params = {
    TableName: "Campaign-d7p5t2esanesvagefoknkuauza-dev",
  };

  try {
    // const data = await db.scan(params).promise();
    const data = await db.scan(params).promise(() =>
      setTimeout(() => {
        callback(null, "response");
      }, 1000)
    );
    console.log(" Retrieved DATAA", data);
    const { Items } = data;

    return Items;
  } catch (e) {
    console.log("error", e);
  }

}

const resolvers = {
  Query: {
    campaigns: (ctx) => {
      // console.log("Inside REtrieve Campaigns");
      return retrieveCampaigns();
    },
    
  },

//   Mutation: {
//     addCampaign: (event) => {
//       const args = event.arguments;
//       console.log("EVENTS of addCampaign", args);
//       const input = args.input;
//       console.log("Input in addCamp", input);

//       const campaignDesc = input.campaignDesc;
//       const campaignName = input.campaignName;
//       const campaignCompanyId = input.campaignCompanyId;

//       return addCampaign(campaignName, campaignDesc, campaignCompanyId);
//     },

//     removeCampaign: (event) => {
//       const args = event.arguments;
//       console.log("EVENTS of removeCampaign", args);
//       const input = args.input;
//       console.log("Inputsss", input);

//       const id = input.id;

//       return removeCampaign(id);
//     },

//     modifyCampaign: (event) => {
//       const args = event.arguments;
//       console.log("EVENTS of modifyCampaign", args);
//       const input = args.input;
//       console.log("Inputsss", input);

//       const id = input.id;
//       const campaignDesc = input.campaignDesc;
//       const campaignName = input.campaignName;
//       const campaignCompanyId = input.campaignCompanyId;

//       return modifyCampaign(id, campaignName, campaignDesc, campaignCompanyId);
//     },
//   },
};

exports.handler = async (event) => {
  console.log("Inputtt", event.arguments.input);

  // console.log("EventTTT", event);
  const typeHandler = resolvers[event.typeName];

  // console.log("TYPEEHANDLERNAME", typeHandler);

  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];

    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
};
