## CustomerAttribute

La classe CustomerAttribute représente une valeur d'attribut client dans la table commercial_clients_attributs.

Propriétés publiques :
- AttributeRecordGuid (Guid) : Identifiant unique (GUID) de l'enregistrement d'attribut.
- AttributeDefinitionGuid (Guid) : GUID de la définition de l'attribut.
- CustomerGuid (Guid?) : GUID du client concerné. Peut être null si l'attribut n'est pas lié à un client spécifique.
- NumberValue (decimal?) : Valeur numérique associée à l'attribut, nullable.
- TextValue (string) : Valeur texte courte de l'attribut, nullable.
- LongTextValue (string) : Valeur texte longue de l'attribut, nullable.
- EnumValueId (int?) : Valeur référencée sous forme d'identifiant énuméré, nullable.
- BoolValue (bool?) : Valeur booléenne de l'attribut, nullable.
- DateValue (DateTimeOffset?) : Valeur date de l'attribut, nullable.
- ProspectGuid (Guid?) : GUID du prospect associé, nullable.
- ListItemGuid (Guid?) : GUID de l'élément de liste associé, nullable.

Cette classe sert à stocker des valeurs diverses (numériques, textes, booléennes, dates, références) liées à des clients ou prospects, pour un attribut donné.

### D�claration TypeScript
```typescript
interface CustomerAttribute {
  AttributeRecordGuid: string; // GUID
  AttributeDefinitionGuid: string; // GUID
  CustomerGuid?: string | null; // GUID nullable
  NumberValue?: number | null;
  TextValue?: string | null;
  LongTextValue?: string | null;
  EnumValueId?: number | null;
  BoolValue?: boolean | null;
  DateValue?: string | null; // ISO date string nullable
  ProspectGuid?: string | null; // GUID nullable
  ListItemGuid?: string | null; // GUID nullable
}
```