## BatchResult

La classe BatchResult représente le résultat d'un batch, incluant les informations suivantes :

- Guid : Identifiant unique du batch.
- BatchType : Type du batch.
- AssociatedObjectGuid : Identifiant unique facultatif de l'objet associé au batch.
- Date : Date et heure d'exécution du batch.
- Result : Résultat textuel du batch.
- Status : Statut actuel du batch, représenté par une chaîne.

Constantes définies dans la classe :
- BatchStatusCompleted : indique que le batch est terminé (valeur "completed").
- BatchStatusRunning : indique que le batch est en cours (valeur "running").

### D�claration TypeScript
```typescript
interface BatchResult {
  Guid: string; // Unique identifier of the batch (GUID)
  BatchType: string | null; // Type of the batch
  AssociatedObjectGuid?: string | null; // Optional associated object's GUID
  Date: string; // Date and time of batch execution (ISO 8601 format)
  Result: string | null; // Result of the batch
  Status: string | null; // Current status of the batch
}

// Constants representing batch status
const BatchStatusCompleted = "completed";
const BatchStatusRunning = "running";
```