## BatchResult

La classe BatchResult représente le résultat d'un batch, incluant plusieurs informations clés sur son exécution et son état.

Propriétés publiques :
- Guid : Identifiant unique du batch.
- BatchType : Type de batch.
- AssociatedObjectGuid : Identifiant unique de l'objet associé au batch, si présent.
- Date : Date et heure d'exécution du batch.
- Result : Résultat final du batch.
- Status : Statut actuel du batch.

Constantes associées :
- BatchStatusCompleted : La valeur "completed" indique que le batch est terminé.
- BatchStatusRunning : La valeur "running" indique que le batch est en cours d'exécution.

### D�claration TypeScript
```json
interface BatchResult {
  Guid: string; // Unique identifier (GUID) of the batch
  BatchType: string; // Type of the batch
  AssociatedObjectGuid?: string | null; // Optional GUID of an associated object
  Date: string; // Date and time of batch execution in ISO format
  Result: string; // Result of the batch execution
  Status: string; // Current status of the batch
}

// Constants related to batch status
const BatchStatusCompleted = "completed";
const BatchStatusRunning = "running";
```