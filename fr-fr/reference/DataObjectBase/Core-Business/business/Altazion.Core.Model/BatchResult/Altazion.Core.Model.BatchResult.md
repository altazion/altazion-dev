La classe BatchResult représente le résultat d'un traitement batch, en incluant plusieurs propriétés descriptives :

- Guid : Identifiant unique du batch.
- BatchType : Type du batch.
- AssociatedObjectGuid : Identifiant unique optionnel de l'objet associé au batch.
- Date : Date et heure d'exécution du batch.
- Result : Résultat du batch sous forme de chaîne.
- Status : Statut actuel du batch, valeur possible parmi constantes définies.

Constantes associées :
- BatchStatusCompleted : "completed", indiquant que le batch est terminé.
- BatchStatusRunning : "running", indiquant que le batch est en cours d'exécution.