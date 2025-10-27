## HardwareManufacturer

La classe HardwareManufacturer représente un constructeur ou fabricant de matériel (appareils et périphériques) utilisé dans le système de point de vente.

Propriétés publiques :
- Guid : Identifiant unique (de type Guid) du constructeur.
- Label : Libellé ou nom du constructeur (exemples : Zebra, Apple, Samsung, Honeywell).

Méthodes utiles :
- GetKey() : retourne la clé unique de l'objet, ici son Guid.
- ToString() : retourne une représentation textuelle du constructeur, son Label.

Cette classe est marquée avec l'attribut SqlDataConcept pointant vers une table "pos_hardware_constructeurs" dans la base "PointOfSale".

### D�claration TypeScript
```typescript
interface HardwareManufacturer {
  /**
   * Unique identifier of the manufacturer.
   */
  Guid: string; // Guid represented as string

  /**
   * Label or name of the manufacturer (e.g., Zebra, Apple, Samsung).
   */
  Label: string | null;
}
```