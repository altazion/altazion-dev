## EUSpecifications

Classe représentant les spécifications spécifiques à l'Union Européenne pour un type de client.

Propriétés publiques :
- SalesAccountId : chaîne de caractères représentant l'identifiant du compte de vente associé.

Méthodes principales :
- GetKey() : retourne la clé unique de l'objet, ici l'identifiant du compte de vente.
- FromDataRow(DataRow dr) : initialise les propriétés de l'objet à partir d'une ligne de données, récupère notamment 'tcl_compte_compta' pour SalesAccountId.

### D�claration TypeScript
```typescript
interface EUSpecifications {
  /** Identifier of the associated sales account */
  SalesAccountId: string | null;
}
```