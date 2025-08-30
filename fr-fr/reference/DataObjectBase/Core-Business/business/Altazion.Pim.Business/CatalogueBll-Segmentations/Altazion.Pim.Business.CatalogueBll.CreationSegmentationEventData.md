## CreationSegmentationEventData

Classe représentant les données de l'évènement créé lors de la création d'une segmentation dans le catalogue.

Propriétés publiques :
- SegPk : int - L'identifiant unique de la segmentation créée.
- SegLibelle : string - Le libellé ou nom de la segmentation.
- SegType : string - Le type de segmentation (une chaîne, on ne connaît pas les valeurs possibles exactes ici).
- SegParentSegPk : int? - L'identifiant de la segmentation parente, si elle existe, sinon null.

Cette classe est utilisée pour notifier la création d'un segment dans le système via un événement nommé "CreationSeg".

### D�claration TypeScript
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