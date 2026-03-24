## DetailCalulDelai

This class represents a detail entry for delay calculation within the context of shipments. It includes the following properties:
- Count: an integer indicating a count related to the calculation detail.
- Type: a string representing the type of calculation detail.
- CodeRaison (ReasonCode): a string code corresponding to the reason or cause associated with the calculation.
- Remarques (Remarks): a string for any additional comments or notes.

This class is used to provide detailed breakdowns or reasons during the processing of logistics delay calculations.

### TypeScript class
```typescript
interface DetailCalulDelai {
  Count: number;
  Type: string;
  CodeRaison: string;
  Remarques: string;
}
```