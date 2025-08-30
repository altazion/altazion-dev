## ModificationSegmentationEventData

This class represents the data object associated with the event of a segmentation modification in the catalog.

Public properties:
- SegPk: int, the identifier of the modified segmentation.
- SegLibelle: string, the label (name) of the segmentation.
- SegType: string, the type of the segmentation (single character).
- SegParentSegPk: int?, the identifier of the parent segmentation, nullable if the segmentation has no parent.

### TypeScript class
```typescript
interface ModificationSegmentationEventData {
    SegPk: number;
    SegLibelle: string;
    SegType: string;
    SegParentSegPk?: number | null;
}
```