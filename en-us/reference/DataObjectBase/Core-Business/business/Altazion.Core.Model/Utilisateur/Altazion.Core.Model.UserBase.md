## UserBase

The UserBase class represents a user with their basic information and inherits from DataObjectBase.

Public properties:
- Id: Unique identifier of the user (decimal).
- Uxid: Global unique identifier (GUID) of the user.
- Name: User's name (string).
- EMail: User's email address (string).
- IsDeleted: Indicates if the user is deleted or deactivated (bool).
- IsLiteAccount: Indicates if the user is a secondary or simplified account (bool).
- IsMasterAdmin: Indicates if the user is a primary administrator (bool).

The class includes methods to initialize properties from a data row (FromDataRow), to get the user's unique key (GetKey), and to return a string representation of the user, which is their email address (ToString).

### TypeScript class
```typescript
interface UserBase {
  Id: number; // Unique identifier of the user
  Uxid: string; // GUID of the user
  Name: string | null; // User's name
  EMail: string | null; // User's email address
  IsDeleted: boolean; // Indicates if user is deleted or deactivated
  IsLiteAccount: boolean; // Indicates if user is a secondary/simplified account
  IsMasterAdmin: boolean; // Indicates if user is a primary administrator
}
```