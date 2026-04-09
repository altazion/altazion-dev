## ECommerceOffer

La classe ECommerceOffer représente une offre e-commerce avec ses informations associées.

Propriétés publiques :

- Guid : Identifiant unique de l'offre e-commerce.
- SiteId : Identifiant du site associé à l'offre (nullable).
- Label : Libellé de l'offre e-commerce.
- LabelForCustomers : Libellé public de l'offre, destiné aux clients.
- Code : Code de l'offre e-commerce.
- IsAutomatic : Indique si l'offre est automatique.
- IsValid : Indique si l'offre est valide.
- IsActive : Indique si l'offre est active.
- StartDate : Date de début de validité de l'offre.
- EndDate : Date de fin de validité de l'offre.
- CampaignGuid : Identifiant unique de la campagne associée à l'offre (nullable).
- IsCumulative : Indique si l'offre est cumulable avec d'autres offres.

### D�claration TypeScript
```typescript
interface ECommerceOffer {
  Guid: string; // Unique identifier of the e-commerce offer (UUID string)
  SiteId?: number | null; // Identifier of the site associated with the offer
  Label: string; // Label of the e-commerce offer
  LabelForCustomers: string; // Public label of the offer
  Code: string; // Code of the e-commerce offer
  IsAutomatic: boolean; // Whether the offer is automatic
  IsValid: boolean; // Whether the offer is valid
  IsActive: boolean; // Whether the offer is active
  StartDate: string; // Start date of the offer's validity (ISO 8601 string)
  EndDate: string; // End date of the offer's validity (ISO 8601 string)
  CampaignGuid?: string | null; // Identifier of the campaign associated with the offer (UUID string)
  IsCumulative: boolean; // Whether the offer is cumulative with others
}
```