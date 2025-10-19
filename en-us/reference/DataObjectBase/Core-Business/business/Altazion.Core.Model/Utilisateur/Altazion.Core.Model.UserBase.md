## UserBase

The `UserBase` class represents a user with basic information within the system.

Public properties:

- `Id` (decimal): Unique identifier of the user.
- `Uxid` (Guid): Globally unique identifier (GUID) of the user.
- `Name` (string): Name of the user.
- `EMail` (string): Email address of the user.
- `IsDeleted` (bool): Indicates if the user is deleted or deactivated.
- `IsLiteAccount` (bool): Indicates if the user is a secondary or simplified account.
- `IsMasterAdmin` (bool): Indicates if the user is a main administrator.

This class derives from `DataObjectBase` and is linked to an SQL table named 'security_utilisateurs' in the 'Office' context with the entity 'User'. It includes methods to initialize properties from a data row and to retrieve the unique key of the object.

### TypeScript class
```typescript
interface UserBase {
  /** Unique identifier of the user. */
  Id: number;
  /** Globally unique identifier (GUID) of the user. */
  Uxid: string; // GUID represented as string
  /** Name of the user. */
  Name: string | null;
  /** Email address of the user. */
  EMail: string | null;
  /** Indicates if the user is deleted or deactivated. */
  IsDeleted: boolean;
  /** Indicates if the user is a secondary or simplified account. */
  IsLiteAccount: boolean;
  /** Indicates if the user is a main administrator. */
  IsMasterAdmin: boolean;
}
```