## ProductDppAuditEntry

The ProductDppAuditEntry class represents an entry in the audit log for Digital Product Passport (DPP) modifications. Each entry is automatically traced by the business logic layer at each mutation operation. Public properties include:

- Timestamp: UTC timestamp of the operation, providing the exact date and time of the change.
- Action: Code of the performed action, referring to DppConstants.DppAuditActions, specifying the exact type of operation executed.
- SnapshotId: Unique identifier (GUID) of the concerned DPP snapshot. This can be null for actions directly related to the ProductDppInfo itself.
- Description: Free text description of the operation, such as material name, CAS number, or batch number, providing context for the change.

### TypeScript class
```typescript
interface ProductDppAuditEntry {
  Timestamp: Date;
  Action: string;
  SnapshotId?: string | null;
  Description: string;
}
```