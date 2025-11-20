## InvoiceWithPrintInfo

La classe InvoiceWithPrintInfo étend la classe Invoice et représente une facture avec des informations supplémentaires liées à l'impression.

Propriétés publiques :
- InvoiceDownloadUrl (string) : URL pour télécharger la facture au format PDF.
- PrintCount (int) : nombre de fois que la facture a été imprimée.
- ClientGuid (Guid?) [ignoré lors de la sérialisation JSON] : identifiant unique du client associé à la facture.

Méthodes protégées :
- FromDataRow(DataRow dr) : initialise les propriétés à partir d'une ligne de données, récupérant notamment PrintCount et ClientGuid.


### D�claration TypeScript
```typescript
interface InvoiceWithPrintInfo {
  InvoiceDownloadUrl: string;
  PrintCount: number;
  ClientGuid?: string; // GUID as string, nullable
}
```