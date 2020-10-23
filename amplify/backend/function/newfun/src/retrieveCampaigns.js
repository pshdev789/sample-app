const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

async function retrieveCampaigns() {
  const params = {
    TableName: "Campaign-d7p5t2esanesvagefoknkuauza-dev",
  };

  try {
    const data = await db.scan(params).promise();
    // const data = await db.scan(params).promise(() =>
    //   setTimeout(() => {
    //     callback(null, "response");
    //   }, 1000)
    // );
    console.log(" Retrieved DATAA", data);
    const { Items } = data;

    return Items;
  } catch (e) {
    console.log("error", e);
  }
}

module.exports = retrieveCampaigns;
