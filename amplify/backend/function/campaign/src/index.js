const getCampaigns = require("./getCampaigns");

const resolvers = {
  Query: {
    retrieveCampaigns: () => {
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
