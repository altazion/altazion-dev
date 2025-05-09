La classe `EUSpecifications` représente les spécifications spécifiques à l'Union Européenne pour un type de client.

Propriétés publiques :
- `SalesAccountId` (string) : Identifiant du compte de vente associé à ce type de client.

Méthodes héritées de DataObjectBase permettent l'initialisation des propriétés depuis une source DataRow, en particulier ici `SalesAccountId` est initialisé depuis la colonne `tcl_compte_compta`.
La clé unique de cet objet est son `SalesAccountId`.