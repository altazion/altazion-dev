## ProductDppRepairDocument

Représente un document technique de réparation ou de démontage associé à un produit, accessible au niveau d'accès professionnel (DppAccessLevel.Professional). Ces documents permettent aux réparateurs accrédités d'accéder aux schémas, guides, firmware ou autres documents utiles à la réparation ou au démontage du produit.

Propriétés publiques :
- DocumentType : Type du document, par exemple "schema_demontage" (schéma de démontage), "guide_reparation" (guide de réparation), "firmware" (logiciel embarqué), etc.
- Title : Le titre du document.
- Url : L'adresse URL vers le document, pouvant pointer vers un système de gestion électronique des documents interne ou un lien public, selon le niveau d'accès.
- Language : Code langue ISO 639-1 indiquant la langue du document (par ex. "fr" pour français, "en" pour anglais).
- Version : La version du document (par exemple "2.1"), utile pour le suivi des différentes versions des documents.

### D�claration TypeScript
```typescript
interface ProductDppRepairDocument {
  DocumentType: string;
  Title: string;
  Url: string;
  Language: string;
  Version: string;
}
```