/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
  id?: string | null,
  WalletAddress: string,
  Username: string,
  ProfileImage?: string | null,
  ProfileBanner?: string | null,
  Description?: string | null,
  DonationDescription?: string | null,
  DonationTitle?: string | null,
  _version?: number | null,
};

export type ModelUsersConditionInput = {
  WalletAddress?: ModelIDInput | null,
  ProfileImage?: ModelStringInput | null,
  ProfileBanner?: ModelStringInput | null,
  Description?: ModelStringInput | null,
  DonationDescription?: ModelStringInput | null,
  DonationTitle?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  WalletAddress: string,
  Username: string,
  ProfileImage?: string | null,
  ProfileBanner?: string | null,
  Description?: string | null,
  DonationDescription?: string | null,
  DonationTitle?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUsersInput = {
  id: string,
  WalletAddress?: string | null,
  Username: string,
  ProfileImage?: string | null,
  ProfileBanner?: string | null,
  Description?: string | null,
  DonationDescription?: string | null,
  DonationTitle?: string | null,
  _version?: number | null,
};

export type DeleteUsersInput = {
  id: string,
  Username: string,
  _version?: number | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  WalletAddress?: ModelIDInput | null,
  Username?: ModelStringInput | null,
  ProfileImage?: ModelStringInput | null,
  ProfileBanner?: ModelStringInput | null,
  Description?: ModelStringInput | null,
  DonationDescription?: ModelStringInput | null,
  DonationTitle?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type SearchableUsersFilterInput = {
  id?: SearchableIDFilterInput | null,
  WalletAddress?: SearchableIDFilterInput | null,
  Username?: SearchableStringFilterInput | null,
  ProfileImage?: SearchableStringFilterInput | null,
  ProfileBanner?: SearchableStringFilterInput | null,
  Description?: SearchableStringFilterInput | null,
  DonationDescription?: SearchableStringFilterInput | null,
  DonationTitle?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  _version?: SearchableIntFilterInput | null,
  _deleted?: SearchableBooleanFilterInput | null,
  _lastChangedAt?: SearchableIntFilterInput | null,
  and?: Array< SearchableUsersFilterInput | null > | null,
  or?: Array< SearchableUsersFilterInput | null > | null,
  not?: SearchableUsersFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableUsersSortInput = {
  field?: SearchableUsersSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUsersSortableFields {
  id = "id",
  WalletAddress = "WalletAddress",
  Username = "Username",
  ProfileImage = "ProfileImage",
  ProfileBanner = "ProfileBanner",
  Description = "Description",
  DonationDescription = "DonationDescription",
  DonationTitle = "DonationTitle",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableUsersAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableUsersAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableUsersAggregateField {
  id = "id",
  WalletAddress = "WalletAddress",
  Username = "Username",
  ProfileImage = "ProfileImage",
  ProfileBanner = "ProfileBanner",
  Description = "Description",
  DonationDescription = "DonationDescription",
  DonationTitle = "DonationTitle",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  _version = "_version",
  _deleted = "_deleted",
  _lastChangedAt = "_lastChangedAt",
}


export type SearchableUsersConnection = {
  __typename: "SearchableUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    WalletAddress: string,
    Username: string,
    ProfileImage?: string | null,
    ProfileBanner?: string | null,
    Description?: string | null,
    DonationDescription?: string | null,
    DonationTitle?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    WalletAddress: string,
    Username: string,
    ProfileImage?: string | null,
    ProfileBanner?: string | null,
    Description?: string | null,
    DonationDescription?: string | null,
    DonationTitle?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    WalletAddress: string,
    Username: string,
    ProfileImage?: string | null,
    ProfileBanner?: string | null,
    Description?: string | null,
    DonationDescription?: string | null,
    DonationTitle?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
  Username: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    WalletAddress: string,
    Username: string,
    ProfileImage?: string | null,
    ProfileBanner?: string | null,
    Description?: string | null,
    DonationDescription?: string | null,
    DonationTitle?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  Username?: ModelStringKeyConditionInput | null,
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      WalletAddress: string,
      Username: string,
      ProfileImage?: string | null,
      ProfileBanner?: string | null,
      Description?: string | null,
      DonationDescription?: string | null,
      DonationTitle?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      WalletAddress: string,
      Username: string,
      ProfileImage?: string | null,
      ProfileBanner?: string | null,
      Description?: string | null,
      DonationDescription?: string | null,
      DonationTitle?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UsersByWalletQueryVariables = {
  WalletAddress: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByWalletQuery = {
  UsersByWallet?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      WalletAddress: string,
      Username: string,
      ProfileImage?: string | null,
      ProfileBanner?: string | null,
      Description?: string | null,
      DonationDescription?: string | null,
      DonationTitle?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UsersByUsernameQueryVariables = {
  Username: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByUsernameQuery = {
  UsersByUsername?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      WalletAddress: string,
      Username: string,
      ProfileImage?: string | null,
      ProfileBanner?: string | null,
      Description?: string | null,
      DonationDescription?: string | null,
      DonationTitle?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUsersFilterInput | null,
  sort?: Array< SearchableUsersSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableUsersAggregationInput | null > | null,
};

export type SearchUsersQuery = {
  searchUsers?:  {
    __typename: "SearchableUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      WalletAddress: string,
      Username: string,
      ProfileImage?: string | null,
      ProfileBanner?: string | null,
      Description?: string | null,
      DonationDescription?: string | null,
      DonationTitle?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    WalletAddress: string,
    Username: string,
    ProfileImage?: string | null,
    ProfileBanner?: string | null,
    Description?: string | null,
    DonationDescription?: string | null,
    DonationTitle?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    WalletAddress: string,
    Username: string,
    ProfileImage?: string | null,
    ProfileBanner?: string | null,
    Description?: string | null,
    DonationDescription?: string | null,
    DonationTitle?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    WalletAddress: string,
    Username: string,
    ProfileImage?: string | null,
    ProfileBanner?: string | null,
    Description?: string | null,
    DonationDescription?: string | null,
    DonationTitle?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
