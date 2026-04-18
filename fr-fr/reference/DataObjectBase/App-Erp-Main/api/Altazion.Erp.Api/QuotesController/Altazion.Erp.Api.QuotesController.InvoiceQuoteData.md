## InvoiceQuoteData

Classe représentant les données utilisées lors de la facturation d'un devis.

Propriétés publiques :
- InvoiceAll (bool) : Indique si toutes les lignes du devis doivent être facturées.
- LinesToInvoice (decimal[]) : Tableau des identifiants des lignes spécifiques du devis à facturer.
- ValidatedOptions (decimal[]) : Tableau des options validées qui peuvent être liées à la facturation.
- CreateNewClient (bool) : Indique s'il faut créer un nouveau client lors de la transformation en facture.
- ReplacementClientPK (int?) : Identifiant du client de remplacement, s'il y en a un.
- CustomerType (short) : Type du client (numérique court).
- CustomerInvoiceReference (string) : Référence client associée à la facture, peut être nulle.

### D�claration TypeScript
```typescript
interface InvoiceQuoteData {
  InvoiceAll: boolean;
  LinesToInvoice: number[];
  ValidatedOptions: number[];
  CreateNewClient: boolean;
  ReplacementClientPK?: number | null;
  CustomerType: number;
  CustomerInvoiceReference?: string | null;
}
```