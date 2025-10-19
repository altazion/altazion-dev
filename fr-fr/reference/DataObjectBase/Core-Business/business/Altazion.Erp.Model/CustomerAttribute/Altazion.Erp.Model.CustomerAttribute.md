## CustomerAttribute

Cette classe représente une valeur d'attribut client, correspondant à une ligne dans la table commerciale "commercial_clients_attributs".

Propriétés publiques :

- AttributeRecordGuid : Identifiant unique (GUID) de l'enregistrement d'attribut.
- AttributeDefinitionGuid : GUID définissant quel attribut est représenté.
- CustomerGuid : GUID du client concerné (nullable, peut être null si non applicable).
- NumberValue : Valeur numérique de l'attribut (nullable).
- TextValue : Valeur texte courte de l'attribut (nullable).
- LongTextValue : Valeur texte longue de l'attribut (nullable).
- EnumValueId : Identifiant numérique référencé d'une valeur énumérée (nullable).
- BoolValue : Valeur booléenne de l'attribut (nullable).
- DateValue : Valeur de type date (nullable).
- ProspectGuid : GUID du prospect associé (nullable).
- ListItemGuid : GUID d'un élément de liste associé (nullable).

Chaque propriété correspond à des colonnes spécifiques dans la base de données, permettant de stocker différents types de valeurs pour un attribut client.

### D�claration TypeScript
```typescript
interface CustomerAttribute {
  AttributeRecordGuid: string; // GUID of the attribute record
  AttributeDefinitionGuid: string; // GUID of the attribute definition
  CustomerGuid?: string | null; // GUID of the customer (optional)
  NumberValue?: number | null; // Numeric value (optional)
  TextValue?: string | null; // Short text value (optional)
  LongTextValue?: string | null; // Long text value (optional)
  EnumValueId?: number | null; // Enum value ID (optional)
  BoolValue?: boolean | null; // Boolean value (optional)
  DateValue?: string | null; // Date value (ISO string) (optional)
  ProspectGuid?: string | null; // GUID of an associated prospect (optional)
  ListItemGuid?: string | null; // GUID of an associated list item (optional)
}
```