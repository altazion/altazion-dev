## CmsPageGroup

La classe CmsPageGroup représente un groupe de pages du CMS e-commerce. Elle est mappée à la table SQL `ecommerce_groupes_pages`.

Propriétés publiques :
- Guid : Identifiant unique (clé métier) du groupe de pages (type Guid).
- Code : Code fonctionnel du groupe de pages (type string).
- Label : Libellé du groupe de pages (type string).
- IsArchived : Indique si le groupe est archivé, valeur brute telle que stockée en base (type string).
- MarketingCampaignGuid : Identifiant de la campagne marketing associée, le cas échéant (type Guid).
- PublishingDate : Date de publication du groupe de pages, si définie (type DateTimeOffset?).
- UnpublishingDate : Date de dépublication du groupe de pages, si définie (type DateTimeOffset?).

### D�claration TypeScript
```typescript
interface CmsPageGroup {
  Guid: string; // Unique identifier (GUID) of the page group
  Code: string | null; // Functional code of the page group
  Label: string | null; // Label of the page group
  IsArchived: string | null; // Raw archive state as stored in database
  MarketingCampaignGuid: string; // GUID of the associated marketing campaign
  PublishingDate?: string | null; // Publishing date (ISO 8601 format) or null
  UnpublishingDate?: string | null; // Unpublishing date (ISO 8601 format) or null
}
```