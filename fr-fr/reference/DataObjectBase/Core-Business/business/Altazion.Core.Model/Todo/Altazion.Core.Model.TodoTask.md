## TodoTask

La classe TodoTask représente une tâche à effectuer avec ses détails et ses métadonnées. Elle contient les propriétés suivantes :

- Guid : Identifiant unique de la tâche (type Guid).
- TypeGuid : Identifiant unique du type de tâche (type Guid).
- Label : Libellé ou titre de la tâche (type string).
- Details : Détails ou description de la tâche (type string).
- AssociatedUrl : URL associée à la tâche (type string).
- TargetGuid : Identifiant unique de la cible associée à la tâche (type Guid?, nullable).
- TargetType : Type de la cible associée à la tâche (type string).
- CompletionDate : Date de réalisation de la tâche (type DateTime?, nullable).
- Comment1, Comment2, Comment3 : Trois commentaires associés à la tâche (types string).
- Priority : Niveau de priorité de la tâche (type int).
- IsUrgent : Indique si la tâche est urgente (type bool).
- RecipientUserId : Identifiant unique de l'utilisateur destinataire (type Guid?, nullable).
- RecipientGroupGuid : Identifiant unique du groupe destinataire (type Guid?, nullable).
- IsContextLimited : Indique si la tâche est limitée à un contexte spécifique (type bool).
- Parameters : Indique si la tâche contient des paramètres (type bool).
- PriorityLabel : Propriété calculée qui renvoie un libellé de priorité dynamique en fonction de l'état de la tâche et de l'urgence.
- IsCompleted : Indique si la tâche est terminée (vrai si CompletionDate a une valeur).
- DueDate : Date d'échéance de la tâche (type DateTime?, nullable).
- RequestDate : Date de création ou de demande de la tâche (type DateTime).
- RequesterUserId : Identifiant unique de l'utilisateur ayant demandé la tâche (type Guid?, nullable).

La classe définit aussi plusieurs constantes statiques fournissant des libellés de priorité pré-définis : OverdueLabel, LowPriorityLabel, NormalPriorityLabel, CriticalPriorityLabel, UrgentPriorityLabel.

La méthode ToString() retourne le libellé de la tâche (Label).

Cette classe hérite de DataObjectBase et est décorée avec l'attribut SqlDataConcept, ce qui indique sa liaison avec une table SQL nommée "profils_todo" dans le contexte "Office" et catégorie "Todo".

### D�claration TypeScript
```typescript
interface TodoTask {
  Guid: string; // Unique identifier of the task
  TypeGuid: string; // Unique identifier of the task type
  Label: string; // Label or title of the task
  Details: string; // Details or description of the task
  AssociatedUrl: string; // URL associated with the task
  TargetGuid?: string | null; // Unique identifier of the associated target
  TargetType: string; // Type of the associated target
  CompletionDate?: string | null; // Completion date in ISO string format
  Comment1: string; // First comment
  Comment2: string; // Second comment
  Comment3: string; // Third comment
  Priority: number; // Priority level
  IsUrgent: boolean; // Whether the task is urgent
  RecipientUserId?: string | null; // Unique ID of user recipient
  RecipientGroupGuid?: string | null; // Unique ID of recipient group
  IsContextLimited: boolean; // Whether task is context limited
  Parameters: boolean; // Whether task contains parameters
  IsCompleted: boolean; // Whether the task is completed
  DueDate?: string | null; // Due date in ISO string format
  RequestDate: string; // Request or creation date in ISO string format
  RequesterUserId?: string | null; // Unique ID of user who requested the task
}
```