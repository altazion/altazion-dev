## UserAuthorizationAssignment

This class represents the assignment of an authorization to a user or to a group of users.

Public properties:
- Guid: Unique identifier of the authorization assignment.
- AuthorizationDefinitionId: Identifier of the authorization definition (foreign key to security_droits).
- GroupId: Identifier of the group to which the authorization is assigned (nullable, if assigned to a group).
- UserId: Identifier of the user to whom the authorization is assigned (nullable, if assigned individually).

The class can initialize its properties from a DataRow and provides a unique key for the object corresponding to the assignment identifier.

The ToString method returns a textual representation indicating to which user or group the authorization is assigned.

### TypeScript class
```typescript
interface UserAuthorizationAssignment {
  Guid: string; // Unique identifier of the authorization assignment (GUID)
  AuthorizationDefinitionId: string; // Identifier for the authorization definition (GUID)
  GroupId?: string | null; // Optional identifier of the group assigned (GUID or null)
  UserId?: string | null; // Optional identifier of the user assigned (GUID or null)
}
```