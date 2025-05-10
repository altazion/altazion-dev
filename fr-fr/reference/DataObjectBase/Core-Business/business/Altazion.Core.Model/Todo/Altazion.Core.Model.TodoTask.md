## TodoTask

La classe TodoTask représente une tâche à effectuer avec ses détails et métadonnées.

- Guid : Identifiant unique de la tâche.
- TypeGuid : Identifiant unique du type de tâche.
- Label : Libellé ou titre de la tâche.
- Details : Détails ou description de la tâche.
- AssociatedUrl : URL associée à la tâche.
- TargetGuid : Identifiant unique optionnel de la cible associée à la tâche.
- TargetType : Type de la cible associée à la tâche.
- CompletionDate : Date de réalisation optionnelle de la tâche.
- Comment1 : Premier commentaire associé à la tâche.
- Comment2 : Deuxième commentaire associé à la tâche.
- Comment3 : Troisième commentaire associé à la tâche.
- Priority : Niveau de priorité de la tâche (entier).
- IsUrgent : Indique si la tâche est urgente (booléen).
- RecipientUserId : Identifiant unique optionnel de l'utilisateur destinataire.
- RecipientGroupGuid : Identifiant unique optionnel du groupe destinataire.
- IsContextLimited : Indique si la tâche est limitée à un contexte spécifique.
- Parameters : Indique si la tâche contient des paramètres.
- PriorityLabel : Libellé calculé dynamiquement représentant la priorité en texte selon l'état et priorité numérique.
- IsCompleted : Indique si la tâche est terminée (booléen, basé sur CompletionDate).
- DueDate : Date d'échéance optionnelle de la tâche.
- RequestDate : Date de création ou demande de la tâche.
- RequesterUserId : Identifiant unique optionnel de l'utilisateur ayant demandé la tâche.

Constantes (libellés de priorité) statiques :
- OverdueLabel : Texte pour les tâches en retard.
- LowPriorityLabel : Texte pour faible priorité.
- NormalPriorityLabel : Texte pour priorité normale.
- CriticalPriorityLabel : Texte pour priorité critique.
- UrgentPriorityLabel : Texte pour priorité urgente.

La méthode ToString retourne le libellé de la tâche.

La méthode FromDataRow initialise une instance à partir d'une ligne de données (DataRow).

La méthode GetKey retourne l'identifiant unique (Guid) de la tâche.

### D�claration TypeScript
```typescript
interface TodoTask {
  Guid: string; // Unique identifier (GUID) of the task
  TypeGuid: string; // Unique identifier of the type of task
  Label: string; // Task label or title
  Details?: string | null; // Optional details or description
  AssociatedUrl?: string | null; // Optional URL associated with the task
  TargetGuid?: string | null; // Optional unique identifier of the associated target
  TargetType?: string | null; // Optional target type string
  CompletionDate?: string | null; // Optional completion date (ISO string)
  Comment1?: string | null; // Optional first comment
  Comment2?: string | null; // Optional second comment
  Comment3?: string | null; // Optional third comment
  Priority: number; // Priority level
  IsUrgent: boolean; // Is task urgent
  RecipientUserId?: string | null; // Optional recipient user ID
  RecipientGroupGuid?: string | null; // Optional recipient group ID
  IsContextLimited: boolean; // Is task context limited
  Parameters: boolean; // Does task contain parameters
  PriorityLabel: string; // Calculated priority label
  IsCompleted: boolean; // Is task completed
  DueDate?: string | null; // Optional due date
  RequestDate: string; // Request or creation date
  RequesterUserId?: string | null; // Optional requester user ID
}

// Static priority labels (strings)
const TodoTask_OverdueLabel: string;
const TodoTask_LowPriorityLabel: string;
const TodoTask_NormalPriorityLabel: string;
const TodoTask_CriticalPriorityLabel: string;
const TodoTask_UrgentPriorityLabel: string;
```