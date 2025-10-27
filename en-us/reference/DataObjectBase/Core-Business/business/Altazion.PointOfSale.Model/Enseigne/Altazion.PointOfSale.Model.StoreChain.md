## StoreChain

The StoreChain class represents a store chain, i.e., a group of multiple stores under the same commercial brand.

Public properties:
- Guid: Unique identifier of the store chain (type Guid).
- Name: Name of the store chain (type string).
- ManagerEmail: Email address of the store chain manager (type string).
- Url: Website URL of the store chain (type string).

Important methods:
- GetKey(): returns the unique key of the object, here the Guid identifier.
- FromDataRow(DataRow): protected method that initializes object properties from a data row.
- ToString(): returns a string representation of the object, here the name of the store chain.

### TypeScript class
```typescript
interface StoreChain {
  Guid: string; // Unique identifier of the store chain
  Name: string | null; // Name of the store chain
  ManagerEmail: string | null; // Email address of the store chain manager
  Url: string | null; // Website URL of the store chain
}
```