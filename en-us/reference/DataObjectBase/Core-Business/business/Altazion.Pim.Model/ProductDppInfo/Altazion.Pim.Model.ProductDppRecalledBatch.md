## ProductDppRecalledBatch

This class represents the recalled batch declaration within the context of a DPP snapshot.

Public properties:
- BatchNumber: Number of the recalled batch.
- RecallDate: Official date of the recall.
- Reason: Reason for the recall.
- RegulatoryReference: Regulatory reference linked to the recall (e.g., RAPEX decision number).

### TypeScript class
```typescript
interface ProductDppRecalledBatch {
  BatchNumber: string;
  RecallDate: string; // DateOnly represented as ISO date string
  Reason: string;
  RegulatoryReference: string;
}
```