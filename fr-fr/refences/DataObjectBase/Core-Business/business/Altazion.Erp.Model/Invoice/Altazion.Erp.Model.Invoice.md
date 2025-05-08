La classe Invoice représente une facture dans le système ERP. Elle contient des propriétés décrivant les informations principales d'une facture :

- Id : Identifiant unique de la facture
- Date : Date de création de la facture
- InvoiceNumber : Numéro de la facture
- TotalAmount : Montant total TTC de la facture
- TotalAmountWOTax : Montant total HT de la facture
- CustomerName : Nom du client
- CustomerStreetAddress : Adresse postale du client
- CustomerZipCode : Code postal du client
- CustomerCity : Ville du client
- CustomerId : Identifiant du client
- TotalNotPayed : Montant restant à payer de la facture
- PaymentDeadlineDate : Date limite de paiement
- LastOverdueNotification : Date de la dernière notification de retard
- Origin : Origine de la facture
- CustomerReference : Référence client associée
- DisallowOverdueNotification : Indique si l'envoi de notification de retard est désactivé
- OverdueNotificationCount : Nombre de notifications de retard envoyées
- PrintCount : Nombre d'impressions de la facture

Chaque propriété publique permet de gérer ou d'afficher l'information correspondante à la facture.