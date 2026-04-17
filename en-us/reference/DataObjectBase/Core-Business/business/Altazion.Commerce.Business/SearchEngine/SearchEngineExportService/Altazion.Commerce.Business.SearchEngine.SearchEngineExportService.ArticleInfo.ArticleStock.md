## ArticleStock

The ArticleStock class represents the stock information of an article in a specific store.

Public properties:
- pst_guid: Unique identifier of the stock (GUID).
- pst_mag_guid: Store identifier (GUID) corresponding to this stock.
- pst_art_guid: Identifier of the article (GUID) related to this stock.
- pst_vat_guid: Optional identifier related to the applicable tax (VAT) (GUID?).
- pst_date_maj: Date of the last stock update.
- pst_qte: Available stock quantity (nullable decimal).
- pst_pu: Unit price associated with this stock (nullable decimal).
- pst_est_dispo: Indicates whether the stock is available (boolean).
- pst_est_en_magasin: Indicates if the article is physically in the store (boolean).
- pst_qte_reservee: Reserved quantity (nullable decimal).
- pst_seuil_dispo: Minimum availability threshold to consider the stock as available (nullable decimal).
- pst_qte_reelle: Actual quantity in stock (nullable decimal).
- pst_qte_retiree: Quantity removed from stock (nullable decimal).
- pst_code_dispo: Associated availability code (string).

### TypeScript class
```typescript
interface ArticleStock {
  pst_guid: string; // GUID unique identifier of the stock
  pst_mag_guid: string; // GUID identifier of the store
  pst_art_guid: string; // GUID identifier of the article
  pst_vat_guid?: string | null; // Optional GUID for VAT
  pst_date_maj: Date; // Last update date
  pst_qte?: number | null; // Quantity available
  pst_pu?: number | null; // Unit price
  pst_est_dispo: boolean; // Is stock available
  pst_est_en_magasin: boolean; // Is article physically in store
  pst_qte_reservee?: number | null; // Reserved quantity
  pst_seuil_dispo?: number | null; // Availability threshold
  pst_qte_reelle?: number | null; // Real quantity in stock
  pst_qte_retiree?: number | null; // Quantity removed from stock
  pst_code_dispo?: string | null; // Availability code
}
```