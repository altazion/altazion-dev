## TodoTask

La classe `TodoTask` représente une tâche à effectuer avec ses détails et métadonnées.

Propriétés publiques :
- `Guid` : Identifiant unique de la tâche.
- `TypeGuid` : Identifiant unique du type de tâche.
- `Label` : Libellé ou titre de la tâche.
- `Details` : Détails ou description de la tâche.
- `AssociatedUrl` : URL associée à la tâche.
- `TargetGuid` : Identifiant unique optionnel de la cible associée.
- `TargetType` : Type de la cible associée.
- `CompletionDate` : Date de réalisation de la tâche, nullable.
- `Comment1`, `Comment2`, `Comment3` : Trois commentaires associés à la tâche.
- `Priority` : Niveau de priorité de la tâche (entier).
- `IsUrgent` : Indique si la tâche est urgente (booléen).
- `RecipientUserId` : Identifiant unique optionnel de l'utilisateur destinataire.
- `RecipientGroupGuid` : Identifiant unique optionnel du groupe destinataire.
- `IsContextLimited` : Indique si la tâche est limitée à un contexte spécifique (booléen).
- `Parameters` : Indique si la tâche contient des paramètres (booléen).
- `PriorityLabel` : Libellé calculé dynamiquement pour la priorité de la tâche, selon l'état (terminée, en retard, basse, normale, urgente, critique).
- Statics `OverdueLabel`, `LowPriorityLabel`, `NormalPriorityLabel`, `CriticalPriorityLabel`, `UrgentPriorityLabel` : libellés statiques pour différents niveaux d'urgence.
- `IsCompleted` : Indique si la tâche est terminée (booléen, vraie si `CompletionDate` a une valeur).
- `DueDate` : Date d'échéance de la tâche, nullable.
- `RequestDate` : Date de création ou de demande de la tâche.
- `RequesterUserId` : Identifiant unique optionnel de l'utilisateur ayant demandé la tâche.

Méthodes :
- `ToString()` retourne le libellé de la tâche.

Cette classe centralise toutes les informations utiles pour représenter, gérer et suivre une tâche dans le système Altazion.

### D�claration TypeScript
```typescript
interface TodoTask {
  Guid: string; // Unique identifier (GUID) of the task
  TypeGuid: string; // Unique identifier (GUID) of the task type
  Label: string; // Label or title of the task
  Details?: string; // Optional details or description
  AssociatedUrl?: string; // Optional URL associated with the task
  TargetGuid?: string | null; // Optional GUID of the associated target
  TargetType?: string | null; // Optional target type
  CompletionDate?: string | null; // Optional completion date (ISO string)
  Comment1?: string | null;
  Comment2?: string | null;
  Comment3?: string | null;
  Priority: number; // Priority level
  IsUrgent: boolean; // If the task is urgent
  RecipientUserId?: string | null; // Optional GUID of recipient user
  RecipientGroupGuid?: string | null; // Optional GUID of recipient group
  IsContextLimited: boolean; // If task is context limited
  Parameters: boolean; // If task has parameters
  // PriorityLabel is a computed readonly property based on other fields
  DueDate?: string | null; // Optional due date
  RequestDate: string; // Creation/request date (ISO string)
  RequesterUserId?: string | null; // Optional GUID of requester user
  IsCompleted: boolean; // Computed readonly property, true if CompletionDate is set
}

```