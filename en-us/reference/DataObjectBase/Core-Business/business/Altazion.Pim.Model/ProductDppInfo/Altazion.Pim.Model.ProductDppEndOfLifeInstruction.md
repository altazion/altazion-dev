## ProductDppEndOfLifeInstruction

Class representing an end-of-life instruction for a product in a given language.

Public properties:
- WasteCode: Waste code according to the European Waste List (WFD), e.g., "20 01 35".
- Instruction: Sorting or recycling instruction associated with the waste code.
- Language: ISO 639-1 language code (e.g., "fr", "en", "de") indicating the language of the instruction.

### TypeScript class
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