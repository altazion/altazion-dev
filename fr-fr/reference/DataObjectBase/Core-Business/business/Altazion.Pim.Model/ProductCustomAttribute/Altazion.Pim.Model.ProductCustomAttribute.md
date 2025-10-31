## ProductCustomAttribute

Classe représentant un attribut personnalisé d'un produit avec son identifiant d'article.

Propriétés publiques :

- ProductId : Identifiant unique de l'article associé à l'attribut. C'est un entier long (long).
- AttributeGuid : Identifiant unique de l'attribut, de type Guid.
- DecimalValue : Valeur numérique optionnelle de l'attribut.
- BooleanValue : Valeur booléenne optionnelle de l'attribut.
- TextValue : Valeur textuelle optionnelle de l'attribut, avec une validation en longueur maximale de 250 caractères.
- DateValue : Valeur de date optionnelle de l'attribut.

La classe effectue une validation des données au moment de l'enregistrement : ProductId doit être supérieur à 0, AttributeGuid ne doit pas être vide, TextValue ne doit pas dépasser 250 caractères. Les autres valeurs numériques, booléennes ou de date sont optionnelles et sans contraintes spécifiques.


### D�claration TypeScript
```typescript
interface ProductCustomAttribute {
  productId: number; // Identifiant unique de l'article associé (ProductId)
  attributeGuid: string; // Identifiant unique de l'attribut (GUID)
  decimalValue?: number | null; // Valeur numérique optionnelle
  booleanValue?: boolean | null; // Valeur booléenne optionnelle
  textValue?: string | null; // Valeur textuelle optionnelle, max 250 caractères
  dateValue?: string | null; // Valeur date optionnelle au format ISO string
}
```