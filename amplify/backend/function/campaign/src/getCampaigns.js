const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

async function getCampaigns() {
  const params = {
    TableName: "Campaign-e7hvddwoo5bxjmvjry4wh3ycr4-dev",
  };

  console.log();

  try {
    const data = await db.scan(params).promise();

    const { Items } = data;

    return Items;
  } catch (e) {
    console.log("error", e);
  }
}

module.exports = getCampaigns;
