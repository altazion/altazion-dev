## PurchaseOrderAnomaly

Cette classe représente une anomalie détectée sur un bon de commande dans le module logistique. Une anomalie peut être une erreur bloquante, un avertissement ou un contrôle qualité.

Propriétés publiques :
- Id : Identifiant unique de l'anomalie (type Guid).
- PurchaseOrderGuid : Identifiant du bon de commande concerné (type Guid).
- IsError : Indique si l'anomalie est une erreur bloquante (true) ou un avertissement (false).
- Rail : Rail ou étape du workflow où l'anomalie a été détectée, propriété optionnelle (string nullable).
- Code : Code court identifiant le type d'anomalie (string, obligatoire, max 10 caractères).
- Description : Description détaillée de l'anomalie (string nullable, max 250 caractères).
- IsProcessed : Indique si l'anomalie a été traitée ou résolue (bool nullable).
- Score : Score de criticité de l'anomalie, plus il est élevé, plus l'anomalie est critique (int, non négatif).

### D�claration TypeScript
```typescript
interface PurchaseOrderAnomaly {
  Id: string; // GUID unique identifier of the anomaly
  PurchaseOrderGuid: string; // GUID of the related purchase order
  IsError: boolean; // True if this is a blocking error, false if warning
  Rail?: string | null; // Optional workflow step or rail where anomaly was detected
  Code: string; // Short code identifying type of anomaly, max length 10
  Description?: string | null; // Optional detailed description, max 250 chars
  IsProcessed?: boolean | null; // Whether anomaly has been processed/resolved
  Score: number; // Criticality score, non-negative integer
}
```