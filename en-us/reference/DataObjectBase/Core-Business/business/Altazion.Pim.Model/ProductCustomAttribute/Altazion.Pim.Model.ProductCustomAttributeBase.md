## ProductCustomAttributeBase

This class represents a product custom attribute with its various possible values.

Public properties:
- AttributeGuid: Unique identifier (GUID) of the attribute.
- DecimalValue: Numeric value (nullable decimal) of the attribute.
- BooleanValue: Boolean value (nullable) of the attribute.
- TextValue: Text value (string) of the attribute. If no short text value is available, a long text value may be used.
- DateValue: Date value (nullable DateTimeOffset) of the attribute.

Key methods:
- GetKey(): returns the unique key of the object, here the AttributeGuid.
- FromDataRow(DataRow dr): initializes the object's properties from a data row, extracting the stored values.

The class is decorated with a SqlDataConcept attribute indicating it maps to the "catalog_articles_attributs" table in the "Catalog" database with the concept "ProductCustomAttribute".

### TypeScript class
```typescript
export interface ProductCustomAttributeBase {
  AttributeGuid: string; // GUID
  DecimalValue?: number | null;
  BooleanValue?: boolean | null;
  TextValue?: string | null;
  DateValue?: string | null; // ISO 8601 string or null
}
```