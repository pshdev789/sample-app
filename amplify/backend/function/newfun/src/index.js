const retrieveCampaigns = require("./retrieveCampaigns");
const addCampaign = require("./addCampaign");
const removeCampaign = require("./removeCampaign");
const modifyCampaign = require("./modifyCampaign");

const resolvers = {
  Query: {
    retrieveCampaigns: () => {
      console.log("Inside REtrieve Campaigns");
      return retrieveCampaigns();
    },
  },

  Mutation: {
    addCampaign: (event) => {
      const args = event.arguments;
      console.log("EVENTS of addCampaign", args);
      const input = args.input;
      console.log("Inputsss", input);

      const campaignDesc = input.campaignDesc;
      const campaignName = input.campaignName;
      const campaignCompanyId = input.campaignCompanyId;

      return addCampaign(campaignName, campaignDesc, campaignCompanyId);
    },

    removeCampaign: (event) => {
      const args = event.arguments;
      console.log("EVENTS of removeCampaign", args);
      const input = args.input;
      console.log("Inputsss", input);

      const id = input.id;

      return removeCampaign(id);
    },

    modifyCampaign: (event) => {
      const args = event.arguments;
      console.log("EVENTS of modifyCampaign", args);
      const input = args.input;
      console.log("Inputsss", input);

      const id = input.id;
      const campaignDesc = input.campaignDesc;
      const campaignName = input.campaignName;
      const campaignCompanyId = input.campaignCompanyId;

      return modifyCampaign(id,campaignName, campaignDesc, campaignCompanyId);
    },
  },
};

exports.handler = async (event) => {
  console.log("EventTTT", event);
  const typeHandler = resolvers[event.typeName];

  console.log("TYPEEHANDLERNAME", typeHandler);

  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];

    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
};
