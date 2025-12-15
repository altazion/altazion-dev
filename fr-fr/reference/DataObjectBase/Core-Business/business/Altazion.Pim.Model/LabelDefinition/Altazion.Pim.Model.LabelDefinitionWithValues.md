## LabelDefinitionWithValues

La classe LabelDefinitionWithValues représente une définition de label (tag) utilisée pour le merchandising e-commerce avec ses valeurs associées.

Elle hérite de la classe LabelDefinition qui contient les propriétés de base d'un label :
- Id : Identifiant unique du label (clé primaire).
- Guid : Identifiant unique global du label.
- SiteId : Identifiant du site associé.
- Code : Code unique du label.
- Label : Libellé du label.
- HtmlContent : Contenu HTML associé.
- Image : Image binaire associée.
- DisplayOrder : Ordre d'affichage.
- IsMultiValue : Indique si le label peut avoir plusieurs valeurs.
- IsForFacetNavigation : Indique si le label est utilisable pour la navigation par facettes.
- DisplayType : Type d'affichage du label.

La classe LabelDefinitionWithValues ajoute la propriété :
- Values : une liste (List<LabelValue>) des valeurs associées à ce label.

### D�claration TypeScript
```typescript
interface LabelDefinitionWithValues {
  Id: number;
  Guid: string; // UUID string
  SiteId: number;
  Code: string;
  Label: string;
  HtmlContent: string | null;
  Image: Uint8Array | null;
  DisplayOrder?: number | null;
  IsMultiValue: boolean;
  IsForFacetNavigation: boolean;
  DisplayType: string | null;
  Values: LabelValue[];
}

interface LabelValue {
  // Properties of LabelValue must be defined elsewhere
}
```