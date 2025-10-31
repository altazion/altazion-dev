## FulfillmentZone

La classe FulfillmentZone représente une zone de préparation logistique telle qu'un entrepôt, un magasin ou un point de retrait.

Propriétés publiques :
- Guid : Identifiant unique (GUID) de la zone de préparation.
- Label : Libellé de la zone de préparation.
- ShortName : Nom court de la zone de préparation.
- IsDefault : Indique si cette zone est la zone par défaut.
- IsActive : Indique si la zone est active.
- PreparationDelayInDays : Délai de préparation exprimé en jours.
- LegalEntityId : Identifiant de la raison juridique (société) associée, nullable.
- Name : Nom de la zone pour l'adresse.
- Address : Adresse postale de la zone.
- PostalCode : Code postal associé.
- City : Ville associée.
- CountryCode : Code pays ISO sur 3 lettres.
- Phone : Numéro de téléphone.
- Email : Adresse email.
- IsActiveForShipFromStore : Indique si la zone est active pour l'expédition depuis le magasin (Ship From Store).
- ShipFromStorePoints : Points attribués pour le Ship From Store, utilisés dans l'algorithme de sélection, nullable.
- ShipFromStorePriority : Priorité dans l'expédition Ship From Store, nullable.
- ShipFromStorePreparationRate : Taux (coût) de préparation pour Ship From Store, nullable.

Cette classe intègre aussi des validations sur la longueur minimale et maximale des propriétés string et des contraintes d'obligation notamment sur Label. Elle hérite de DataObjectBase, ce qui lui permet de gérer la validation des données et la récupération des clés uniques (ici Guid).

### D�claration TypeScript
```typescript
interface FulfillmentZone {
  Guid: string; // GUID unique identifier
  Label: string; // Zone label
  ShortName?: string; // Short name (optional)
  IsDefault: boolean; // Is default zone
  IsActive: boolean; // Is active zone
  PreparationDelayInDays: number; // Preparation delay in days
  LegalEntityId?: number | null; // Nullable legal entity ID
  Name?: string; // Name for the address (optional)
  Address?: string; // Postal address (optional)
  PostalCode?: string; // Postal code (optional)
  City?: string; // City (optional)
  CountryCode?: string; // ISO3 country code (optional)
  Phone?: string; // Phone number (optional)
  Email?: string; // Email address (optional)
  IsActiveForShipFromStore: boolean; // Active for Ship From Store
  ShipFromStorePoints?: number | null; // Nullable points for Ship From Store
  ShipFromStorePriority?: number | null; // Nullable priority for Ship From Store
  ShipFromStorePreparationRate?: number | null; // Nullable preparation rate for Ship From Store
}
```