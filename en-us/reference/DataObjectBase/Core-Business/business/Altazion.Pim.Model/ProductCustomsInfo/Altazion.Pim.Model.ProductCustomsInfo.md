## ProductCustomsInfo

The ProductCustomsInfo class represents customs information related to a product for international export. It includes the codes and data required for customs declarations.

Public properties:

- ProductId : Guid. The unique identifier of the concerned product (primary key).
- DeclarationCodes : string. Customs declaration codes, separated by commas if there are multiple.
- NomenclatureCode : string. Customs nomenclature code (HS/SH code - Harmonized System).
- PucCode : string. PUC (Procurement Unit Code).
- PrimaryCountryCode : string. ISO 3-letter code of the primary country of origin.
- SecondaryCountryCodes : string. ISO 3-letter codes of secondary countries of origin, separated by commas.
- IsSubjectToDes : bool. Indicates if the product is subject to DES (Declaration of Exchange of Services).
- NomenclatureDocumentId : Guid? (nullable). Optional identifier of the associated nomenclature document.

The class validates the length of codes and requires the ProductId to be set.

### TypeScript class
```typescript
interface ProductCustomsInfo {
  ProductId: string; // GUID
  DeclarationCodes?: string;
  NomenclatureCode?: string;
  PucCode?: string;
  PrimaryCountryCode?: string;
  SecondaryCountryCodes?: string;
  IsSubjectToDes: boolean;
  NomenclatureDocumentId?: string | null; // Nullable GUID
}
```