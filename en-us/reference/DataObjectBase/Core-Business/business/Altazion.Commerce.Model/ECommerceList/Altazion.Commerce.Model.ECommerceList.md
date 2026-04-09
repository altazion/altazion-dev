## ECommerceList

The ECommerceList class represents an e-commerce list (such as a wishlist or wedding list) associated with a customer or a site.

Public properties:
- Guid: Unique identifier of the list.
- SiteId: Identifier of the site associated with the list. Null if the list is not linked to a specific site.
- CustomerGuid: Unique identifier of the customer owner of the list. Null if not associated with a customer.
- LastAccess: Date and time of the last access to the list.
- ListTypeGuid: Unique identifier of the list type (e.g., wishlist, wedding list).
- Title: Title of the list.
- IsArchived: Boolean indicating if the list is archived.

The class also includes methods to initialize properties from a data row, obtain the unique key of the object, and validate the required data (Guid, ListTypeGuid, Title, LastAccess).

### TypeScript class
```typescript
interface ECommerceList {
  Guid: string; // Unique identifier of the list (UUID string)
  SiteId?: number | null; // Site identifier associated with the list, nullable
  CustomerGuid?: string | null; // Unique identifier of the customer owner, nullable
  LastAccess: string; // DateTime string representing last access
  ListTypeGuid: string; // Unique identifier for the type of list
  Title: string; // Title of the list
  IsArchived: boolean; // Indicates whether the list is archived
}
```