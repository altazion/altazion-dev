## EUSpecifications

Class representing the European Union specific specifications for a customer type.

Public properties:
- SalesAccountId: a string representing the associated sales account identifier.

Main methods:
- GetKey(): returns the unique key of the object, which corresponds to the sales account identifier.
- FromDataRow(DataRow dr): initializes the object's properties from a data row, notably retrieves 'tcl_compte_compta' for SalesAccountId.

### TypeScript class
```typescript
interface EUSpecifications {
  /** Identifier of the associated sales account */
  SalesAccountId: string | null;
}
```