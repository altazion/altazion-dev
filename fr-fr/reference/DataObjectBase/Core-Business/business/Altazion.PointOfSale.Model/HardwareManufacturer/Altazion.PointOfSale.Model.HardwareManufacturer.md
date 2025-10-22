## HardwareManufacturer

La classe HardwareManufacturer représente un constructeur ou fabricant de matériel (devices et périphériques) dans le contexte de la solution PointOfSale.

Propriétés publiques :
- Guid : Identifiant unique du constructeur.
- Label : Libellé du constructeur, par exemple Zebra, Apple, Samsung, Honeywell.

Méthodes importantes :
- GetKey() : Obtient la clé unique de l'objet, ici le Guid.
- ToString() : Retourne une représentation textuelle du constructeur, ici son libellé.

Cette classe est mappée à une table SQL nommée pos_hardware_constructeurs dans la base PointOfSale.

### D�claration TypeScript
```typescript
interface HardwareManufacturer {
  /** Unique identifier of the manufacturer */
  Guid: string; // Guid represented as string
  /** Name label of the manufacturer, e.g., Zebra, Apple, Samsung, Honeywell */
  Label: string | null;
}
```