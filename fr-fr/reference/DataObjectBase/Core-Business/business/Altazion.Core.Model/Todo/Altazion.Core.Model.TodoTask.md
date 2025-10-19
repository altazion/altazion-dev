## TodoTask

La classe TodoTask représente une tâche à effectuer avec ses détails et métadonnées associées.

Propriétés publiques :
- Guid : Identifiant unique de la tâche (Guid).
- TypeGuid : Identifiant unique du type de tâche (Guid).
- Label : Libellé ou titre de la tâche (string).
- Details : Détails ou description de la tâche (string).
- AssociatedUrl : URL associée à la tâche (string).
- TargetGuid : Identifiant unique optionnel de la cible associée à la tâche (Guid?).
- TargetType : Type de la cible associée à la tâche (string).
- CompletionDate : Date de réalisation optionnelle de la tâche (DateTime?).
- Comment1, Comment2, Comment3 : Trois commentaires optionnels associés à la tâche (string).
- Priority : Niveau de priorité de la tâche (int).
- IsUrgent : Indique si la tâche est urgente (bool).
- RecipientUserId : Identifiant unique optionnel de l'utilisateur destinataire (Guid?).
- RecipientGroupGuid : Identifiant unique optionnel du groupe destinataire (Guid?).
- IsContextLimited : Indique si la tâche est limitée à un contexte spécifique (bool).
- Parameters : Indique si la tâche contient des paramètres (bool).
- PriorityLabel : Libellé de la priorité de la tâche, calculé dynamiquement (string, en lecture seule).
- IsCompleted : Indique si la tâche est terminée, basé sur CompletionDate (bool, en lecture seule).
- DueDate : Date d'échéance optionnelle de la tâche (DateTime?).
- RequestDate : Date de création ou de demande de la tâche (DateTime).
- RequesterUserId : Identifiant unique optionnel de l'utilisateur ayant demandé la tâche (Guid?).

Constantes statiques fournissant les libellés possibles pour la priorité :
- OverdueLabel (tâches en retard)
- LowPriorityLabel (priorité basse)
- NormalPriorityLabel (priorité normale)
- CriticalPriorityLabel (priorité critique)
- UrgentPriorityLabel (priorité urgente)

Cette classe hérite de DataObjectBase et surdéfinit la méthode FromDataRow pour initialiser ses propriétés depuis une ligne de données.
Elle remplace aussi la méthode GetKey pour retourner l'identifiant unique Guid de la tâche.
La méthode ToString retourne le libellé Label de la tâche.

### D�claration TypeScript
```typescript
interface TodoTask {
  Guid: string;
  TypeGuid: string;
  Label: string | null;
  Details: string | null;
  AssociatedUrl: string | null;
  TargetGuid?: string | null;
  TargetType: string | null;
  CompletionDate?: string | null; // DateTime in ISO string format
  Comment1: string | null;
  Comment2: string | null;
  Comment3: string | null;
  Priority: number;
  IsUrgent: boolean;
  RecipientUserId?: string | null;
  RecipientGroupGuid?: string | null;
  IsContextLimited: boolean;
  Parameters: boolean;
  PriorityLabel: string;
  IsCompleted: boolean;
  DueDate?: string | null; // DateTime in ISO string format
  RequestDate: string; // DateTime in ISO string format
  RequesterUserId?: string | null;
}
```