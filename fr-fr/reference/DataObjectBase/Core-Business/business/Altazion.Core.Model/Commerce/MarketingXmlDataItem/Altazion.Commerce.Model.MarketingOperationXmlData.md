## MarketingOperationXmlData

La classe MarketingOperationXmlData représente des données XML associées à une étape d'opération commerciale.

Propriétés publiques :
- Guid : Identifiant unique de l'enregistrement (de type Guid).
- OperationStepGuid : Identifiant de l'étape d'opération associée (de type Guid).
- XmlData : Données XML stockées (de type string).

Cette classe permet de charger ses propriétés à partir d'une ligne de données (DataRow) et valide la présence des identifiants requis (Guid et OperationStepGuid).

### D�claration TypeScript
```typescript
interface MarketingOperationXmlData {
  Guid: string; // Unique identifier (UUID/GUID) of the record
  OperationStepGuid: string; // Identifier (UUID/GUID) of the associated operation step
  XmlData: string | null; // Stored XML data
}
```