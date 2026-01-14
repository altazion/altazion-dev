## InvoicableElement

The InvoicableElement class represents a billable item in the ERP system.

Public properties:
- Guid: Unique identifier of the invoicable element.
- ProductGuid: Unique identifier of the associated product.
- Label: Descriptive label of the element.
- Quantity: Quantity of the invoicable element.
- Price: Price including tax (TTC) of the element.
- PriceWOTax: Price excluding tax (HT) of the element.
- CustomerGuid: Unique identifier of the customer linked to this element.
- InvoicingDate: The invoicing date, optional.
- CustomerReference: Customer-specific reference for this element.

The GetKey() method returns the primary key of the object, which is Guid. The FromDataRow method fills the properties from a data row by extracting the values from the corresponding columns.


### TypeScript class
```typescript
interface InvoicableElement {
  Guid: string; // Unique identifier of the invoicable element
  ProductGuid: string; // Unique identifier of the associated product
  Label: string | null; // Descriptive label
  Quantity: number; // Quantity of the element
  Price: number; // Price including tax (TTC)
  PriceWOTax: number; // Price excluding tax (HT)
  CustomerGuid: string; // Unique identifier of the customer
  InvoicingDate?: string | null; // Optional invoicing date in ISO format
  CustomerReference: string | null; // Customer reference
}
```