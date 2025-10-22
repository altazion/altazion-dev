## StoreChain

Represents a store chain grouping several stores under the same commercial banner.

Public properties:
- Guid: Unique identifier of the store chain (Guid type).
- Name: Name of the store chain (string type).
- ManagerEmail: Email address of the store chain manager (string type).
- Url: Website URL of the store chain (string type).

Important methods:
- GetKey(): Returns the unique identifier of the store chain.
- ToString(): Returns the name of the store chain or the default string representation.

### TypeScript class
```typescript
export interface StoreChain {
  Guid: string; // Unique identifier (UUID as string)
  Name: string | null;
  ManagerEmail: string | null;
  Url: string | null;
}
```