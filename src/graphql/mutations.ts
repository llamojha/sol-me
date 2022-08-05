/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      WalletAddress
      Username
      ProfileImage
      ProfileBanner
      Description
      DonationDescription
      DonationTitle
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    UpdateUser(input: $input, condition: $condition) {
      id
      WalletAddress
      Username
      ProfileImage
      ProfileBanner
      Description
      DonationDescription
      DonationTitle
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
