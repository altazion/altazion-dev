## ProductCustomAttributeBase

Cette classe représente un attribut personnalisé de produit avec ses différentes valeurs possibles.

Propriétés publiques :
- AttributeGuid : Identifiant unique (GUID) de l'attribut.
- DecimalValue : Valeur numérique (decimal nullable) de l'attribut.
- BooleanValue : Valeur booléenne (nullable) de l'attribut.
- TextValue : Valeur textuelle (string) de l'attribut. Si aucune valeur courte n'est disponible, une version longue peut être utilisée.
- DateValue : Valeur de date (DateTimeOffset nullable) de l'attribut.

Méthodes importantes :
- GetKey() : retourne la clé unique de l'objet qui est ici l'AttributeGuid.
- FromDataRow(DataRow dr) : initialise les propriétés de l'objet à partir d'une ligne de données, en extrayant les différentes valeurs stockées.

Cette classe est marquée par l'attribut SqlDataConcept indiquant qu'elle correspond à la table "catalog_articles_attributs" dans la base "Catalog" et la notion "ProductCustomAttribute".

### D�claration TypeScript
```typescript
export interface ProductCustomAttributeBase {
  AttributeGuid: string; // GUID
  DecimalValue?: number | null;
  BooleanValue?: boolean | null;
  TextValue?: string | null;
  DateValue?: string | null; // ISO 8601 string or null
}
```