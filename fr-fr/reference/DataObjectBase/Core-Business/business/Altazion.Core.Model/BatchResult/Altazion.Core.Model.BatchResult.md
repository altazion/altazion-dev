La classe BatchResult représente le résultat d'un batch dans le système, incluant les informations clés telles que son identifiant unique, son type, l'objet associé, la date d'exécution, le résultat et son statut actuel.

Propriétés publiques :
- Guid : Identifiant unique du batch.
- BatchType : Type du batch.
- AssociatedObjectGuid : Identifiant unique optionnel de l'objet associé au batch.
- Date : Date et heure d'exécution du batch.
- Result : Résultat final du batch.
- Status : Statut actuel du batch, typiquement "completed" ou "running".

Constantes publiques :
- BatchStatusCompleted : valeur de statut indiquant que le batch est terminé ("completed").
- BatchStatusRunning : valeur de statut indiquant que le batch est en cours d'exécution ("running").