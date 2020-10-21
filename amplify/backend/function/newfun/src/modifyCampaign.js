const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

async function modifyCampaign(id, campaignName, campaignDesc, companyId) {
  const params = {
    TableName: "Campaign-d7p5t2esanesvagefoknkuauza-dev",
    Key: {
      id: id,
    },
    UpdateExpression:
      "set info.campaignName = :r, info.campaignDesc=:p, info.companyId=:a",
    ExpressionAttributeValues: {
      ":r": campaignName,
      ":p": campaignDesc,
      ":a": companyId,
    },
    ReturnValues: "UPDATED_NEW",
  };

  try {
    const data = await db.put(params).promise();
    console.log("dataaa", data);
    const { Item } = data;
    console.log("itemsss", Item);
    return Item;
  } catch (e) {
    console.log("error", e);
  }
}

module.exports = modifyCampaign;
