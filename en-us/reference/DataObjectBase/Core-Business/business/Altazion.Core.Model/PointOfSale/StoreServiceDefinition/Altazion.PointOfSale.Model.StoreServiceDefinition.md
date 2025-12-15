## StoreServiceDefinition

Represents the definition of a service available in store (Click & Mortar).

Public properties:

- ServiceId: Unique identifier of the service.
- Label: The label of the service.
- IconUrl: URL of the icon representing the service.
- DescriptionUrl: URL of the service description.
- StoreServiceType: The type of the store service.

### TypeScript class
```typescript
interface StoreServiceDefinition {
  ServiceId: number; // Unique identifier of the service
  Label: string; // Label of the service
  IconUrl: string | null; // URL of the service icon
  DescriptionUrl: string | null; // URL of the service description
  StoreServiceType: string | null; // Type of the store service
}
```