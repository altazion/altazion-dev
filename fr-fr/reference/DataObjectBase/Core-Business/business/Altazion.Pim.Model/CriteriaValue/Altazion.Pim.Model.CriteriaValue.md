## CriteriaValue

Représente une valeur de critère dans le catalogue de produits.

Propriétés publiques :
- Guid : Obtient ou définit l'identifiant unique de la valeur de critère.
- CriteriaGuid : Obtient ou définit l'identifiant unique du critère parent.
- Order : Obtient ou définit l'ordre d'affichage de la valeur de critère.
- Label : Obtient ou définit le libellé de la valeur de critère.
- MinDecimalValue : Obtient ou définit la valeur décimale minimale pour les critères de type plage (optionnel).
- MaxDecimalValue : Obtient ou définit la valeur décimale maximale pour les critères de type plage (optionnel).
- TextValue : Obtient ou définit la valeur textuelle du critère (optionnel).
- BooleanValue : Obtient ou définit la valeur booléenne du critère (optionnel).
- CustomUrlPart : Obtient ou définit la partie personnalisée de l'URL pour cette valeur de critère (optionnel).
- AttributeValue : Obtient ou définit la valeur d'attribut associée (optionnel).
- ImageUrl : Obtient ou définit l'URL de l'image associée à cette valeur de critère (optionnel).


### D�claration TypeScript
```typescript
interface CriteriaValue {
  Guid: string; // Unique identifier of the criteria value
  CriteriaGuid: string; // Unique identifier of the parent criteria
  Order: number; // Display order
  Label: string; // Label of the criteria value
  MinDecimalValue?: number | null; // Minimum decimal value for range criteria
  MaxDecimalValue?: number | null; // Maximum decimal value for range criteria
  TextValue?: string | null; // Textual value
  BooleanValue?: boolean | null; // Boolean value
  CustomUrlPart?: string | null; // Custom URL part
  AttributeValue?: string | null; // Associated attribute value
  ImageUrl?: string | null; // URL of associated image
}
```