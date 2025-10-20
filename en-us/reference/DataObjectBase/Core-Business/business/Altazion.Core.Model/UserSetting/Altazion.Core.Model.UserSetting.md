## UserSetting

The UserSetting class represents a user parameter stored as a key-value pair, organized by section and group. It exposes the following public properties:

- Guid: Unique identifier of the user parameter.
- UserId: Unique identifier of the user owning this parameter.
- Section: Parameter section (first-level organization).
- Group: Parameter group (second-level organization).
- OptionName: The option name or key of the parameter.
- Value: The value of the parameter stored as a string.

The class can initialize its properties from a data row (DataRow) and provides a string representation of the user parameter formatted as "Section.Group.OptionName = Value".

### TypeScript class
```typescript
interface UserSetting {
  Guid: string; // Unique identifier of the user parameter (GUID)
  UserId: string; // Unique identifier of the user owning this parameter (GUID)
  Section: string | null; // Section of the parameter, first-level organization
  Group: string | null; // Group of the parameter, second-level organization
  OptionName: string | null; // Name of the option or key of the parameter
  Value: string | null; // Value of the parameter as a string
}
```