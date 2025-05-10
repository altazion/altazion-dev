## ProductCustomAttributeBase

Représente un attribut personnalisé de produit avec ses valeurs associées.

Propriétés publiques :
- AttributeGuid : Identifiant unique (GUID) de l'attribut.
- DecimalValue : Valeur numérique (décimale) optionnelle de l'attribut.
- BooleanValue : Valeur booléenne optionnelle de l'attribut.
- TextValue : Valeur textuelle (string) de l'attribut. Peut venir de deux colonnes différentes (une plus courte, une longue).
- DateValue : Valeur date/heure (DateTimeOffset) optionnelle de l'attribut.

Méthodes importantes :
- GetKey() : retourne la clé unique de l'objet via AttributeGuid.
- FromDataRow(DataRow dr) : initialise les propriétés à partir d'une ligne de données, en récupérant les valeurs correspondantes pour chaque propriété.

### D�claration TypeScript
```typescript
interface ProductCustomAttributeBase {
  AttributeGuid: string; // GUID as string
  DecimalValue?: number | null;
  BooleanValue?: boolean | null;
  TextValue?: string | null;
  DateValue?: string | null; // ISO date string or null
}
```