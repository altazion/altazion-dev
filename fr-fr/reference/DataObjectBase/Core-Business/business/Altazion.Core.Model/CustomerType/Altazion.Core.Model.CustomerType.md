La classe CustomerType représente un type de client avec ses spécifications et métadonnées.

- Id : Identifiant unique du type de client (int).
- Label : Libellé du type de client (string).
- MetaType : Métadonnée indiquant le type de client (string). Par exemple, "I" pour consommateur, "E" pour entreprise, "N" pour non défini.
- IsActive : Indique si le type de client est actif (bool).
- CanUseInvoicableElements : Indique si le type de client peut utiliser des éléments préfacturables (bool).
- EUSpecifics : Objet EUSpecifications contenant des spécifications spécifiques à l'Union Européenne.

Constantes définies dans la classe :
- MetaUndefined : "N", représente un type de client non défini.
- MetaTypeConsumer : "I", représente un type de client consommateur.
- MetaTypeEntreprise : "E", représente un type de client entreprise.

Classe interne EUSpecifications :
- SalesAccountId : Identifiant du compte de vente associé (string).