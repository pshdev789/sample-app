/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
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
