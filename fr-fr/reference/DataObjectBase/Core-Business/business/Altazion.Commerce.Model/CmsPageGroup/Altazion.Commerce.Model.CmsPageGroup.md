## CmsPageGroup

La classe CmsPageGroup représente un groupe de pages dans le CMS e-commerce. Les données sont mappées à la table SQL "ecommerce_groupes_pages".

Propriétés :
- Guid : Identifiant unique du groupe de pages (clé métier).
- Code : Code fonctionnel du groupe de pages.
- Label : Libellé du groupe de pages.
- IsArchived : Indique si le groupe est archivé (valeur brute telle que stockée en base).
- CampaignGuid : Identifiant de la campagne marketing associée, si applicable.
- PublishingDate : Date de publication du groupe de pages (optionnelle).
- UnpublishingDate : Date de dépublication du groupe de pages (optionnelle).

### D�claration TypeScript
```typescript
export interface CmsPageGroup {
  Guid: string; // Unique identifier (GUID)
  Code: string | null; // Functional code
  Label: string | null; // Label of the group
  IsArchived: string | null; // Archived status raw value
  CampaignGuid: string; // Campaign GUID
  PublishingDate?: string; // Nullable publishing date (ISO string)
  UnpublishingDate?: string; // Nullable unpublishing date (ISO string)
}
```