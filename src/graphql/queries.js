/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const campaigns = /* GraphQL */ `
  query Campaigns {
    campaigns {
      campaignDesc
      campaignName
      company {
        apikey
        campaign {
          nextToken
        }
        description
        id
        name
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      campaignDesc
      campaignName
      company {
        apikey
        campaign {
          nextToken
        }
        description
        id
        name
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        campaignDesc
        campaignName
        company {
          apikey
          description
          id
          name
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      apikey
      campaign {
        items {
          campaignDesc
          campaignName
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      description
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        apikey
        campaign {
          nextToken
        }
        description
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
