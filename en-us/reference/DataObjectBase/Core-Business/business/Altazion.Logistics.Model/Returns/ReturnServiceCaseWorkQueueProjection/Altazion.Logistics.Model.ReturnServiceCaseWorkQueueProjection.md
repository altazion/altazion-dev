## ReturnServiceCaseWorkQueueProjection

Work queue projection focused on store, workshop, and logistics operations.

Public properties:
- Id: Unique identifier of the object (primary key).
- TenantId: Tenant identifier.
- CaseId: Unique identifier of the return service case.
- RootCaseId: Identifier of the root case.
- ParentCaseId: Identifier of the parent case, if any.
- CaseNumber: Human-readable case number.
- CaseType: Type of return service case.
- GlobalStatus: Overall status of the case.
- CurrentPhase: Current phase in the workflow.
- CurrentStepCode: Code of the current workflow step.
- CurrentStepStatus: Status of the current workflow step.
- Priority: Priority level of the case.
- QueueCode: Code for the work queue.
- AssignedTeam: Team assigned to the case.
- AssignedUserId: Identifier of the assigned user.
- IsBlocked: Indicates whether the case is blocked.
- CreatedAt: Creation date and time.
- LastEventAt: Date and time of the last event.
- StoreId: Identifier of the involved store.
- WarehouseId: Identifier of the associated warehouse.
- CustomerId: Identifier of the customer.
- CustomerDisplayName: Display name of the customer.
- MainProductId: Identifier of the main product.
- MainProductLabel: Label of the main product.
- MainSerialNumber: Main product serial number.
- ActiveLineCount: Number of active lines.
- BlockedLineCount: Number of blocked lines.
- OpenLineCount: Number of open lines.
- LineIds: List of associated line identifiers.
- Tags: List of tags for filtering or categorization.

### TypeScript class
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