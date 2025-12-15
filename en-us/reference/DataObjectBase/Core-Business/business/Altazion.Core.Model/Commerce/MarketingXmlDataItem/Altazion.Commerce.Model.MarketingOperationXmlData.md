## MarketingOperationXmlData

The MarketingOperationXmlData class represents XML data associated with a commercial operation step.

Public properties:
- Guid: Unique identifier of the record (Guid type).
- OperationStepGuid: Identifier of the associated operation step (Guid type).
- XmlData: Stored XML data (string type).

This class allows loading its properties from a data row and validates the required identifiers (Guid and OperationStepGuid).

### TypeScript class
```typescript
interface MarketingOperationXmlData {
  Guid: string; // Unique identifier (UUID/GUID) of the record
  OperationStepGuid: string; // Identifier (UUID/GUID) of the associated operation step
  XmlData: string | null; // Stored XML data
}
```