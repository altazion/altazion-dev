## ParcelType

La classe ParcelType représente un type de colis ou carton disponible pour l'expédition avec ses dimensions et contraintes spécifiques.

Propriétés publiques :
- Id (Guid) : Identifiant unique du type de colis.
- Label (string) : Libellé du type de colis.
- WidthInCm (decimal) : Largeur du carton en centimètres.
- LengthInCm (decimal) : Longueur du carton en centimètres.
- HeightInCm (decimal) : Hauteur du carton en centimètres.
- MaxWeightInGrams (decimal) : Poids maximum du contenu en grammes.
- MaxVolumeInCm3 (decimal) : Volume maximum du contenu en centimètres cubes.
- PaddingPercentage (decimal) : Pourcentage de bourrage, c'est-à-dire le volume perdu pour le calage ou protection.
- BoxWeightInGrams (decimal) : Poids du carton vide en grammes.
- MaxContentValue (decimal?, optionnel) : Valeur maximale du contenu autorisée, utilisée principalement pour l'assurance.
- FulfillmentZoneId (Guid?, optionnel) : Identifiant de la zone de préparation associée au colis.
- UsableVolumeInCm3 (decimal, lecture seule) : Volume utile disponible en cm³, tenant compte du bourrage (calculé automatiquement).

### D�claration TypeScript
```typescript
interface ParcelType {
  Id: string; // Unique identifier (GUID)
  Label: string; // Label of the parcel type
  WidthInCm: number; // Width in centimeters
  LengthInCm: number; // Length in centimeters
  HeightInCm: number; // Height in centimeters
  MaxWeightInGrams: number; // Maximum weight in grams
  MaxVolumeInCm3: number; // Maximum volume in cubic centimeters
  PaddingPercentage: number; // Padding percentage (0-100)
  BoxWeightInGrams: number; // Weight of empty box in grams
  MaxContentValue?: number | null; // Optional maximum content value
  FulfillmentZoneId?: string | null; // Optional GUID of fulfillment zone
  UsableVolumeInCm3: number; // Computed usable volume in cubic centimeters
}
```