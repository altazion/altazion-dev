## ModeReglementWeb

The ModeReglementWeb class extends ModeReglement and represents a web-specific payment method with additional properties related to commercial constraints and activation status.

Public properties:
- MontantMiniCommande (decimal): Minimum allowed amount for an order.
- MontantMaxiCommande (decimal): Maximum allowed amount for an order.
- EstActif (bool): Indicates whether the payment method is active.
- SiteId (int): Identifier of the site associated with this payment method.

It inherits all properties from ModeReglement which describes general characteristics of a payment method.

### TypeScript class
```typescript
interface ModeReglementWeb {
  Guid: string;
  EstModePrincipal: boolean;
  CodeComptable: string | null;
  Priorite: number;
  UrlModuleWeb: string | null;
  UrlModuleRetour: string | null;
  Nom: string | null;
  TypeReglement: number;
  ClefMarchand: string | null;
  ClefMarchandComplement: string | null;
  Classe: string | null;
  UtilisableECommerce: boolean;
  UtilisablePosWeb: boolean;
  UtilisableClickNMortar: boolean;
  UtilisableMicroTransactions: boolean;
  ProviderId: number;
  EstModifiable: boolean;
  UtilisableMarketPlace: boolean;
  UtilisableGc: boolean;
  Delai: number;
  File1: Uint8Array | null;
  File2: Uint8Array | null;
  EstRRR: boolean;
  ChaineComplementaire: string | null;
  MontantMiniCommande: number;
  MontantMaxiCommande: number;
  EstActif: boolean;
  SiteId: number;
}
```