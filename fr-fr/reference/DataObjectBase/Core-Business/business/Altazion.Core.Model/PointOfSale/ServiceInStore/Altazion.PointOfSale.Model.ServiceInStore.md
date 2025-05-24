## ServiceInStore

La classe ServiceInStore représente un service disponible dans un magasin (ClicknMortar). Elle contient les propriétés suivantes :

- StoreGuid : Identifiant unique du magasin (type Guid).
- ServiceId : Identifiant unique du service (type int).
- Phone : Numéro de téléphone du service dans le magasin (type string).
- Email : Adresse email du service dans le magasin (type string).

### D�claration TypeScript
```typescript
interface ServiceInStore {
  StoreGuid: string; // Guid as string
  ServiceId: number;
  Phone: string | null;
  Email: string | null;
}
```