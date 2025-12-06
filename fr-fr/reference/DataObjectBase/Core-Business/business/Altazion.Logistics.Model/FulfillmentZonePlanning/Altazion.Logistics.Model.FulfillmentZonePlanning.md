## FulfillmentZonePlanning

La classe FulfillmentZonePlanning représente une entrée de planning pour une zone de préparation, définissant le pourcentage de capacité de préparation disponible pour une date donnée.

- Id : Identifiant unique de l'entrée de planning (Guid).
- Date : Date du planning (DateTime).
- FulfillmentZoneId : Identifiant de la zone de préparation concernée (Guid).
- OperatingPercentage : Pourcentage de la force de préparation disponible (short). 100% signifie capacité normale, 0% signifie fermé, et un pourcentage supérieur à 100% indique une capacité renforcée.
- IsClosed : Propriété calculée indiquant si la zone est fermée ce jour (bool, true si OperatingPercentage = 0).
- IsReducedCapacity : Propriété calculée indiquant si la zone fonctionne à capacité réduite (bool, true si 0 < OperatingPercentage < 100).

### D�claration TypeScript
```typescript
interface FulfillmentZonePlanning {
  id: string; // Unique identifier of the planning entry (Guid)
  date: string; // Date of the planning (ISO string)
  fulfillmentZoneId: string; // Identifier of the fulfillment zone (Guid)
  operatingPercentage: number; // Percentage of preparation capacity (0-100+)
  isClosed: boolean; // True if operatingPercentage == 0
  isReducedCapacity: boolean; // True if 0 < operatingPercentage < 100
}
```