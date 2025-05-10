## BlackListRiskAssessment

Abstract class representing a risk assessment related to a blacklist. It has a public property Guid of type Guid which uniquely identifies an instance of the risk assessment. This class inherits from DataObjectBase and includes a protected method FromDataRow to initialize the object from a data row, as well as a GetKey method that returns the primary key of the object, here the Guid.

### TypeScript class
```typescript
interface BlackListRiskAssessment {
  Guid: string; // Unique identifier (GUID) of the risk assessment
}
```