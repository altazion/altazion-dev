## AcquisitionPartner

The AcquisitionPartner class represents an acquisition partner. It has the following public properties:

- Guid: Unique identifier for the acquisition partner.
- Name: Name of the acquisition partner.
- AquisitionCategoryGuid: Unique identifier of the acquisition category to which the partner belongs.
- IdentificationString: Identification string of the acquisition category.

Validation rules include:
- Name is required and must not exceed 200 characters.
- IdentificationString is optional but must not exceed 250 characters.

Main functions:
- The OnValidate method validates the data according to the above rules.
- The FromDataRow method initializes an instance from a data row.
- The GetKey method returns the unique identifier (Guid).
- The ToString method returns the partner's name.

### TypeScript class
```typescript
interface AcquisitionPartner {
  Guid: string; // Unique identifier (GUID) of the acquisition partner
  Name: string; // Name of the acquisition partner
  AquisitionCategoryGuid: string; // Unique identifier (GUID) of acquisition category
  IdentificationString?: string | null; // Identification string of the acquisition category, optional
}
```