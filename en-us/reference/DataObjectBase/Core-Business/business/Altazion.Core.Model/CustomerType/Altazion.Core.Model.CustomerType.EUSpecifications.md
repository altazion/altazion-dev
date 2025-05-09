## EUSpecifications

This class represents the specific specifications related to the European Union for a customer type within the CustomerType class.

Public properties:
- SalesAccountId: string representing the identifier of the associated sales account.

Inherited methods not detailed:
- FromDataRow: initializes the properties from a DataRow.
- GetKey: returns the unique key which here is the sales account identifier.

### TypeScript class
```json
interface EUSpecifications {
  /** Identifier of the associated sales account. */
  SalesAccountId: string | null;
}
```