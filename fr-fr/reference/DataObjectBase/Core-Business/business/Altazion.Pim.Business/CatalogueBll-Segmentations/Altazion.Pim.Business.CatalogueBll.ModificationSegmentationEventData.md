## ModificationSegmentationEventData

Cette classe représente l'objet de données lié à l'évènement de modification d'une segmentation dans le catalogue.

Propriétés publiques :
- SegPk : int, identifiant de la segmentation modifiée.
- SegLibelle : string, libellé (nom) de la segmentation.
- SegType : string, type de la segmentation (un caractère).
- SegParentSegPk : int?, identifiant de la segmentation parente, pouvant être null si la segmentation n'a pas de parent.

### D�claration TypeScript
```typescript
interface ModificationSegmentationEventData {
    SegPk: number;
    SegLibelle: string;
    SegType: string;
    SegParentSegPk?: number | null;
}
```