## EUSpecifications

The EUSpecifications class represents the specific European Union specifications for a customer type in the Altazion context.

Public properties:

- SalesAccountId : string
  - Identifier of the associated sales account. This property acts as the unique key for this class.

Important methods (not described as per instructions):
- FromDataRow(DataRow dr): initializes the object from a data row.
- GetKey(): returns the unique key, here the sales account identifier.

### TypeScript class
```typescript
interface EUSpecifications {
  /** Identifier of the associated sales account */
  SalesAccountId: string | null;
}
```