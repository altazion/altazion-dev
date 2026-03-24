## UserFulfillmentZoneLink

This class represents a link between a user and a fulfillment zone in logistics.

Public properties:
- Id (Guid): Unique identifier for the link.
- UserUxid (Guid): Identifier of the user.
- FulfillmentZoneId (Guid): Identifier of the fulfillment zone.
- Roles (string): Serialized list of roles associated with this link, limited to 250 characters.

Each property is a key field for managing the relationship between a user and their assigned fulfillment zone. Validation ensures that identifiers are provided and that the roles list length remains within acceptable limits.

### TypeScript class
```typescript
interface UserFulfillmentZoneLink {
  /** Unique identifier of the link */
  Id: string; // GUID
  /** User identifier */
  UserUxid: string; // GUID
  /** Fulfillment zone identifier */
  FulfillmentZoneId: string; // GUID
  /** Serialized list of roles associated with the link */
  Roles: string | null;
}
```