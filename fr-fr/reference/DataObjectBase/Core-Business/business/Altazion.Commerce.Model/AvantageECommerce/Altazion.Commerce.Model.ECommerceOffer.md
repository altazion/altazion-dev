## ECommerceOffer

Classe représentant une offre e-commerce avec ses informations associées.

Propriétés publiques :
- Guid : Identifiant unique de type GUID de l'offre e-commerce.
- SiteId : Identifiant optionnel du site associé à l'offre.
- Label : Libellé de l'offre e-commerce.
- LabelForCustomers : Libellé public de l'offre destiné aux clients.
- Code : Code unique de l'offre e-commerce.
- IsAutomatic : Booléen indiquant si l'offre est automatique.
- IsValid : Booléen indiquant si l'offre est valide.
- IsActive : Booléen indiquant si l'offre est active.
- StartDate : Date de début de validité de l'offre.
- EndDate : Date de fin de validité de l'offre.
- CampaignGuid : Identifiant optionnel unique de la campagne associée.
- IsCumulative : Booléen indiquant si l'offre est cumulable avec d'autres offres.

### D�claration TypeScript
```typescript
interface ECommerceOffer {
  Guid: string; // Unique identifier (GUID)
  SiteId?: number | null; // Optional site identifier
  Label: string; // Offer label
  LabelForCustomers: string; // Public label for customers
  Code: string; // Offer code
  IsAutomatic: boolean; // Whether the offer is automatic
  IsValid: boolean; // Whether the offer is valid
  IsActive: boolean; // Whether the offer is active
  StartDate: Date; // Offer start date
  EndDate: Date; // Offer end date
  CampaignGuid?: string | null; // Optional campaign GUID
  IsCumulative: boolean; // Whether the offer is cumulative
}
```