## EUSpecifications

Cette classe représente les spécifications spécifiques à l'Union Européenne pour un type de client au sein de la classe CustomerType.

Propriétés publiques :
- SalesAccountId : chaîne de caractères représentant l'identifiant du compte de vente associé.

Méthodes héritées non détaillées :
- FromDataRow : initialise les propriétés à partir d'une DataRow.
- GetKey : retourne la clé unique qui est ici l'identifiant du compte de vente.

### D�claration TypeScript
```json
interface EUSpecifications {
  /** Identifier of the associated sales account. */
  SalesAccountId: string | null;
}
```