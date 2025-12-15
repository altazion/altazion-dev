## ServiceInStore

Représente un service disponible dans un magasin physique (Click'n Mortar).

Propriétés publiques :
- StoreGuid : Identifiant unique du magasin (GUID).
- ServiceId : Identifiant du service (entier).
- Phone : Numéro de téléphone du service dans le magasin (chaîne de caractères).
- Email : Adresse email du service dans le magasin (chaîne de caractères).

### D�claration TypeScript
```typescript
interface ServiceInStore {
  StoreGuid: string; // GUID representing unique store ID
  ServiceId: number; // Service identifier
  Phone?: string | null; // Phone number of the service in the store
  Email?: string | null; // Email address of the service in the store
}
```