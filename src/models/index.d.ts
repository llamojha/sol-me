import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UsersMetaData = {
  readOnlyFields;
}

export declare class Users {
  readonly id: string;
  readonly WalletAddress: string;
  readonly Username?: string | null;
  readonly ProfileImage?: string | null;
  readonly ProfileBanner?: string | null;
  readonly Description?: string | null;
  readonly DonationDescription?: string | null;
  readonly DonationTitle?: string | null;
  constructor(init: ModelInit<Users>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}