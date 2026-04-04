## ReturnServiceCaseWorkQueueProjection

Projection de travail orientée exploitation magasin, atelier et logistique.

Propriétés publiques :
- Id : Identifiant unique de l'objet (clé primaire).
- TenantId : Identifiant du locataire.
- CaseId : Identifiant unique du dossier de retour.
- RootCaseId : Identifiant du dossier racine.
- ParentCaseId : Identifiant du dossier parent, si applicable.
- CaseNumber : Numéro de dossier lisible.
- CaseType : Type de dossier de service de retour.
- GlobalStatus : Statut global du dossier.
- CurrentPhase : Phase actuelle dans le workflow.
- CurrentStepCode : Code de l'étape actuelle.
- CurrentStepStatus : Statut de l'étape actuelle dans le workflow.
- Priority : Priorité du dossier.
- QueueCode : Code de la file de travail associée.
- AssignedTeam : Équipe assignée.
- AssignedUserId : Identifiant de l'utilisateur assigné.
- IsBlocked : Indique si le dossier est bloqué.
- CreatedAt : Date et heure de création.
- LastEventAt : Date et heure du dernier événement.
- StoreId : Identifiant du magasin concerné.
- WarehouseId : Identifiant de l'entrepôt associé.
- CustomerId : Identifiant du client.
- CustomerDisplayName : Nom affiché du client.
- MainProductId : Identifiant du produit principal.
- MainProductLabel : Libellé du produit principal.
- MainSerialNumber : Numéro de série principal.
- ActiveLineCount : Nombre de lignes actives.
- BlockedLineCount : Nombre de lignes bloquées.
- OpenLineCount : Nombre de lignes ouvertes.
- LineIds : Liste des identifiants des lignes associées.
- Tags : Liste de tags associés pour le classement ou le filtrage.

### D�claration TypeScript
```typescript
interface ReturnServiceCaseWorkQueueProjection {
  id: string;
  tenantId: number;
  caseId: string; // Guid
  rootCaseId: string; // Guid
  parentCaseId?: string; // Guid or null
  caseNumber: string;
  caseType: ReturnServiceCaseType;
  globalStatus: ReturnServiceCaseStatus;
  currentPhase: WorkflowPhase;
  currentStepCode: string;
  currentStepStatus: WorkflowStepStatus;
  priority: ReturnServiceCasePriority;
  queueCode: string;
  assignedTeam: string;
  assignedUserId?: string; // Guid or null
  isBlocked: boolean;
  createdAt: string; // DateTimeOffset ISO string
  lastEventAt?: string; // DateTimeOffset ISO string or null
  storeId?: string; // Guid or null
  warehouseId?: string; // Guid or null
  customerId?: string; // Guid or null
  customerDisplayName: string;
  mainProductId?: string; // Guid or null
  mainProductLabel: string;
  mainSerialNumber: string;
  activeLineCount: number;
  blockedLineCount: number;
  openLineCount: number;
  lineIds: string[]; // array of Guids
  tags: string[];
}
```