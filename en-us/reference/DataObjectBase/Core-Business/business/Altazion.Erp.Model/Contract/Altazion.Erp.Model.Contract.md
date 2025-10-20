## Contract

The Contract class represents a contract in the ERP system.

Public Properties:
- Guid: Unique identifier of the contract.
- Type: The type of contract (e.g., subscription, licenses, reserve, package), represented as a string.
- CustomerGuid: Unique identifier of the customer associated with the contract.
- CreationDate: Contract creation date.
- ValidationDate: Contract validation date, nullable.
- ValidationContractUxid: Identifier of the user who validated the contract, nullable.
- IsDeleted: Boolean indicating if the contract is archived.
- Label: Label or title of the contract.
- PartnerGuid: Unique identifier of a partner associated with the contract, nullable.
- ManagementClass: Management class linked to the contract.
- ManagementClassInit: Initialization string for the management class.
- NextUpdate: Date for the next management class update, nullable.
- EndForecast: Forecasted end date of the contract, nullable.

Class Constants:
- TypeSubscription = "A": Represents a subscription contract type.
- TypeLicences = "C": Represents a licenses contract type.
- TypeReserve = "R": Represents a reserve contract type.
- TypeForfait = "F": Represents a package contract type.

### TypeScript class
```typescript
interface Contract {
  Guid: string; // UUID unique identifier
  Type: string | null;
  CustomerGuid: string; // UUID of associated customer
  CreationDate: Date;
  ValidationDate?: Date | null;
  ValidationContractUxid?: string | null; // UUID of user who validated contract
  IsDeleted: boolean;
  Label: string | null;
  PartnerGuid?: string | null; // UUID of associated partner
  ManagementClass: string | null;
  ManagementClassInit: string | null;
  NextUpdate?: Date | null;
  EndForecast?: Date | null;
}

// Constants for contract types
const TypeSubscription = "A";
const TypeLicences = "C";
const TypeReserve = "R";
const TypeForfait = "F";
```