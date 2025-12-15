## LabelDefinition

La classe LabelDefinition représente la définition d'un label ou tag utilisé pour le merchandising e-commerce.

Propriétés publiques :
- Id : Identifiant unique du label (clé primaire).
- Guid : Identifiant unique global du label.
- SiteId : Identifiant du site associé au label.
- Code : Code unique du label.
- Label : Libellé du label.
- HtmlContent : Contenu HTML associé au label.
- Image : Image binaire associée au label.
- DisplayOrder : Ordre d'affichage du label, optionnel.
- IsMultiValue : Indique si le label peut avoir plusieurs valeurs.
- IsForFacetNavigation : Indique si le label est utilisable pour la navigation par facettes.
- DisplayType : Type d'affichage du label (code sur 1 caractère).

La validation interne vérifie la présence et la validité des champs Guid, SiteId, Code, Label et DisplayType.


### D�claration TypeScript
```typescript
interface LabelDefinition {
  Id: number; // Unique identifier of the label (primary key)
  Guid: string; // Globally unique identifier of the label
  SiteId: number; // Identifier of the site associated to the label
  Code: string; // Unique code of the label
  Label: string; // Label name
  HtmlContent?: string | null; // HTML content associated with the label
  Image?: Uint8Array | null; // Binary image associated with the label
  DisplayOrder?: number | null; // Display order of the label
  IsMultiValue: boolean; // Whether the label can have multiple values
  IsForFacetNavigation: boolean; // Whether the label is for facet navigation
  DisplayType?: string | null; // Display type (1 character)
}

```