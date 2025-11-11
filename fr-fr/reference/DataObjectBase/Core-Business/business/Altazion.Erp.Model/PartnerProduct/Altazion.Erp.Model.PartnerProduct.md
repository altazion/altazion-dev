## PartnerProduct

La classe PartnerProduct représente l'association d'un article avec un partenaire commercial (revendeur, marketplace, magasin).

Propriétés publiques :
- ArticleGuid : Identifiant unique de l'article.
- PartnerGuid : Identifiant unique du partenaire.
- IsAvailable : Indique si l'article est disponible chez ce partenaire.
- Url : URL de la page produit chez le partenaire (max 500 caractères).
- PartnerReference : Référence produit utilisée par le partenaire (max 50 caractères).
- UnitPriceExcludingTax : Prix unitaire hors taxes.
- UnitPriceIncludingTax : Prix unitaire toutes taxes comprises.
- PromoUnitPriceExcludingTax : Prix unitaire promotionnel hors taxes (optionnel).
- PromoUnitPriceIncludingTax : Prix unitaire promotionnel toutes taxes comprises (optionnel).
- PromoStartDate : Date de début de la promotion (optionnel).
- PromoEndDate : Date de fin de la promotion (optionnel).
- AvailableQuantity : Quantité disponible chez le partenaire (optionnel).
- ReservedQuantity : Quantité réservée chez le partenaire (optionnel).
- SupplyQuantity : Quantité en cours d'approvisionnement chez le partenaire (optionnel).
- IsArchived : Indique si cette association est archivée.
- MaxDeliveryDelay : Délai maximum de livraison en jours (optionnel).

La classe fournit également plusieurs méthodes pour vérifier la promotion active, obtenir le prix actuel (TTC ou HT), et calculer la quantité nette disponible.

### D�claration TypeScript
```typescript
interface PartnerProduct {
  ArticleGuid: string; // GUID of the article
  PartnerGuid: string; // GUID of the partner
  IsAvailable: boolean;
  Url: string | null;
  PartnerReference: string | null;
  UnitPriceExcludingTax: number;
  UnitPriceIncludingTax: number;
  PromoUnitPriceExcludingTax?: number | null;
  PromoUnitPriceIncludingTax?: number | null;
  PromoStartDate?: Date | null;
  PromoEndDate?: Date | null;
  AvailableQuantity?: number | null;
  ReservedQuantity?: number | null;
  SupplyQuantity?: number | null;
  IsArchived: boolean;
  MaxDeliveryDelay?: number | null;
}
```