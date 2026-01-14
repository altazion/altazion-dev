## ECommerceOffer

Classe représentant une offre e-commerce avec ses propriétés associées :

- Guid : Identifiant unique de l'offre e-commerce.
- SiteId : Identifiant du site associé à l'offre (nullable).
- Label : Libellé interne de l'offre.
- LabelForCustomers : Libellé public destiné aux clients.
- Code : Code de l'offre.
- IsAutomatic : Indique si l'offre est automatique.
- IsValid : Indique si l'offre est valide.
- IsActive : Indique si l'offre est active.
- StartDate : Date de début de validité de l'offre.
- EndDate : Date de fin de validité de l'offre.
- CampaignGuid : Identifiant unique de la campagne associée (nullable).
- IsCumulative : Indique si l'offre est cumulable avec d'autres offres.

La méthode ToString renvoie le libellé de l'offre.

### D�claration TypeScript
```typescript
interface ECommerceOffer {
  Guid: string; // Guid unique identifier of the offer
  SiteId?: number | null; // Nullable site identifier
  Label: string; // Internal label of the offer
  LabelForCustomers: string; // Public label for customers
  Code: string; // Code of the offer
  IsAutomatic: boolean; // Whether the offer is automatic
  IsValid: boolean; // Whether the offer is valid
  IsActive: boolean; // Whether the offer is active
  StartDate: string; // Start date of validity in ISO string format
  EndDate: string; // End date of validity in ISO string format
  CampaignGuid?: string | null; // Nullable campaign identifier
  IsCumulative: boolean; // Whether the offer is cumulative with others
}
```