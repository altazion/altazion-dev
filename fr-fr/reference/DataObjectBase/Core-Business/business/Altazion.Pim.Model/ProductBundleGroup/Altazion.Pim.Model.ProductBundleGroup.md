## ProductBundleGroup

La classe ProductBundleGroup représente un groupe de lots promotionnels (opération commerciale de type bundle).

Propriétés publiques :
- Guid : Identifiant unique du groupe de lots.
- Label : Libellé du groupe de lots.
- CampaignGuid : Identifiant de la campagne commerciale associée.
- IsArchived : Indique si le groupe de lots est archivé (booléen).

Cette classe permet d'identifier un groupe de lots promotionnels, de lui associer un libellé et une campagne commerciale, et de savoir s'il est archivé.

### D�claration TypeScript
```typescript
interface ProductBundleGroup {
  Guid: string; // Unique identifier of the bundle group
  Label: string; // Name of the bundle group
  CampaignGuid: string; // Identifier of the associated commercial campaign
  IsArchived: boolean; // Indicates whether the bundle group is archived
}
```