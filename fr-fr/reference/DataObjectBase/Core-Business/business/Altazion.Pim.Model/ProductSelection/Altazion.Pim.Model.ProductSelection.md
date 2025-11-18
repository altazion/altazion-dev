## ProductSelection

Cette classe représente une sélection de produits (souvent appelée "vitrine") avec toutes ses informations associées dans le contexte Altazion PIM.

Constantes :
- DefaultType : Type de sélection par défaut (valeur "N").
- PromotionType : Type de sélection promotionnelle (valeur "A").
- CustomType : Type de sélection complémentaire ou spécifique à une fonctionnalité (valeur "C").

Propriétés publiques :
- Guid : Identifiant unique de la sélection sous forme de GUID.
- Code : Code unique de la sélection, obligatoire, max 50 caractères.
- Label : Libellé de la sélection, obligatoire, max 255 caractères.
- Type : Type de la sélection (ex. 'N' pour normale, 'T' pour tendance), obligatoire, max 1 caractère.
- SiteId : Identifiant du site associé, optionnel.
- IsRuleBased : Indique si la sélection est automatique (basée sur des règles).
- IsActive : Indique si la sélection est active.
- Rules : Chaînes XML ou SQL représentant les règles d'automatisation, requises si IsRuleBased est true.
- AutoUpdateDelayMinutes : Délai entre mises à jour automatiques, en minutes, doit être positif si renseigné.
- LastAutoUpdateTimestamp : Date et heure de la dernière mise à jour automatique.
- CustomUrlPart : Partie personnalisée de l'URL associée à la sélection, optionnel, max 255 caractères.
- Group : Groupe auquel appartient la sélection, optionnel, max 100 caractères.
- CreationDate : Date de création de la sélection.
- CampaignGuid : Identifiant d'une campagne commerciale associée, optionnel.
- HtmlHeader : Entête HTML personnalisé associé à la sélection, optionnel.
- SegmentationId : Identifiant de la segmentation associée, optionnel.

Cette classe inclut une validation des données assurant que les règles métier sont respectées (notamment les obligations et longueur maximale des champs, cohérence des règles).

Elle permet aussi d'initialiser ses propriétés à partir d'une ligne de données (DataRow) et fournit une clé identifiable unique via le GUID.

Enfin, la méthode ToString retourne le libellé ou le code ou le GUID sous forme de chaîne.

### D�claration TypeScript
```typescript
interface ProductSelection {
  Guid: string; // GUID unique identifier
  Code: string; // Unique code of the selection
  Label: string; // Label of the selection
  Type: string; // Selection type, e.g. 'N', 'T'
  SiteId?: number; // Optional Site identifier
  IsRuleBased: boolean; // Whether the selection is automatic/rule-based
  IsActive: boolean; // Whether the selection is active
  Rules?: string; // Automation rules as XML or SQL clauses
  AutoUpdateDelayMinutes?: number; // Delay in minutes for automatic updates
  LastAutoUpdateTimestamp?: string; // ISO datetime string of last update
  CustomUrlPart?: string; // Custom URL segment
  Group?: string; // Selection group
  CreationDate: string; // ISO datetime string of creation date
  CampaignGuid?: string; // Optional associated campaign GUID
  HtmlHeader?: string; // Custom HTML header
  SegmentationId?: number; // Optional segmentation identifier
}

// Constants (exported as enum for convenience)
enum ProductSelectionType {
  DefaultType = "N",
  PromotionType = "A",
  CustomType = "C"
}
```