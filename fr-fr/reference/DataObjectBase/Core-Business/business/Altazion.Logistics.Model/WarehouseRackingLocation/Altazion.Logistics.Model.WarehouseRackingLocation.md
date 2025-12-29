## WarehouseRackingLocation

La classe WarehouseRackingLocation représente un emplacement spécifique de rayonnage dans un template utilisé pour optimiser le picking en logistique. Elle contient les propriétés suivantes :
- LocationGuid : Identifiant unique de l'emplacement de rayonnage (de type Guid).
- TemplateGuid : Identifiant du template parent de rayonnages (de type Guid).
- Order : Un entier indiquant l'ordre de traitement du rayonnage dans le parcours de picking.
- Label : Libellé descriptif de l'emplacement (chaine de caractères, optionnel).
- Code : Code court identifiant l'emplacement (chaine de caractères, optionnel).
- GtinLocation : Code GTIN utilisé pour l'identification par scanner (chaine de caractères, optionnel).
- XmlClause : Clause XML définissant des critères de filtrage d'articles valides pour cet emplacement (chaine de caractères, optionnel).

### D�claration TypeScript
```typescript
interface WarehouseRackingLocation {
  LocationGuid: string; // GUID unique identifier of the racking location
  TemplateGuid: string; // GUID of the parent racking template
  Order: number; // Processing order in the picking route
  Label?: string | null; // Descriptive label (optional)
  Code?: string | null; // Short identifying code (optional)
  GtinLocation?: string | null; // GTIN code for scanning identification (optional)
  XmlClause?: string | null; // XML clause for article filtering criteria (optional)
}
```