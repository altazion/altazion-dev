## ProductCustomAttributeWithDefinition

La classe ProductCustomAttributeWithDefinition représente un attribut personnalisé de produit en étendant ProductCustomAttributeBase, avec en plus la définition de l'attribut.

Propriétés publiques :
- AttributeGuid : identifiant unique de l'attribut (hérité).
- DecimalValue : valeur numérique associée à l'attribut (hérité).
- BooleanValue : valeur booléenne associée à l'attribut (hérité).
- TextValue : valeur textuelle associée à l'attribut (hérité).
- DateValue : valeur de date associée à l'attribut (hérité).
- AttributeLabel : libellé de l'attribut, qui sert à décrire l'attribut de façon lisible.
- IsPublic : booléen indiquant si l'attribut est public ou non.

### D�claration TypeScript
```typescript
interface ProductCustomAttributeWithDefinition {
  attributeGuid: string; // GUID string
  decimalValue?: number | null;
  booleanValue?: boolean | null;
  textValue?: string | null;
  dateValue?: string | null; // ISO date string or null
  attributeLabel?: string | null;
  isPublic: boolean;
}
```