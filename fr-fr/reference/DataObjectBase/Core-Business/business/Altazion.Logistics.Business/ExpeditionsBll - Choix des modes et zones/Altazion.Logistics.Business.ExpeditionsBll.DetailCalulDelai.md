## DetailCalulDelai

Cette classe représente un détail du calcul de délai dans le contexte des expéditions. Elle contient les propriétés suivantes :
- Count : un entier indiquant un nombre associé au détail du calcul.
- Type : une chaîne de caractères représentant le type du détail de calcul.
- CodeRaison : une chaîne de caractères correspondant au code de la raison ou motif associé.
- Remarques : une chaîne de caractères pour des commentaires ou remarques complémentaires.

Cette classe sert à détailler les étapes ou raisons de calculs dans le traitement des délais logistiques.

### D�claration TypeScript
```typescript
interface DetailCalulDelai {
  Count: number;
  Type: string;
  CodeRaison: string;
  Remarques: string;
}
```