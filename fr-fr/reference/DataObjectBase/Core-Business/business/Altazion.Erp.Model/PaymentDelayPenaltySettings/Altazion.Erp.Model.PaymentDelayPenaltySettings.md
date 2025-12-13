## PaymentDelayPenaltySettings

Cette classe représente les paramètres des pénalités de retard de paiement.

Propriétés publiques :
- Id : Identifiant unique (clé primaire) des paramètres de pénalité.
- Origin : Origine de la facture (par exemple web, magasin, etc.).
- AnnualBaseRate : Taux annuel de base pour le calcul des pénalités.
- AnnualFactorRate : Taux annuel utilisé comme facteur dans le calcul des pénalités.
- AnnualAdditionalRate : Taux annuel supplémentaire (majoration) applicable aux pénalités.
- ForfeitAmount : Montant forfaitaire fixe appliqué en cas de retard de paiement.
- PublicIndexGuid : Identifiant GUID facultatif de l'indice public utilisé pour les calculs.

Cette classe inclut aussi une validation des données pour s'assurer que les valeurs sont correctes (ex : les taux ne peuvent pas être négatifs, l'identifiant doit être supérieur à zéro, etc.).

### D�claration TypeScript
```typescript
interface PaymentDelayPenaltySettings {
  Id: number;
  Origin: string;
  AnnualBaseRate: number;
  AnnualFactorRate: number;
  AnnualAdditionalRate: number;
  ForfeitAmount: number;
  PublicIndexGuid?: string | null;
}
```