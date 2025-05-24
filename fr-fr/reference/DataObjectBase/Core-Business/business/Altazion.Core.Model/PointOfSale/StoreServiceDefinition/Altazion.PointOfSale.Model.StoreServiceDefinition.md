## StoreServiceDefinition

Classe représentant la définition d'un service disponible en magasin (Click & Mortar).

Propriétés publiques :
- ServiceId (int) : Identifiant unique du service.
- Label (string) : Libellé du service.
- IconUrl (string) : URL de l'icône du service.
- DescriptionUrl (string) : URL de la description du service.
- StoreServiceType (string) : Type du service magasin.

Cette classe est dérivée de DataObjectBase, permettant d'initialiser ses données à partir d'un DataRow, et d'identifier la clé unique via ServiceId.

### D�claration TypeScript
```typescript
interface StoreServiceDefinition {
  ServiceId: number; // Unique identifier of the service
  Label: string | null; // Label of the service
  IconUrl: string | null; // URL of the service icon
  DescriptionUrl: string | null; // URL of the service description
  StoreServiceType: string | null; // Type of the store service
}
```