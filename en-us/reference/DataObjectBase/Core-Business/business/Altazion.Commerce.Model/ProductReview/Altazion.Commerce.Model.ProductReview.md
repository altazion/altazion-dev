## ProductReview

The ProductReview class represents a product review in the Altazion system. It inherits from DataObjectBase.

Properties:
- Guid: Unique identifier of the review.
- ProductGuid: Unique identifier of the product that the review is about.
- ReviewerName: Name of the person who wrote the review.
- Message: Text content of the review.
- CustomerGuid: Optional unique identifier of the customer who wrote the review (nullable).
- Email: Email address of the reviewer.
- HasBeenValidated: Boolean flag indicating if the review has been validated.
- Date: Date and time when the review was recorded.
- Note: Numeric (decimal) rating given by the reviewer to the product.

Notable methods:
- ToString() returns a simple textual representation of the review using the email.

This class mainly serves as a data container with an internal method to populate properties from a data row, mapping database columns to class properties.

### TypeScript class
```typescript
interface ProductReview {
  Guid: string; // Unique identifier (GUID)
  ProductGuid: string; // Product unique identifier (GUID)
  ReviewerName: string; // Name of the reviewer
  Message: string; // Review message content
  CustomerGuid?: string | null; // Optional customer unique identifier
  Email: string; // Email of the reviewer
  HasBeenValidated: boolean; // Review validation status
  Date: string; // Date in ISO 8601 format
  Note: number; // Numeric rating
}
```