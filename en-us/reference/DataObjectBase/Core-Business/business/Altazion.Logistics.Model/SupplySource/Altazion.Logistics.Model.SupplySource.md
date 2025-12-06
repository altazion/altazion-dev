## SupplySource

The SupplySource class represents a supply source that defines how stocks are consolidated for availability. It contains several public properties describing the details of the source:
- Id: Unique identifier of the supply source (Guid type).
- Icon: Icon associated with the source (string type).
- Label: Label of the supply source (string type).
- IsArchived: Indicates whether the source is archived (bool type).
- OrderType: Order type associated with this source (string type).
- SourceTypes: Supported source types, can be a comma-separated list or JSON (string type).
- ModuleUrl: URL of the associated external module (string type).
- ModuleConfig: Module configuration in JSON format (string type).
- ModuleOmsCredentials: Credentials for OMS access of the module (string type).
- ModuleCommerceCredentials: Credentials for Commerce access of the module (string type).

This class inherits from DataObjectBase and overrides the GetKey() method to return the unique key which is the Id of the source. It also has a FromDataRow method to initialize its properties from a data row (DataRow).

### TypeScript class
```typescript
interface SupplySource {
  Id: string; // Guid unique identifier
  Icon?: string | null;
  Label?: string | null;
  IsArchived: boolean;
  OrderType?: string | null;
  SourceTypes?: string | null;
  ModuleUrl?: string | null;
  ModuleConfig?: string | null;
  ModuleOmsCredentials?: string | null;
  ModuleCommerceCredentials?: string | null;
}
```