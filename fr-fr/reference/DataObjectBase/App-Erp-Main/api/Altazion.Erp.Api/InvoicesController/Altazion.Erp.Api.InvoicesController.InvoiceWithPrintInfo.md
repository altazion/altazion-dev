## InvoiceWithPrintInfo

La classe InvoiceWithPrintInfo étend la classe Invoice pour inclure des informations supplémentaires liées à l'impression et au téléchargement des factures clients dans le système ERP.

Propriétés publiques :
- InvoiceDownloadUrl : chaîne de caractères représentant l'URL pour télécharger la facture au format PDF.
- ClientGuid : identifiant unique (GUID) du client auquel la facture est associée. Cette propriété est marquée avec JsonIgnoreCondition.Always, ce qui signifie qu'elle est ignorée lors de la sérialisation en JSON.

Fonctionnalité :
- La méthode protégée FromDataRow surcharge la méthode de la classe parente pour mapper les données d'une ligne DataRow aux propriétés de la classe. Elle récupère en plus du mapping standard le nombre d'impressions (PrintCount) et le GUID du client (ClientGuid).


### D�claration TypeScript
```typescript
interface InvoiceWithPrintInfo {
  InvoiceDownloadUrl: string | null; // URL to download the invoice PDF
  ClientGuid?: string; // Nullable GUID (UUID) of the client, ignored in JSON serialization
  // Properties inherited from Invoice are not redefined here
}
```