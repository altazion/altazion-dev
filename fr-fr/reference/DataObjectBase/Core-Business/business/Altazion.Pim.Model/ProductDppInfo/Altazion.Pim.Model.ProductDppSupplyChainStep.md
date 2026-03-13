## ProductDppSupplyChainStep

Classe représentant une étape dans la chaîne d'approvisionnement d'un produit, telle que requise pour le Passeport Numérique Produit (DPP) au niveau réglementaire. Cette classe permet aux autorités compétentes (douanes, surveillance marché) de tracer l'origine et les transformations du produit jusqu'au marché européen.

Propriétés publiques :
- StepOrder : entieir indiquant l'ordre de l'étape dans la chaîne (1 = matière première, n = distribution).
- Role : chaîne de caractères décrivant le rôle de l'acteur dans la chaîne (exemples: "raw_material", "manufacturing", "assembly", "distribution").
- CompanyName : nom de l'entreprise intervenante à cette étape.
- CompanyGln : GLN GS1 (Global Location Number) de l'entreprise.
- CountryCode : code pays ISO 3166-1 alpha-2 où se déroule l'étape (ex: "FR", "CN", "TR").
- SiteGln : GLN GS1 du site de production concerné (optionnel).


### D�claration TypeScript
```typescript
interface ProductDppSupplyChainStep {
  StepOrder: number; // Order of the step in the chain (1 = raw material, n = distribution)
  Role: string; // Role of the actor in the chain (e.g., 'raw_material', 'manufacturing')
  CompanyName: string; // Name of the company involved
  CompanyGln: string; // GS1 GLN of the company
  CountryCode: string; // ISO 3166-1 alpha-2 country code where the step occurs
  SiteGln?: string; // GS1 GLN of the production site (optional)
}
```