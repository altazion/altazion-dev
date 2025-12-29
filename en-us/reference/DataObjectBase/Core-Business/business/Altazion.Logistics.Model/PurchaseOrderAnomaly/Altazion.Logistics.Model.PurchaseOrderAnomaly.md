## PurchaseOrderAnomaly

This class represents an anomaly detected on a purchase order within the logistics module. An anomaly can be a blocking error, a warning, or a quality control issue.

Public properties:
- Id: Unique identifier of the anomaly (Guid).
- PurchaseOrderGuid: Identifier of the purchase order concerned (Guid).
- IsError: Indicates if the anomaly is a blocking error (true) or just a warning (false).
- Rail: Workflow step or rail where the anomaly was detected; optional (nullable string).
- Code: Short code identifying the type of anomaly (string, required, max length 10).
- Description: Detailed description of the anomaly (nullable string, max length 250).
- IsProcessed: Indicates if the anomaly has been treated/resolved (nullable bool).
- Score: Criticality score of the anomaly; higher value means more critical (int, cannot be negative).

### TypeScript class
```typescript
interface PurchaseOrderAnomaly {
  Id: string; // GUID unique identifier of the anomaly
  PurchaseOrderGuid: string; // GUID of the related purchase order
  IsError: boolean; // True if this is a blocking error, false if warning
  Rail?: string | null; // Optional workflow step or rail where anomaly was detected
  Code: string; // Short code identifying type of anomaly, max length 10
  Description?: string | null; // Optional detailed description, max 250 chars
  IsProcessed?: boolean | null; // Whether anomaly has been processed/resolved
  Score: number; // Criticality score, non-negative integer
}
```