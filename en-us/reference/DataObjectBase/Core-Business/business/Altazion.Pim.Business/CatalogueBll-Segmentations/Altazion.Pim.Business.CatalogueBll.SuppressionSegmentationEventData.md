## SuppressionSegmentationEventData

Data class representing the information of the event triggered when a segmentation is deleted in the catalog.

Public properties:
- SegPk: int - The unique identifier of the deleted segmentation.
- SegLibelle: string - The label (name) of the deleted segmentation.
- SegType: string - The type of the deleted segmentation.
- SegParentSegPk: int? - The identifier of the parent segmentation, nullable if none.
- SegPkRemplacement: int? - The identifier of the replacement segmentation used after deletion, nullable.

### TypeScript class
```typescript
interface SuppressionSegmentationEventData {
  SegPk: number;
  SegLibelle: string;
  SegType: string;
  SegParentSegPk?: number | null;
  SegPkRemplacement?: number | null;
}
```