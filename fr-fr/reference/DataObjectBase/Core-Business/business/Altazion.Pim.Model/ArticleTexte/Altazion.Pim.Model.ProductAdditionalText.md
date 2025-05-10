## ProductAdditionalText

La classe ProductAdditionalText représente un texte associé à un article. Elle dérive de DataObjectBase.

Propriétés publiques :

- Guid : Identifiant unique du texte.
- ProductGuid : Identifiant unique de l'article associé.
- TextTypeGuid : Identifiant unique du type de texte.
- Text : Contenu du texte.
- Source : Source du texte.
- Date : Date associée au texte, optionnelle.

Cette classe permet de stocker et manipuler un texte additionnel lié à un produit dans le système.

### D�claration TypeScript
```typescript
interface ProductAdditionalText {
  Guid: string; // Unique identifier of the text (GUID)
  ProductGuid: string; // Unique identifier of the associated product (GUID)
  TextTypeGuid: string; // Unique identifier of the text type (GUID)
  Text: string | null; // Content of the text
  Source: string | null; // Source of the text
  Date: string | null; // Date associated with the text, ISO format or null
}
```