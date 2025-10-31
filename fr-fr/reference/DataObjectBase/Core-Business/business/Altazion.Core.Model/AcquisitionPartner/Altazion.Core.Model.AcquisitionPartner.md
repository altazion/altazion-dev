## AcquisitionPartner

La classe AcquisitionPartner représente un partenaire d'acquisition. Elle comporte les propriétés publiques suivantes :

- Guid : Identifiant unique du partenaire d'acquisition.
- Name : Nom du partenaire d'acquisition.
- AquisitionCategoryGuid : Identifiant unique de la catégorie d'acquisition à laquelle le partenaire appartient.
- IdentificationString : Chaîne d'identification de la catégorie d'acquisition.

La validation inclut :
- Name est requis et ne doit pas dépasser 200 caractères.
- IdentificationString est optionnelle mais ne doit pas dépasser 250 caractères.

Fonctions principales :
- La méthode OnValidate valide les données conformément aux règles ci-dessus.
- La méthode FromDataRow initialise une instance à partir d'une ligne de données.
- La méthode GetKey retourne l'identifiant unique (Guid).
- La méthode ToString retourne le nom du partenaire.

### D�claration TypeScript
```typescript
interface AcquisitionPartner {
  Guid: string; // Unique identifier (GUID) of the acquisition partner
  Name: string; // Name of the acquisition partner
  AquisitionCategoryGuid: string; // Unique identifier (GUID) of acquisition category
  IdentificationString?: string | null; // Identification string of the acquisition category, optional
}
```