## ProductDppConformityDeclaration

Class representing a regulatory conformity declaration linked to a DPP snapshot (Digital Product Passport).

Properties:
- Standard: The concerned norm or directive (examples: "CE", "RoHS", "WEEE").
- ReferenceNumber: Reference number of the conformity declaration.
- IssuedDate: Issue date of the declaration (nullable DateOnly).
- DocumentUrl: Optional URL to the declaration document.
- NotifiedBodyId: Identifier of the notified body that issued the declaration, in European format NB XXXX (example: "NB 0080" for TÜV Rheinland).
- ExpiryDate: Expiry date of the conformity declaration (nullable, null means no expiry date).

### TypeScript class
```typescript
interface ProductDppConformityDeclaration {
  standard: string;
  referenceNumber: string;
  issuedDate?: string; // ISO date string or undefined
  documentUrl?: string;
  notifiedBodyId?: string;
  expiryDate?: string; // ISO date string or undefined
}
```