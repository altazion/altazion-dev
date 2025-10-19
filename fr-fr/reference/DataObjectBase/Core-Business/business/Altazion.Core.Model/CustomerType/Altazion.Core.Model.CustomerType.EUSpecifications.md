## EUSpecifications

La classe EUSpecifications représente les spécifications spécifiques à l'Union Européenne pour un type de client dans le contexte Altazion.

Propriétés publiques :

- SalesAccountId : string
  - Identifiant du compte de vente associé. Cette propriété sert de clé unique pour cette classe.

Méthodes importantes (non à détailler selon consigne) :
- FromDataRow(DataRow dr) : permet d'initialiser l'objet à partir d'une ligne de données.
- GetKey() : retourne la clé unique, ici l'identifiant du compte de vente.

### D�claration TypeScript
```typescript
interface EUSpecifications {
  /** Identifier of the associated sales account */
  SalesAccountId: string | null;
}
```