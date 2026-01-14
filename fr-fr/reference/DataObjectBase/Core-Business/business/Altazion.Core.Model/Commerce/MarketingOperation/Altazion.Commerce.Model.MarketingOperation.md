## MarketingOperation

La classe MarketingOperation représente une opération commerciale telle qu'une promotion ou une mise en avant dans le système Altazion.

Propriétés publiques :
- Guid : Identifiant unique de l'opération (type Guid).
- CampaignGuid : Identifiant de la campagne commerciale parente (type Guid).
- SiteId : Identifiant du site associé à l'opération, optionnel (type int?).
- Label : Libellé de l'opération, représente le nom ou titre (type string).
- StartDate : Date de début de l'opération (type DateTimeOffset).
- EndDate : Date de fin de l'opération (type DateTimeOffset).
- Type : Type de l'opération, sous forme d'un code sur 10 caractères maximum (type string).
- IsActive : Indicateur booléen indiquant si l'opération est active.
- MarketingSurfaceGuid : Identifiant de la surface marketing associée (type Guid).

Cette classe est annotée avec l'attribut [SqlDataConcept] qui définit les informations de mapping avec la base de données (schéma Commerce, table MarketingOperation, ou alias commercial_operations). Elle hérite de DataObjectBase et inclut une validation de cohérence sur ses propriétés.


### D�claration TypeScript
```typescript
interface MarketingOperation {
  Guid: string; // Unique identifier of the operation (UUID string)
  CampaignGuid: string; // Identifier of the parent commercial campaign (UUID string)
  SiteId?: number | null; // Optional identifier of the associated site
  Label: string; // Label or name of the operation
  StartDate: string; // Start date of the operation as ISO string
  EndDate: string; // End date of the operation as ISO string
  Type: string; // Operation type code (max 10 characters)
  IsActive: boolean; // Indicates if the operation is active
  MarketingSurfaceGuid: string; // Identifier of the marketing surface (UUID string)
}
```