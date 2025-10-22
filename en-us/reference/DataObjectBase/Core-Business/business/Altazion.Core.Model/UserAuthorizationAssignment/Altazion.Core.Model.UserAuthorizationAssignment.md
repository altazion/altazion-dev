## UserAuthorizationAssignment

The UserAuthorizationAssignment class represents the assignment (allocation) of an authorization to a user or a user group.

Public properties:

- Guid: Unique identifier of the authorization assignment.
- AuthorizationDefinitionId: Identifier of the authorization definition, foreign key to security rights.
- GroupId: Optional identifier of the group to which the authorization is assigned, if assigned to a group.
- UserId: Optional identifier of the user to whom the authorization is assigned, if assigned individually.

This class manages the relationship between an authorization right and the user or group it is assigned to.

Key methods:
- FromDataRow: Initializes the object from a data row.
- GetKey: Returns the unique key of this instance, here the Guid.
- ToString: Provides a string representation describing to whom the authorization is assigned (user or group).

### TypeScript class
```typescript
interface UserAuthorizationAssignment {
  Guid: string; // Unique identifier of the authorization assignment (UUID)
  AuthorizationDefinitionId: string; // Identifier of the authorization definition (UUID)
  GroupId?: string | null; // Optional group identifier (UUID), if assigned to a group
  UserId?: string | null; // Optional user identifier (UUID), if assigned to a user
}
```