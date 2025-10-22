## StoreRegion

La classe StoreRegion représente une zone de magasins utilisée pour le découpage administratif ou géographique des magasins dans le système.

Propriétés publiques :
- Guid : Identifiant unique de la zone de magasins (type Guid).
- Label : Libellé ou nom de la zone de magasins (type string).
- Code : Code de la zone de magasins (type string).
- CountryIso3LettersCode : Code ISO à 3 lettres du pays auquel appartient la zone (type string).
- HasAffiliates : Indique si la zone contient des magasins affiliés (type bool).
- HasOtherBrands : Indique si la zone contient des magasins d'autres marques (type bool).
- StoreVisibilityThreshold : Seuil de quantité pour la visibilité des stocks dans le magasin (type decimal?, nullable).
- StoreAvailabilityThreshold : Seuil de quantité pour la disponibilité des stocks dans le magasin (type decimal?, nullable).
- CrossChannelVisibilityThreshold : Seuil de quantité pour la visibilité des stocks cross-canal dans d'autres magasins (type decimal?, nullable).
- CrossChannelAvailabilityThreshold : Seuil de quantité pour la disponibilité des stocks cross-canal dans d'autres magasins (type decimal?, nullable).

Cette classe hérite de DataObjectBase et est annotée avec l'attribut SqlDataConcept pour la gestion de la persistance en base.

Méthodes importantes :
- GetKey() : retourne l'identifiant unique (Guid) de la zone.
- FromDataRow(DataRow) : initialise les propriétés à partir d'une ligne de données.
- ToString() : retourne une représentation sous forme de chaîne du libellé ou du code de la zone.

### D�claration TypeScript
```typescript
interface StoreRegion {
  Guid: string; // Unique identifier
  Label: string | null; // Name or label of the store region
  Code: string | null; // Code of the store region
  CountryIso3LettersCode: string | null; // ISO 3-letter country code
  HasAffiliates: boolean; // Indicates presence of affiliated stores
  HasOtherBrands: boolean; // Indicates presence of other branded stores
  StoreVisibilityThreshold?: number | null; // Threshold for in-store stock visibility
  StoreAvailabilityThreshold?: number | null; // Threshold for in-store stock availability
  CrossChannelVisibilityThreshold?: number | null; // Threshold for cross-channel stock visibility
  CrossChannelAvailabilityThreshold?: number | null; // Threshold for cross-channel stock availability
}
```