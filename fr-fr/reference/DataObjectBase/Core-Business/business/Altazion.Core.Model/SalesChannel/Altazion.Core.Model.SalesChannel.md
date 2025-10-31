## SalesChannel

La classe SalesChannel représente un canal d'origine des ventes, par exemple un point de vente, un site web, ou une marketplace.

Propriétés publiques :
- Id : Identifiant unique du canal de vente.
- Code : Code court du canal de vente, limité à 3 caractères.
- Label : Libellé ou nom descriptif du canal de vente.
- SiteId : Identifiant facultatif du site ou magasin associé.
- IsActive : Indique si le canal de vente est actif.
- InvoiceNumberingFormat : Format optionnel de numérotation des factures (max 50 caractères).
- CreditNoteNumberingFormat : Format optionnel de numérotation des avoirs (max 50 caractères).
- QuoteNumberingFormat : Format optionnel de numérotation des devis (max 50 caractères).
- OrderNumberingFormat : Format optionnel de numérotation des bons de commande (max 50 caractères).
- DefaultCustomerTypeId : Identifiant optionnel du type de client par défaut.
- DefaultCurrencyGuid : GUID optionnel de la devise par défaut du canal.

La classe valide ses données en imposant notamment la présence et la longueur maximale des propriétés Code et Label, ainsi que la longueur maximale des formats de numérotation.

### D�claration TypeScript
```typescript
interface SalesChannel {
  Id: number;
  Code: string;
  Label: string;
  SiteId?: number | null;
  IsActive: boolean;
  InvoiceNumberingFormat?: string | null;
  CreditNoteNumberingFormat?: string | null;
  QuoteNumberingFormat?: string | null;
  OrderNumberingFormat?: string | null;
  DefaultCustomerTypeId?: number | null;
  DefaultCurrencyGuid?: string | null; // GUID as string
}
```