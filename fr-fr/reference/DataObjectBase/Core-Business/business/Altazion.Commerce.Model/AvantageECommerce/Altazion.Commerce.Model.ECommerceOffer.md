## ECommerceOffer

La classe `ECommerceOffer` représente une offre e-commerce avec ses informations associées.

Propriétés publiques :
- `Guid` : Identifiant unique de l'offre e-commerce.
- `SiteId` : Identifiant du site associé à l'offre (optionnel).
- `Label` : Libellé de l'offre e-commerce.
- `LabelForCustomers` : Libellé public de l'offre, destiné aux clients.
- `Code` : Code de l'offre e-commerce.
- `IsAutomatic` : Indique si l'offre est automatique.
- `IsValid` : Indique si l'offre est valide.
- `IsActive` : Indique si l'offre est active.
- `StartDate` : Date de début de validité de l'offre.
- `EndDate` : Date de fin de validité de l'offre.
- `CampaignGuid` : Identifiant unique de la campagne associée à l'offre (optionnel).
- `IsCumulative` : Indique si l'offre est cumulable avec d'autres offres.
- `IsForMainEcommerce` : Indique si l'offre est disponible pour les lignes principales du panier e-commerce (par défaut true).
- `IsForMarketplace` : Indique si l'offre est disponible pour les lignes vendeur marketplace du panier e-commerce (par défaut true).
- `IsForShipFromStore` : Indique si l'offre est disponible pour les lignes ship from store du panier e-commerce (par défaut true).
- `IsForStorePickup` : Indique si l'offre est disponible pour les lignes en pickup magasin du panier e-commerce (par défaut false).

### D�claration TypeScript
```typescript
interface ECommerceOffer {
  Guid: string; // Unique identifier of the e-commerce offer (GUID)
  SiteId?: number | null; // Identifier of the associated site (optional)
  Label: string; // Label of the e-commerce offer
  LabelForCustomers: string; // Public label for customers
  Code: string; // Code of the offer
  IsAutomatic: boolean; // Indicates if the offer is automatic
  IsValid: boolean; // Indicates if the offer is valid
  IsActive: boolean; // Indicates if the offer is active
  StartDate: string; // Start date of validity (ISO 8601 string)
  EndDate: string; // End date of validity (ISO 8601 string)
  CampaignGuid?: string | null; // Identifier of the associated campaign (optional)
  IsCumulative: boolean; // Indicates if offer is cumulative with others
  IsForMainEcommerce: boolean; // Available for main e-commerce lines
  IsForMarketplace: boolean; // Available for marketplace seller lines
  IsForShipFromStore: boolean; // Available for ship from store lines
  IsForStorePickup: boolean; // Available for store pickup lines
}
```