## AcquisitionPartner

Représente un partenaire d'acquisition.

Propriétés publiques :
- Guid : Identifiant unique du partenaire d'acquisition.
- Name : Nom du partenaire d'acquisition.
- AquisitionCategoryGuid : Identifiant unique de la catégorie d'acquisition associée.
- IdentificationString : Chaîne d'identification de la catégorie d'acquisition.

Cette classe permet d'instancier un objet représentant un partenaire d'acquisition avec son identifiant, son nom, et sa catégorie d'acquisition (via un GUID et une chaîne d'identification).

### D�claration TypeScript
```json
interface AcquisitionPartner {
  Guid: string; // Unique identifier (GUID) of the acquisition partner
  Name: string | null; // Name of the acquisition partner
  AquisitionCategoryGuid: string; // Unique identifier (GUID) of the acquisition category
  IdentificationString: string | null; // Identification string of the acquisition category
}
```