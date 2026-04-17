## RivSfsDispoInfo

Classe représentant les informations de disponibilité concernant deux modes de livraison ou de service pour un article :

- est_sfs : booléen indiquant si l'article est disponible en mode "Ship From Store" (SFS).
- est_riv : booléen indiquant si l'article est disponible en mode "Riv" (probablement retrait en magasin ou une autre forme de disponibilité).

Cette classe contient uniquement ces deux propriétés booléennes publiques, sans autres méthodes ou constantes associées.

### D�claration TypeScript
```typescript
interface RivSfsDispoInfo {
    est_sfs: boolean; // Indicates availability in Ship From Store mode
    est_riv: boolean; // Indicates availability in 'Riv' mode
}
```