## ECommerceOffer

La classe `ECommerceOffer` représente une offre e-commerce avec ses informations associées.

**Propriétés publiques :**

- `Guid` : Identifiant unique de l'offre e-commerce de type `Guid`.
- `SiteId` : Identifiant du site associé à l'offre, nullable `int`.
- `Label` : Libellé interne de l'offre (string).
- `LabelForCustomers` : Libellé public destiné aux clients (string).
- `Code` : Code de l'offre e-commerce (string).
- `IsAutomatic` : Boolean indiquant si l'offre est automatique.
- `IsValid` : Boolean indiquant si l'offre est valide.
- `IsActive` : Boolean indiquant si l'offre est active.
- `StartDate` : Date de début de validité de l'offre (DateTime).
- `EndDate` : Date de fin de validité de l'offre (DateTime).
- `CampaignGuid` : Guid nullable identifiant unique de la campagne associée à l'offre.
- `IsCumulative` : Boolean indiquant si l'offre est cumulable avec d'autres offres.

La méthode `ToString()` retourne le libellé de l'offre.


### D�claration TypeScript
```typescript
export interface ECommerceOffer {
  Guid: string; // Unique identifier GUID
  SiteId?: number | null; // Nullable site ID
  Label: string; // Internal label
  LabelForCustomers: string; // Public label for customers
  Code: string; // Offer code
  IsAutomatic: boolean; // Is the offer automatic
  IsValid: boolean; // Is the offer valid
  IsActive: boolean; // Is the offer active
  StartDate: string; // Date as ISO string
  EndDate: string; // Date as ISO string
  CampaignGuid?: string | null; // Nullable campaign GUID
  IsCumulative: boolean; // Is the offer cumulative
}
```