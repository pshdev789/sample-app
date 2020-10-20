/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
