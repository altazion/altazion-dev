## ProductCustomAttribute

Class representing a custom attribute of a product linked to the product's identifier.

Public properties:

- ProductId: Unique identifier of the product associated with the attribute. It's a long integer.
- AttributeGuid: Unique identifier of the attribute, of type Guid.
- DecimalValue: Optional numeric value of the attribute.
- BooleanValue: Optional boolean value of the attribute.
- TextValue: Optional textual value of the attribute, validated with a maximum length of 250 characters.
- DateValue: Optional date value of the attribute.

The class validates data upon saving: ProductId must be greater than 0, AttributeGuid must not be empty, TextValue must not exceed 250 characters. Other numeric, boolean, or date values are optional without specific constraints.


### TypeScript class
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