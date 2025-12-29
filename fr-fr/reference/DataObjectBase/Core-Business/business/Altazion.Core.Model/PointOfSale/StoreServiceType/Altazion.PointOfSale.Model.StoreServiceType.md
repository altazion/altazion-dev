## StoreServiceType

La classe StoreServiceType représente un type de service en magasin.

Propriétés publiques :
- Code : chaîne de caractères qui obtient ou définit le code unique du type de service.
- Label : chaîne de caractères qui obtient ou définit le libellé (nom) du type de service.

### D�claration TypeScript
```typescript
interface StoreServiceType {
  /** Gets or sets the unique code of the service type. */
  Code: string;

  /** Gets or sets the label (name) of the service type. */
  Label: string;
}
```