La classe Customer représente un client avec ses informations personnelles et professionnelles. Elle contient les propriétés suivantes :

- Id : Identifiant unique du client.
- Guid : Identifiant global unique (GUID) du client.
- Name : Nom complet du client.
- StreetAddress : Adresse du client.
- PostalCode : Code postal du client.
- CountryCode : Code du pays du client.
- City : Ville du client.
- MainEmail : Adresse e-mail principale du client.
- Importance : Niveau d'importance du client (type court).
- IsArchived : Indique si le client est archivé (booléen).
- CreationDate : Date de création du client.
- CustomerType : Type de client (par exemple, particulier ou entreprise, type court).
- Phone : Numéro de téléphone du client.
- Mobile : Numéro de téléphone mobile du client.
- AccountingAccount : Compte comptable du client.
- VatNumber : Numéro de TVA du client.
- LastName : Nom seul du client (sans prénom).
- FirstName : Prénom seul du client (sans nom).
- Title : Civilité du client (par exemple, M., Mme, Dr).

Cette classe dérive de DataObjectBase et possède des méthodes pour charger ses données depuis une Source DataRow, comparer la clé de données avec un autre objet et obtenir sa clé unique (Id).