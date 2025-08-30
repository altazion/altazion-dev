## SuppressionSegmentationEventData

Classe de données représentant les informations de l'évènement déclenché lors de la suppression d'une segmentation dans le catalogue.

Propriétés publiques :
- SegPk : int - L'identifiant unique de la segmentation supprimée.
- SegLibelle : string - Le libellé (nom) de la segmentation supprimée.
- SegType : string - Le type de la segmentation supprimée.
- SegParentSegPk : int? - L'identifiant de la segmentation parente, peut être null si aucune.
- SegPkRemplacement : int? - L'identifiant de la segmentation de remplacement utilisée après suppression, peut être null.

### D�claration TypeScript
```typescript
interface SuppressionSegmentationEventData {
  SegPk: number;
  SegLibelle: string;
  SegType: string;
  SegParentSegPk?: number | null;
  SegPkRemplacement?: number | null;
}
```