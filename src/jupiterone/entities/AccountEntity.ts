import { EntityFromIntegration } from "@jupiterone/jupiter-managed-integration-sdk";

export const ACCOUNT_ENTITY_TYPE = "google_account";
export const ACCOUNT_ENTITY_CLASS = "Account";

export interface AccountEntity extends EntityFromIntegration {
  name: string;
  domains: string[];
  primaryDomain: string | undefined;
  accountId: string | undefined;
  id: string;
  vendor: string;
}
