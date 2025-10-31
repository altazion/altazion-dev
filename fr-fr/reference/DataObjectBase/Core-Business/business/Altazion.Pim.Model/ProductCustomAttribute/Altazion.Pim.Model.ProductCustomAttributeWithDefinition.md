## ProductCustomAttributeWithDefinition

La classe ProductCustomAttributeWithDefinition représente un attribut personnalisé de produit avec sa définition.

Propriétés publiques :

- AttributeGuid : identifiant unique de l'attribut (hérité de ProductCustomAttributeBase).
- DecimalValue : valeur numérique optionnelle de l'attribut (hérité).
- BooleanValue : valeur booléenne optionnelle de l'attribut (hérité).
- TextValue : valeur textuelle optionnelle de l'attribut (hérité).
- DateValue : valeur de type date optionnelle de l'attribut (hérité).
- AttributeLabel : libellé (nom descriptif) de l'attribut.
- IsPublic : booléen indiquant si l'attribut est public ou non.

### D�claration TypeScript
```typescript
interface ProductCustomAttributeWithDefinition {
  AttributeGuid: string; // Guid as string
  DecimalValue?: number | null;
  BooleanValue?: boolean | null;
  TextValue?: string | null;
  DateValue?: string | null; // ISO 8601 string for DateTimeOffset
  AttributeLabel?: string | null;
  IsPublic: boolean;
}
```