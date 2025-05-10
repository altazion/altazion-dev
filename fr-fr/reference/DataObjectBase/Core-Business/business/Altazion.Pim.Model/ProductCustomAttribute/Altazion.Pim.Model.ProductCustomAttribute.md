## ProductCustomAttribute

La classe ProductCustomAttribute représente un attribut personnalisé de produit lié à un article spécifique.

- ArticleId : Identifiant unique de l'article associé à cet attribut.
- AttributeGuid : Identifiant unique de l'attribut.
- DecimalValue : Valeur numérique de l'attribut, pouvant être null.
- BooleanValue : Valeur booléenne de l'attribut, pouvant être null.
- TextValue : Valeur textuelle de l'attribut.
- DateValue : Valeur de date de l'attribut, pouvant être null.

### D�claration TypeScript
```typescript
interface ProductCustomAttribute {
  ArticleId: number;
  AttributeGuid: string; // Guid as string
  DecimalValue?: number | null;
  BooleanValue?: boolean | null;
  TextValue?: string | null;
  DateValue?: string | null; // DateTimeOffset as ISO string
}
```