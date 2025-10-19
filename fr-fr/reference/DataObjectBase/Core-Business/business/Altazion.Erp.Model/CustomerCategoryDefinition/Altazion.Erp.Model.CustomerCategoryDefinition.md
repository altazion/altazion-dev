## CustomerCategoryDefinition

Cette classe représente une définition de catégorie commerciale, correspondant à la table commercial_categories. Elle possède les propriétés suivantes :

- CategoryGuid : Identifiant unique (GUID) de la catégorie.
- CategoryTypeGuid : GUID correspondant au type de catégorie.
- Label : Libellé ou nom de la catégorie commerciale.

### D�claration TypeScript
```typescript
interface CustomerCategoryDefinition {
  CategoryGuid: string; // GUID string
  CategoryTypeGuid: string; // GUID string
  Label: string | null;
}
```