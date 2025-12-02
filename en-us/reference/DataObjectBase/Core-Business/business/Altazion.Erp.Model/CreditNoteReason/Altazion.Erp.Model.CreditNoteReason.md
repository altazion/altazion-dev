## CreditNoteReason

The **CreditNoteReason** class represents a reason for a credit note, i.e., the motive that justifies the creation of a credit note in the ERP system. It contains the following properties:

- **Id** (Guid): Unique identifier of the credit note reason.
- **LegalEntityId** (int): Identifier for the related legal entity.
- **Label** (string): The label or description of the credit note reason.
- **LetterTemplate** (string): Letter template associated with this reason, used for communication purposes.
- **IsCommercialGesture** (bool): Indicates if this reason corresponds to a commercial gesture.
- **IsAutomaticRefund** (bool): Indicates if automatic refund applies for this reason.
- **IsInternalIssue** (bool): Indicates if the reason is related to an internal issue.
- **IsProviderPaymentIssue** (bool): Indicates if the issue concerns payment problems with a provider.
- **IsProviderDeliveryIssue** (bool): Indicates if the issue concerns delivery problems with a provider.
- **IsReturn** (bool): Indicates if the reason corresponds to merchandise return.
- **IsAutomaticMissingItem** (bool): Indicates if this reason automatically generates a credit note for missing item.
- **IsArchived** (bool): Indicates if the credit note reason is archived.
- **DocumentTemplateGuid** (Guid?): Optional GUID of an associated document template.

The class includes methods to get the unique key and internal validation logic to ensure data integrity (e.g. mandatory label, max length).

It is a SQL data concept class mapped to table "params_raisonsavoir" in the "Erp" database.

### TypeScript class
```typescript
interface CreditNoteReason {
  Id: string; // Guid
  LegalEntityId: number;
  Label: string;
  LetterTemplate: string;
  IsCommercialGesture: boolean;
  IsAutomaticRefund: boolean;
  IsInternalIssue: boolean;
  IsProviderPaymentIssue: boolean;
  IsProviderDeliveryIssue: boolean;
  IsReturn: boolean;
  IsAutomaticMissingItem: boolean;
  IsArchived: boolean;
  DocumentTemplateGuid?: string | null; // Nullable Guid
}
```