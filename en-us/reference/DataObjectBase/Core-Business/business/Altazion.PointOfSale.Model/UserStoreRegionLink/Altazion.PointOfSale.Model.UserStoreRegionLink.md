## UserStoreRegionLink

The UserStoreRegionLink class represents a link between a user and a store region.

Public properties:
- Id (Guid): Unique identifier of the link.
- UserUxid (Guid): Identifier of the user.
- StoreRegionId (Guid): Identifier of the store region.
- Roles (string): Serialized list of roles associated with this link.

This class models the association of a user to a specific store region with defined roles. It includes validations on the identifiers and maximum length for the roles list.

### TypeScript class
```typescript
interface UserStoreRegionLink {
  Id: string; // Unique identifier of the link (GUID string)
  UserUxid: string; // Identifier of the user (GUID string)
  StoreRegionId: string; // Identifier of the store region (GUID string)
  Roles: string | null; // Serialized list of roles associated with the link
}
```