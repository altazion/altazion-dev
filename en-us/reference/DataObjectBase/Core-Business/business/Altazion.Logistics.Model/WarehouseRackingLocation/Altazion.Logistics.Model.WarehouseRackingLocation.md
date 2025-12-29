## WarehouseRackingLocation

The WarehouseRackingLocation class represents a specific racking location within a template for optimizing picking processes in logistics. It has the following properties:
- LocationGuid: Unique identifier of the racking location (Guid type).
- TemplateGuid: Identifier of the parent racking template (Guid type).
- Order: An integer representing the processing order of the racking location in the picking route.
- Label: Descriptive label of the location (string, optional).
- Code: Short code identifying the location (string, optional).
- GtinLocation: GTIN code for location identification by scanner (string, optional).
- XmlClause: XML clause defining filtering criteria for articles assigned to this location (string, optional).

### TypeScript class
```typescript
interface WarehouseRackingLocation {
  LocationGuid: string; // GUID unique identifier of the racking location
  TemplateGuid: string; // GUID of the parent racking template
  Order: number; // Processing order in the picking route
  Label?: string | null; // Descriptive label (optional)
  Code?: string | null; // Short identifying code (optional)
  GtinLocation?: string | null; // GTIN code for scanning identification (optional)
  XmlClause?: string | null; // XML clause for article filtering criteria (optional)
}
```