## InvoiceWithLines

La classe InvoiceWithLines dérive de la classe Invoice et représente une facture accompagnée de ses lignes de détails. 

Propriétés publiques :
- Lines : tableau d'objets InvoiceLine, représentant les lignes détaillées de la facture.

### D�claration TypeScript
```typescript
interface InvoiceWithLines extends Invoice {
  Lines?: InvoiceLine[];
}
```