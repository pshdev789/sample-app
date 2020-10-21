const AWS = require("aws-sdk");
// const { uuid } = require('uuidv4');

const db = new AWS.DynamoDB.DocumentClient();

async function addCampaign(name, desc, companyId) {
  const payload = {
    id: "901291f2-1342-11eb-adc1-0242ac120002",
    campaignName: name,
    campaignDesc: desc,
    campaignCompanyId: companyId,
    createdAt: Date.now(),
    __typename: "Campaign"

  };

  const params = {
    TableName: "Campaign-d7p5t2esanesvagefoknkuauza-dev",
    Item: payload,
  };

  try {
    const data = await db.put(params).promise();
    console.log("ADDCampaignDATTAA", data);
    const { Item } = data;
    console.log("ADDCAMpaignITemsitemsss", payload);
    return payload;
  } catch (e) {
    console.log("error", e);
  }
}

module.exports = addCampaign;
