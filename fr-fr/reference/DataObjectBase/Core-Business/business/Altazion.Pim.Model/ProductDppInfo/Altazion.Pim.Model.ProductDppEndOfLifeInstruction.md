## ProductDppEndOfLifeInstruction

Classe représentant une instruction de fin de vie pour un produit dans une langue donnée.

Propriétés publiques :
- WasteCode : Code déchet selon la liste européenne des déchets (WFD), par exemple "20 01 35".
- Instruction : Instruction de tri ou de recyclage associée à ce code déchet.
- Language : Code langue ISO 639-1 (ex : "fr", "en", "de") indiquant la langue de l'instruction.

### D�claration TypeScript
```typescript
interface ProductDppEndOfLifeInstruction {
  /** Waste code according to the European Waste List (WFD), e.g., "20 01 35". */
  wasteCode: string;

  /** Sorting or recycling instruction. */
  instruction: string;

  /** ISO 639-1 language code (e.g., "fr", "en", "de"). */
  language: string;
}
```