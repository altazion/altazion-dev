## AvailableModule

The AvailableModule class represents a feature module available in the Altazion system. It can be installed or not and contains the necessary metadata for its installation and management.

Public properties:
- Guid: unique identifier of the available module.
- Url: URL of the module (for download or access).
- Label: label of the module.
- Category: category of the module.
- Description: description of the module.
- IsPublic: indicates whether the module is public (visible to all authorized users) or not (specific or internal use).
- XmlData: XML data of the module containing its metadata and configuration.
- Version: version of the module.

### TypeScript class
```typescript
interface AvailableModule {
  Guid: string; // Unique identifier (GUID) of the available module
  Url?: string; // URL for download or access
  Label?: string; // Label of the module
  Category?: string; // Category of the module
  Description?: string; // Description of the module
  IsPublic: boolean; // Indicates if the module is public
  XmlData?: string; // XML metadata and configuration data
  Version?: string; // Version of the module
}
```