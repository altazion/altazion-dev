## Campaign

The Campaign class represents a commercial campaign and includes the following properties:

- Guid: Unique identifier of the campaign (type Guid).
- Label: The name or title of the campaign (type string).
- Description: Detailed description of the campaign (type string).
- Type: Type of the campaign, encoded using a single character (type string).
- ManagerUserGuid: Identifier of the user managing the campaign (type Guid).
- IsArchived: Boolean flag indicating if the campaign is archived.

This class inherits from DataObjectBase and includes validations ensuring that Guid, Label, Type, and ManagerUserGuid are correctly set and comply with expected formats.

### TypeScript class
```typescript
interface Campaign {
  Guid: string; // Unique identifier (UUID)
  Label: string; // Campaign name
  Description?: string; // Campaign description
  Type: string; // Campaign type (1 character code)
  ManagerUserGuid: string; // Guid of the campaign manager
  IsArchived: boolean; // Whether the campaign is archived
}
```