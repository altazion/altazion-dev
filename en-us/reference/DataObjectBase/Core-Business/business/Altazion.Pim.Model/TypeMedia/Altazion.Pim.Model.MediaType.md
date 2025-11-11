## MediaType

The MediaType class represents a media type that can be associated with elements in the PIM system.

Public properties:
- Id (Guid): Unique identifier of the media type.
- ThemeId (string): Associated theme identifier, optional.
- ChannelId (Guid?): Associated marketing channel identifier, optional.
- Type (string): Type of element this media can be associated with (3 characters, e.g., "ART" for Article).
- Code (string): Unique code of the media type, max 15 characters.
- IsMandatory (bool): Indicates if this media type is mandatory.
- Label (string): Label of the media type, max 250 characters.
- AcceptedMimeTypes (string): Accepted MIME types for this media type.
- Limits (string): Limits and constraints in JSON or XML format.
- Destination (string): Storage destination of the media, max 200 characters.
- FilenameFormat (string): File name format to use, max 200 characters.
- StandardFlowId (Guid?): Associated standard flow identifier, optional.
- InputFileRegex (string): Regular expression to validate incoming files, max 200 characters.

### TypeScript class
```typescript
interface MediaType {
  Id: string; // GUID unique identifier
  ThemeId?: string | null;
  ChannelId?: string | null; // Nullable GUID
  Type: string; // 3 character type code
  Code: string; // Up to 15 chars
  IsMandatory: boolean;
  Label: string; // Up to 250 chars
  AcceptedMimeTypes: string;
  Limits: string; // JSON or XML string
  Destination: string; // Up to 200 chars
  FilenameFormat: string; // Up to 200 chars
  StandardFlowId?: string | null; // Nullable GUID
  InputFileRegex: string; // Up to 200 chars
}
```