## StoreServiceDefinition

Représente la définition d'un service disponible en magasin (Click & Mortar).

Propriétés publiques :

- ServiceId : Identifiant unique du service.
- Label : Libellé du service.
- IconUrl : URL de l'icône du service.
- DescriptionUrl : URL de la description du service.
- StoreServiceType : Type du service magasin.

### D�claration TypeScript
```typescript
interface StoreServiceDefinition {
  ServiceId: number; // Unique identifier of the service
  Label: string; // Label of the service
  IconUrl: string | null; // URL of the service icon
  DescriptionUrl: string | null; // URL of the service description
  StoreServiceType: string | null; // Type of the store service
}
```