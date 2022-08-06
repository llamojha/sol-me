/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!, $Username: String!) {
    getUsers(id: $id, Username: $Username) {
      id
      WalletAddress
      Username
      ProfileImage
      ProfileBanner
      Description
      DonationDescription
      DonationTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $Username: ModelStringKeyConditionInput
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      Username: $Username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        WalletAddress
        Username
        ProfileImage
        ProfileBanner
        Description
        DonationDescription
        DonationTitle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        WalletAddress
        Username
        ProfileImage
        ProfileBanner
        Description
        DonationDescription
        DonationTitle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const usersByWallet = /* GraphQL */ `
  query UsersByWallet(
    $WalletAddress: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UsersByWallet(
      WalletAddress: $WalletAddress
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        WalletAddress
        Username
        ProfileImage
        ProfileBanner
        Description
        DonationDescription
        DonationTitle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const usersByUsername = /* GraphQL */ `
  query UsersByUsername(
    $Username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UsersByUsername(
      Username: $Username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        WalletAddress
        Username
        ProfileImage
        ProfileBanner
        Description
        DonationDescription
        DonationTitle
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
