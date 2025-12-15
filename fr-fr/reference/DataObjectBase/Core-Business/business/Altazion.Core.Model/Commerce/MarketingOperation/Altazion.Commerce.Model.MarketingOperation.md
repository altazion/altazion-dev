## MarketingOperation

La classe MarketingOperation représente une opération commerciale telle qu'une promotion ou une mise en avant. Elle contient les propriétés suivantes :
- Guid : Identifiant unique de l'opération.
- CampaignGuid : Identifiant de la campagne commerciale parente.
- SiteId : Identifiant optionnel du site associé à l'opération.
- Label : Libellé de l'opération, doit être renseigné et ne pas dépasser 250 caractères.
- StartDate : Date de début de l'opération, obligatoire.
- EndDate : Date de fin de l'opération, obligatoire et doit être postérieure à la date de début.
- Type : Type de l'opération (code sur 10 caractères max), obligatoire.
- IsActive : Indique si l'opération est active.
- MarketingSurfaceGuid : Identifiant de la surface marketing associée, obligatoire.

La classe effectue des validations sur les propriétés critiques pour garantir leur cohérence et leur validité.

### D�claration TypeScript
```typescript
interface MarketingOperation {
    Guid: string; // unique identifier, GUID format
    CampaignGuid: string; // parent campaign identifier, GUID format
    SiteId?: number | null; // optional associated site ID
    Label: string; // operation label
    StartDate: Date; // start date
    EndDate: Date; // end date
    Type: string; // operation type code (max 10 chars)
    IsActive: boolean; // active status
    MarketingSurfaceGuid: string; // associated marketing surface GUID
}
```