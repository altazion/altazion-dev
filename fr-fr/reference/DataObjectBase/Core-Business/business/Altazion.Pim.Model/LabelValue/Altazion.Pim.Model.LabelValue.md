## LabelValue

Cette classe représente une valeur possible pour un label/tag e-commerce.

Propriétés publiques :
- Guid : Identifiant unique global de la valeur (type Guid).
- LabelDefinitionId : Identifiant du label parent (clé étrangère vers LabelDefinition) (type long).
- Label : Libellé de la valeur (type string).
- HtmlContent : Contenu HTML court associé à la valeur (type string).
- HtmlContentLong : Contenu HTML long associé à la valeur (type string).
- ImageUrl : URL de l'image associée à la valeur (type string).

Elle hérite de DataObjectBase et fournit des validations sur les propriétés clés (Guid, LabelDefinitionId, Label).


### D�claration TypeScript
```typescript
interface LabelValue {
  Guid: string; // Unique global identifier in GUID format
  LabelDefinitionId: number; // Identifier of the parent label
  Label: string; // Label text
  HtmlContent?: string | null; // Short HTML content
  HtmlContentLong?: string | null; // Long HTML content
  ImageUrl?: string | null; // URL of the associated image
}
```