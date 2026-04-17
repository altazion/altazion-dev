## ArticleStock

La classe ArticleStock représente les informations de stock d'un article dans un magasin spécifique.

Propriétés publiques :
- pst_guid : Identifiant unique du stock (GUID).
- pst_mag_guid : Identifiant du magasin (GUID) correspondant à ce stock.
- pst_art_guid : Identifiant de l'article (GUID) auquel ce stock se rapporte.
- pst_vat_guid : Identifiant optionnel relatif à la taxe (VAT) applicable (GUID?).
- pst_date_maj : Date de la dernière mise à jour du stock.
- pst_qte : Quantité disponible en stock (valeur décimale nullable).
- pst_pu : Prix unitaire associé à ce stock (valeur décimale nullable).
- pst_est_dispo : Indique si le stock est disponible (booléen).
- pst_est_en_magasin : Indique si l'article est physiquement en magasin (booléen).
- pst_qte_reservee : Quantité réservée (valeur décimale nullable).
- pst_seuil_dispo : Seuil minimum de disponibilité pour considérer le stock comme disponible (valeur décimale nullable).
- pst_qte_reelle : Quantité réelle en stock (valeur décimale nullable).
- pst_qte_retiree : Quantité retirée du stock (valeur décimale nullable).
- pst_code_dispo : Code de disponibilité associé (chaîne de caractères).

### D�claration TypeScript
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