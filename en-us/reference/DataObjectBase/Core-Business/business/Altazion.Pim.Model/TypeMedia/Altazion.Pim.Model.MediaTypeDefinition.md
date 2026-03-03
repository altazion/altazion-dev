## MediaTypeDefinition

The MediaTypeDefinition class represents a media type that can be associated with items in the PIM system.

Public properties:
- Id: Guid, unique identifier of the media type.
- ThemeId: string, optional identifier of the associated theme.
- ChannelId: Guid?, optional identifier of the associated marketing channel.
- Type: string, type of item this media can be associated with (3 characters, e.g., "ART" for Article).
- Code: string, unique code of the media type (max 15 characters).
- IsMandatory: bool, indicates if this media type is mandatory.
- Label: string, label of the media type (max 250 characters).
- AcceptedMimeTypes: string, list of MIME types accepted for this media type.
- Limits: string, limits and constraints for this media type (in JSON or XML format).
- Destination: string, storage destination for the media (max 200 characters).
- FilenameFormat: string, format of the filename to use (max 200 characters).
- StandardFlowId: Guid?, optional identifier of the associated standard flow.
- InputFileRegex: string, regex pattern to validate incoming files (max 200 characters).

It also provides a method to populate properties from a DataRow (FromDataRow) and a method to get the unique key (GetKey). The ToString method returns the media type label or code.

### TypeScript class
```typescript
interface MediaTypeDefinition {
  Id: string; // GUID unique identifier of the media type
  ThemeId: string | null; // Optional theme identifier
  ChannelId?: string | null; // Optional marketing channel identifier
  Type: string | null; // Type of item associated (3 characters, e.g., 'ART')
  Code: string | null; // Unique code (max 15 chars)
  IsMandatory: boolean; // Indicates if the media type is mandatory
  Label: string | null; // Label of the media type (max 250 chars)
  AcceptedMimeTypes: string | null; // Accepted MIME types
  Limits: string | null; // Limits/constraints in JSON or XML
  Destination: string | null; // Storage destination (max 200 chars)
  FilenameFormat: string | null; // Filename format (max 200 chars)
  StandardFlowId?: string | null; // Optional standard flow identifier
  InputFileRegex: string | null; // Regex for input file validation (max 200 chars)
}
```