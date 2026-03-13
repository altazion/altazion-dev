## ProductDppRepairDocument

Represents a technical repair or dismantling document related to a product, accessible at professional access level (DppAccessLevel.Professional). These documents allow accredited repairers to access schematics, repair guides, firmware, or other documents useful for product repair or dismantling.

Public properties:
- DocumentType: Type of the document, e.g., "schema_demontage" (dismantling schematic), "guide_reparation" (repair guide), "firmware" (embedded software), etc.
- Title: Title of the document.
- Url: URL pointing to the document, which can be an internal document management system or a public link, depending on access level.
- Language: ISO 639-1 language code representing the language of the document (e.g. "fr" for French, "en" for English).
- Version: Version of the document (e.g., "2.1"), useful for version tracking of the documents.

### TypeScript class
```typescript
interface ProductDppRepairDocument {
  DocumentType: string;
  Title: string;
  Url: string;
  Language: string;
  Version: string;
}
```