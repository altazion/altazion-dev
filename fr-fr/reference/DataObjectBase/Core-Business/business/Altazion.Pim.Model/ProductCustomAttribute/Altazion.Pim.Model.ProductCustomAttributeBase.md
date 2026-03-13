## ProductCustomAttributeBase

Représente un attribut personnalisé de produit avec ses différentes valeurs possibles (numérique, booléenne, textuelle, date ou énumérée).

Propriétés publiques :
- EnumeratedValue (int?) : Valeur provenant d'une énumération. Elle peut être nulle si non définie.
- AttributeGuid (Guid) : Identifiant unique de l'attribut. C'est la clé unique qui identifie cet attribut.
- DecimalValue (decimal?) : Valeur numérique associée à l'attribut. Optionnelle.
- BooleanValue (bool?) : Valeur booléenne associée à l'attribut. Optionnelle.
- TextValue (string) : Valeur textuelle associée à l'attribut. Optionnelle.
- DateValue (DateTimeOffset?) : Valeur de date associée à l'attribut. Optionnelle.

Cette classe permet d'initialiser ses propriétés à partir d'une ligne de données (DataRow) et la clé unique de l'objet est basée sur AttributeGuid.

### D�claration TypeScript
```typescript
interface ProductCustomAttributeBase {
  /** Value from an enumeration. Nullable if not set */
  EnumeratedValue?: number | null;
  /** Unique identifier of the attribute */
  AttributeGuid: string;
  /** Numeric value associated with the attribute, optional */
  DecimalValue?: number | null;
  /** Boolean value associated with the attribute, optional */
  BooleanValue?: boolean | null;
  /** Textual value associated with the attribute, optional */
  TextValue?: string | null;
  /** Date value associated with the attribute, optional */
  DateValue?: string | null; // ISO 8601 string format
}
```