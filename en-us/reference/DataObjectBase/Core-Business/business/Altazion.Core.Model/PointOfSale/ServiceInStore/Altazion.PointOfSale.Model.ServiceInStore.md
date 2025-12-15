## ServiceInStore

Represents a service available within a physical store (Click'n Mortar).

Public properties:
- StoreGuid: Unique identifier of the store (GUID).
- ServiceId: Identifier of the service (integer).
- Phone: Phone number of the service within the store (string).
- Email: Email address of the service within the store (string).

### TypeScript class
```typescript
interface ServiceInStore {
  StoreGuid: string; // GUID representing unique store ID
  ServiceId: number; // Service identifier
  Phone?: string | null; // Phone number of the service in the store
  Email?: string | null; // Email address of the service in the store
}
```