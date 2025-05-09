La classe EUSpecifications représente les spécifications spécifiques à l'Union Européenne pour un type de client.

Propriétés publiques :

- SalesAccountId : chaîne de caractères représentant l'identifiant du compte de vente associé. Cette propriété sert de clé unique pour cet objet.

Méthodes importantes :

- FromDataRow(DataRow dr) : initialise la propriété SalesAccountId à partir d'une ligne de données.
- GetKey() : retourne SalesAccountId, la clé unique de l'objet.