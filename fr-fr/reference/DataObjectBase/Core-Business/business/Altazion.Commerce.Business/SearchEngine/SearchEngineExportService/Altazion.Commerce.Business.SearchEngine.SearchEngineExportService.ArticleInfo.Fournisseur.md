## Fournisseur

La classe Fournisseur représente un fournisseur associé à un article dans le contexte du service d'exportation du moteur de recherche.

Propriétés publiques :
- far_guid: Identifiant unique (GUID) du fournisseur.
- far_pu_ttc: Prix unitaire toutes taxes comprises proposé par le fournisseur pour l'article.

### D�claration TypeScript
```typescript
interface Fournisseur {
  /** Unique identifier (GUID) of the supplier */
  far_guid: string;
  /** Unit price including all taxes offered by the supplier for the article */
  far_pu_ttc: number;
}
```