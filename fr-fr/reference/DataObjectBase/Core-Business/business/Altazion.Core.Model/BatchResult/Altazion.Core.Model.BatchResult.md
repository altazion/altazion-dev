La classe BatchResult représente le résultat d'un batch dans le système.

Propriétés :
- Guid : Identifiant unique du batch de type Guid.
- BatchType : Type du batch (string).
- AssociatedObjectGuid : Identifiant unique optionnel de l'objet associé au batch, de type Guid nullable.
- Date : Date et heure d'exécution du batch de type DateTimeOffset.
- Result : Résultat du batch, sous forme de chaîne.
- Status : Statut actuel du batch, sous forme de chaîne.

Constantes :
- BatchStatusCompleted : indique que le batch est terminé avec la valeur "completed".
- BatchStatusRunning : indique que le batch est en cours avec la valeur "running".