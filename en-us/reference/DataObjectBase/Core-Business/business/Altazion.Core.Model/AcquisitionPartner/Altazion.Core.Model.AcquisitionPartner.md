## AcquisitionPartner

Represents an acquisition partner.

Public properties:
- Guid: Unique identifier for the acquisition partner.
- Name: Name of the acquisition partner.
- AquisitionCategoryGuid: Unique identifier for the acquisition category associated.
- IdentificationString: Identification string of the acquisition category.

This class allows to instantiate an object representing an acquisition partner with its unique ID, name, and acquisition category (using a GUID and an identification string).

### TypeScript class
```json
interface AcquisitionPartner {
  Guid: string; // Unique identifier (GUID) of the acquisition partner
  Name: string | null; // Name of the acquisition partner
  AquisitionCategoryGuid: string; // Unique identifier (GUID) of the acquisition category
  IdentificationString: string | null; // Identification string of the acquisition category
}
```