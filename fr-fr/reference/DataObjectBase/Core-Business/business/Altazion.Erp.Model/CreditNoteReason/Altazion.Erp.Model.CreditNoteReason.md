## CreditNoteReason

La classe **CreditNoteReason** représente une raison d'avoir, c'est-à-dire un motif permettant la création d'un avoir dans le système ERP. Elle contient les propriétés suivantes :

- **Id** (Guid) : Identifiant unique de la raison d'avoir.
- **LegalEntityId** (int) : Identifiant de la raison juridique associée.
- **Label** (string) : Libellé ou description de la raison d'avoir.
- **LetterTemplate** (string) : Modèle de lettre lié à cette raison, utilisé par exemple pour la communication.
- **IsCommercialGesture** (bool) : Indique si cette raison correspond à un geste commercial.
- **IsAutomaticRefund** (bool) : Indique si le remboursement est automatique pour ce motif.
- **IsInternalIssue** (bool) : Indique si la raison correspond à un problème interne.
- **IsProviderPaymentIssue** (bool) : Indique si le motif est lié à un problème de règlement avec un prestataire.
- **IsProviderDeliveryIssue** (bool) : Indique si le motif concerne un problème de livraison du prestataire.
- **IsReturn** (bool) : Indique si la raison correspond à un retour de marchandise.
- **IsAutomaticMissingItem** (bool) : Indique si cette raison déclenche automatiquement un avoir pour un article manquant.
- **IsArchived** (bool) : Indique si la raison d'avoir est archivée.
- **DocumentTemplateGuid** (Guid?) : Identifiant facultatif du modèle de document associé.

Cette classe contient également des méthodes pour gérer sa clé unique et des validations internes afin de garantir la cohérence des données (ex. libellé obligatoire, taille maximale).

Cette classe est un concept métier SQL mappé sur la table "params_raisonsavoir" dans la base "Erp".

### D�claration TypeScript
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