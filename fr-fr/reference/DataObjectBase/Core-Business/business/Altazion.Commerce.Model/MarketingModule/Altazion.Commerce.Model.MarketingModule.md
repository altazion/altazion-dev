## MarketingModule

La classe MarketingModule représente un module marketing dans le système Altazion. Elle contient les propriétés suivantes :

- Guid : identifiant unique du module (type Guid).
- MarketingChannelGuid : identifiant unique du canal marketing associé (type Guid).
- Name : nom du module marketing (type string).
- Code : code du module marketing (type string).
- Description : description du module marketing (type string).
- ServerType : type de serveur lié au module (type string).
- ClientType : type de client lié au module (type string).
- ThemeGuid : identifiant optionnel du thème associé (type Guid?).
- MenuGuid : identifiant optionnel du menu associé (type Guid?).
- MenuNodeGuid : identifiant optionnel du nœud de menu associé (type Guid?).
- Grouping : regroupement associé au module (type string).
- XmlData : données XML optionnelles associées au module (type string).

### D�claration TypeScript
```typescript
interface MarketingModule {
  Guid: string; // GUID string representing the unique ID
  MarketingChannelGuid: string;
  Name: string | null;
  Code: string | null;
  Description: string | null;
  ServerType: string | null;
  ClientType: string | null;
  ThemeGuid?: string | null;
  MenuGuid?: string | null;
  MenuNodeGuid?: string | null;
  Grouping: string | null;
  XmlData: string | null;
}
```