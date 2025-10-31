## CriteriaValue

Represents a criteria value in the product catalog.

Public properties:
- Guid: Gets or sets the unique identifier of the criteria value.
- CriteriaGuid: Gets or sets the unique identifier of the parent criteria.
- Order: Gets or sets the display order of the criteria value.
- Label: Gets or sets the label of the criteria value.
- MinDecimalValue: Gets or sets the minimum decimal value for range-type criteria (optional).
- MaxDecimalValue: Gets or sets the maximum decimal value for range-type criteria (optional).
- TextValue: Gets or sets the textual value of the criteria (optional).
- BooleanValue: Gets or sets the boolean value of the criteria (optional).
- CustomUrlPart: Gets or sets the custom part of the URL for this criteria value (optional).
- AttributeValue: Gets or sets the associated attribute value (optional).
- ImageUrl: Gets or sets the URL of the image associated with this criteria value (optional).


### TypeScript class
```typescript
interface CriteriaValue {
  Guid: string; // Unique identifier of the criteria value
  CriteriaGuid: string; // Unique identifier of the parent criteria
  Order: number; // Display order
  Label: string; // Label of the criteria value
  MinDecimalValue?: number | null; // Minimum decimal value for range criteria
  MaxDecimalValue?: number | null; // Maximum decimal value for range criteria
  TextValue?: string | null; // Textual value
  BooleanValue?: boolean | null; // Boolean value
  CustomUrlPart?: string | null; // Custom URL part
  AttributeValue?: string | null; // Associated attribute value
  ImageUrl?: string | null; // URL of associated image
}
```