## MarketingOperation

La classe MarketingOperation représente une opération commerciale, telle qu'une promotion ou une mise en avant.

Propriétés publiques :
- Guid : Identifiant unique de l'opération.
- CampaignGuid : Identifiant de la campagne commerciale parente.
- SiteId : Identifiant du site associé à l'opération (optionnel).
- Label : Libellé de l'opération.
- StartDate : Date de début de l'opération.
- EndDate : Date de fin de l'opération.
- Type : Type de l'opération (code sur 100 caractères maximum).
- MenuGuid : Identifiant du menu associé à l'opération (optionnel).
- IsActive : Indique si l'opération est active.
- MarketingSurfaceGuid : Identifiant de la surface marketing associée.

Cette classe valide que les identifiants importants sont bien fournis, que les dates sont cohérentes, et que les chaînes de caractères respectent les longueurs maximales autorisées.

### D�claration TypeScript
```typescript
interface MarketingOperation {
  Guid: string; // Unique identifier of the operation (GUID)
  CampaignGuid: string; // Identifier of the parent commercial campaign (GUID)
  SiteId?: number | null; // Optional identifier of the associated site
  Label: string; // Label of the operation
  StartDate: string; // Start date of the operation in ISO 8601 format
  EndDate: string; // End date of the operation in ISO 8601 format
  Type: string; // Type of the operation (max 100 characters)
  MenuGuid?: string | null; // Optional identifier of the associated menu (GUID)
  IsActive: boolean; // Whether the operation is active
  MarketingSurfaceGuid: string; // Identifier of the associated marketing surface (GUID)
}
```