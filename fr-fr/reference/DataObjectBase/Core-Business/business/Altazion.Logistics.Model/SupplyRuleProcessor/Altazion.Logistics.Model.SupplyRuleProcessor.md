## SupplyRuleProcessor

La classe SupplyRuleProcessor représente un détail de règle d'approvisionnement avec sa classe de traitement et sa configuration. 

Propriétés publiques :
- Id : Guid unique identifiant le processeur de règle.
- SupplyRuleId : Guid unique identifiant la règle d'approvisionnement parente.
- ClassName : Chaîne de caractères représentant le nom complet de la classe implémentant le traitement.
- Config : Chaîne de caractères contenant la configuration du processeur, au format JSON ou XML.
- Rank : Entier définissant le rang d'exécution du processeur dans la chaîne de traitement.

Méthodes importantes :
- GetKey() : retourne la clé unique de l'objet, ici l'Id du processeur.
- FromDataRow(DataRow dr) : initialise les propriétés de l'objet à partir d'une ligne de données.

### D�claration TypeScript
```typescript
interface SupplyRuleProcessor {
  Id: string; // Guid
  SupplyRuleId: string; // Guid
  ClassName: string | null;
  Config: string | null;
  Rank: number;
}
```