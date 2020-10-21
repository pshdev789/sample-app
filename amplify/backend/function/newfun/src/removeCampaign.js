const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

async function removeCampaign(id) {
  console.log("Inside ReoveCAPPPP", id);

  const params = {
    TableName: "Campaign-d7p5t2esanesvagefoknkuauza-dev",
    Key: {
      id: id,
    },
    ReturnValues: "ALL_OLD",
  };

  try {
    const data = await db.delete(params).promise();
    console.log("dataaa", data);
    const { Item } = data;
    console.log("itemsss", Item);
    return Item;
  } catch (e) {
    console.log("error", e);
  }
}

module.exports = removeCampaign;
