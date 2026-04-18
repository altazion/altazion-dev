## InvoiceWithLines

La classe InvoiceWithLines étend la classe Invoice et représente une facture avec ses lignes détaillées.

Propriétés publiques :
- Lines : un tableau d'objets InvoiceLine représentant les lignes de la facture. Chaque ligne correspond à un article ou produit facturé avec ses détails associés.

### D�claration TypeScript
```typescript
interface InvoiceWithLines {
  Lines: InvoiceLine[];
  // Plus toutes les propriétés héritées de Invoice
}

interface InvoiceLine {
  // Propriétés définies dans InvoiceLine
}

```