## ModeReglementWeb

La classe ModeReglementWeb étend ModeReglement et représente un mode de règlement spécifique pour le web avec des propriétés supplémentaires liées aux contraintes commerciales et à l'activation.

Propriétés publiques :
- MontantMiniCommande (decimal) : Montant minimum autorisé pour une commande.
- MontantMaxiCommande (decimal) : Montant maximum autorisé pour une commande.
- EstActif (bool) : Indique si le mode de règlement est actif.
- SiteId (int) : Identifiant du site auquel ce mode de règlement est associé.

Elle hérite des toutes les propriétés de ModeReglement qui décrit les caractéristiques générales d'un mode de règlement.

### D�claration TypeScript
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