Classe représentant une facture dans le système ERP. Elle contient les propriétés suivantes :

- Id : Identifiant unique de la facture.
- Date : Date et heure de la facture.
- InvoiceNumber : Numéro de la facture.
- TotalAmount : Montant total TTC de la facture.
- TotalAmountWOTax : Montant total HT de la facture.
- CustomerName : Nom du client.
- CustomerStreetAddress : Adresse postale du client.
- CustomerZipCode : Code postal du client.
- CustomerCity : Ville du client.
- CustomerId : Identifiant du client.
- TotalNotPayed : Montant restant à payer sur la facture.
- PaymentDeadlineDate : Date limite de paiement, optionnelle.
- LastOverdueNotification : Date de la dernière notification de retard, optionnelle.
- Origin : Origine ou source de la facture.
- CustomerReference : Référence client associée à la facture.
- DisallowOverdueNotification : Indicateur interdisant l'envoi de relances.
- OverdueNotificationCount : Nombre de relances envoyées.
- PrintCount : Nombre de fois que la facture a été imprimée.

Cette classe fournit également une méthode GetKey() retournant l'identifiant unique, ainsi qu'une méthode FromDataRow permettant d'initialiser l'objet à partir d'une ligne de données.
