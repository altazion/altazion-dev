## Contract

The Contract class represents a commercial contract including management information, dates, and status.

Defined constants for contract types:
- TypeSubscription: subscription contract (recurring subscription).
- TypeLicences: license contract (usage rights).
- TypeReserve: reserve contract (prepaid amount to consume).
- TypeForfait: fixed price package contract (fixed amount service).

Public properties:
- Guid (Guid): Unique identifier of the contract.
- Type (string): Type of the contract (subscription, license, reserve, package).
- CustomerGuid (Guid): Unique identifier of the associated customer.
- CreationDate (DateTimeOffset): Creation date of the contract.
- ValidationDate (DateTimeOffset?): Validation date of the contract (nullable if not validated).
- ValidationContractUxid (Guid?): Identifier of the user who validated the contract (nullable).
- IsDeleted (Boolean): Indicates if the contract is archived or deleted.
- Label (string): Label or title of the contract.
- PartnerGuid (Guid?): Identifier of the partner associated with the contract (nullable).
- ManagementClass (string): Name of the management class for contract automation.
- ManagementClassInit (string): Initialization string for the management class.
- NextUpdate (DateTimeOffset?): Date of the next automatic update by the management class (nullable).
- EndForecast (DateTimeOffset?): Expected end date of the contract (nullable for contracts without due date).

### TypeScript class
```typescript
interface Contract {
  Guid: string; // Unique identifier (GUID) of the contract
  Type: string; // Type of contract ('A', 'C', 'R', 'F')
  CustomerGuid: string; // Unique identifier (GUID) of the customer
  CreationDate: string; // Creation date (ISO 8601 string)
  ValidationDate?: string | null; // Nullable validation date
  ValidationContractUxid?: string | null; // Nullable GUID of user who validated
  IsDeleted: boolean; // Indicates if the contract is archived or deleted
  Label: string; // Contract label or title
  PartnerGuid?: string | null; // Nullable partner GUID
  ManagementClass: string; // Name of the management class
  ManagementClassInit: string; // Initialization string for management class
  NextUpdate?: string | null; // Nullable next automatic update date
  EndForecast?: string | null; // Nullable expected end date
}

// Constants for contract types
const ContractType = {
  Subscription: 'A',
  Licences: 'C',
  Reserve: 'R',
  Forfait: 'F'
};
```