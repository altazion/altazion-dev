## CreationSegmentationEventData

Class representing the event data triggered when a segmentation is created in the catalog.

Public properties:
- SegPk : int - The unique identifier of the created segmentation.
- SegLibelle : string - The label or name of the segmentation.
- SegType : string - The type of segmentation (a string, exact allowed values unspecified).
- SegParentSegPk : int? - The identifier of the parent segmentation if any, otherwise null.

This class is used to notify the creation of a segment in the system via an event named "CreationSeg".

### TypeScript class
```typescript
interface CreationSegmentationEventData {
  /** The unique identifier of the segmentation. */
  SegPk: number;
  /** The label or name of the segmentation. */
  SegLibelle: string;
  /** The type of the segmentation. */
  SegType: string;
  /** The identifier of the parent segmentation, null if none. */
  SegParentSegPk?: number | null;
}
```