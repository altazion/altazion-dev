## StoreServiceDefinition

Class representing the definition of a service available in a store (Click & Mortar).

Public properties:
- ServiceId (int): Unique identifier of the service.
- Label (string): Label of the service.
- IconUrl (string): URL of the service icon.
- DescriptionUrl (string): URL of the service description.
- StoreServiceType (string): Type of the store service.

This class derives from DataObjectBase, enabling initialization from a DataRow and uniquely identifying the object by its ServiceId.

### TypeScript class
```typescript
interface StoreServiceDefinition {
  ServiceId: number; // Unique identifier of the service
  Label: string | null; // Label of the service
  IconUrl: string | null; // URL of the service icon
  DescriptionUrl: string | null; // URL of the service description
  StoreServiceType: string | null; // Type of the store service
}
```