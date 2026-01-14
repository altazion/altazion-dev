## FulfillmentZonePlanning

La classe FulfillmentZonePlanning représente une entrée de planning pour une zone de préparation en logistique. Elle définit le pourcentage de capacité de préparation disponible pour une date donnée.

Propriétés publiques :
- Id (Guid) : Identifiant unique de l'entrée de planning.
- Date (DateTimeOffset) : Date correspondant à ce planning.
- FulfillmentZoneId (Guid) : Identifiant unique de la zone de préparation concernée.
- OperatingPercentage (short) : Pourcentage de la force de préparation disponible, avec 100% comme capacité normale, 0% indiquant une fermeture, et plus de 100% pour une capacité renforcée.
- IsClosed (bool) : Indique si la zone est fermée ce jour (true si OperatingPercentage == 0).
- IsReducedCapacity (bool) : Indique si la zone fonctionne à capacité réduite (true si OperatingPercentage > 0 et < 100).

Cette classe permet donc de modéliser la disponibilité et capacité opérationnelle d'une zone logistique pour une date précise, utile pour la planification des ressources.

### D�claration TypeScript
```typescript
interface FulfillmentZonePlanning {
  /** Identifiant unique de l'entrée de planning */
  Id: string; // GUID
  /** Date du planning */
  Date: string; // DateTimeOffset as ISO string
  /** Identifiant de la zone de préparation concernée */
  FulfillmentZoneId: string; // GUID
  /** Pourcentage de la force de préparation disponible (0-100+, 100 = normal) */
  OperatingPercentage: number; // short
  /** Indique si la zone est fermée ce jour (OperatingPercentage = 0) */
  IsClosed: boolean;
  /** Indique si la zone fonctionne à capacité réduite (0 < OperatingPercentage < 100) */
  IsReducedCapacity: boolean;
}
```