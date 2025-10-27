## StoreChain

La classe StoreChain représente une enseigne, c'est-à-dire une chaîne de magasins regroupant plusieurs magasins sous une même bannière commerciale.

Propriétés publiques :
- Guid : Identifiant unique de l'enseigne (type Guid).
- Name : Nom de l'enseigne (type string).
- ManagerEmail : Adresse email du responsable de l'enseigne (type string).
- Url : URL du site web de l'enseigne (type string).

Méthodes importantes :
- GetKey() : retourne la clé unique de l'objet, ici l'identifiant Guid.
- FromDataRow(DataRow) : méthode protégée qui initialise les propriétés de l'objet à partir d'une ligne de données.
- ToString() : retourne une représentation textuelle de l'objet, ici le nom de l'enseigne.

### D�claration TypeScript
```typescript
interface StoreChain {
  Guid: string; // Unique identifier of the store chain
  Name: string | null; // Name of the store chain
  ManagerEmail: string | null; // Email address of the store chain manager
  Url: string | null; // Website URL of the store chain
}
```