## SupplyRuleProcessor

The SupplyRuleProcessor class represents a supply rule detail with its processing class and its configuration.

Public properties:
- Id: Unique Guid identifier of the rule processor.
- SupplyRuleId: Unique Guid identifier of the parent supply rule.
- ClassName: String representing the fully qualified name of the class implementing the processing.
- Config: String containing the processor configuration in JSON or XML format.
- Rank: Integer representing the execution order rank of the processor within the processing chain.

Important methods:
- GetKey(): returns the unique key of the object, here the processor's Id.
- FromDataRow(DataRow dr): initializes the object's properties from a data row.

### TypeScript class
```typescript
interface SupplyRuleProcessor {
  Id: string; // Guid
  SupplyRuleId: string; // Guid
  ClassName: string | null;
  Config: string | null;
  Rank: number;
}
```