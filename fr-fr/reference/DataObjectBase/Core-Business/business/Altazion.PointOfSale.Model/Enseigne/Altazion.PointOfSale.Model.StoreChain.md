## StoreChain

Représente une enseigne (chaîne de magasins) regroupant plusieurs magasins sous une même bannière commerciale.

Propriétés publiques :
- Guid : Identifiant unique de l'enseigne (type Guid).
- Name : Nom de l'enseigne (type string).
- ManagerEmail : Adresse email du responsable de l'enseigne (type string).
- Url : URL du site web de l'enseigne (type string).

Méthodes importantes :
- GetKey() : Retourne l'identifiant unique de l'enseigne.
- ToString() : Retourne le nom de l'enseigne ou la représentation par défaut.

### D�claration TypeScript
```typescript
export interface StoreChain {
  Guid: string; // Unique identifier (UUID as string)
  Name: string | null;
  ManagerEmail: string | null;
  Url: string | null;
}
```