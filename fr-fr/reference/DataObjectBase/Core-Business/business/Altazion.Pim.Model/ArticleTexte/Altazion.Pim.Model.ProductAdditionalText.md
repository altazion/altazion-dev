## ProductAdditionalText

Représente un texte associé à un article. 

Propriétés publiques :
- Guid : Identifiant unique du texte.
- ProductGuid : Identifiant unique de l'article associé.
- TextTypeGuid : Identifiant unique du type de texte.
- Text : Contenu du texte.
- Source : Source du texte.
- Date : Date associée au texte, typée en DateTimeOffset nullable.

### D�claration TypeScript
```typescript
interface ProductAdditionalText {
  Guid: string; // Unique identifier of the text (GUID)
  ProductGuid: string; // Unique identifier of the associated product (GUID)
  TextTypeGuid: string; // Unique identifier of the text type (GUID)
  Text?: string | null; // Content of the text
  Source?: string | null; // Source of the text
  Date?: string | null; // Date associated with the text in ISO 8601 format
}
```