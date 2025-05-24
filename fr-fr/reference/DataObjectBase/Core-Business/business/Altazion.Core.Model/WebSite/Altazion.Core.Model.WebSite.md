## WebSite

La classe WebSite représente un site web avec ses propriétés et configurations. Elle contient les propriétés publiques suivantes :

- Code : le code court du site web.
- Id : identifiant unique du site web.
- Label : libellé ou nom du site web.
- Theme : thème du site web.
- CssTheme : thème CSS utilisé par le site web.
- MasterPage : page maître utilisée par le site web.
- RjsId : identifiant RJS du site web.
- MainCategoryId : identifiant de la catégorie principale du site web.
- DefaultNewsletterId : identifiant de la newsletter par défaut (nullable).
- MainUrl : URL principale du site web.
- CustomerServicePhone : numéro de téléphone du service client.
- EmailServiceClient : email du service client.
- HorairesServiceClient : horaires d'ouverture du service client.
- DefaultPostalCode : code postal par défaut.
- DefaultCountryPk : code pays par défaut.
- DefaultCulture : culture par défaut du site web.
- DefaultCurrency : devise par défaut (nullable, GUID).
- SiteParentId : identifiant du site parent (nullable).
- IsECommerce : booléen indiquant si le site est un site e-commerce.
- IsInProduction : booléen indiquant si le site est en production.
- Description : description du site web.
- Title : titre du site web.
- IsPrivate : booléen indiquant si le site est privé.
- RootSearchPath : chemin racine pour les recherches.
- RootProductPath : chemin racine pour les produits.
- RootPath : chemin racine du site web.
- ThemeGuid : identifiant GUID du thème (nullable).
- WebOmsSourceGuid : GUID de la source OMS pour le web (nullable).
- StoreOmsSourceGuid : GUID de la source OMS pour le magasin (nullable).

Les méthodes incluent notamment une initialisation à partir d'une DataRow, et une validation élémentaire des données (notamment le format de l'URL principale).

Cette classe hérite de DataObjectBase et représente ainsi une classe de données dans le système.

### D�claration TypeScript
```typescript
interface WebSite {
  Code: string;
  Id: number;
  Label: string;
  Theme: string;
  CssTheme: string;
  MasterPage: string;
  RjsId: number;
  MainCategoryId: number;
  DefaultNewsletterId?: number | null;
  MainUrl: string;
  CustomerServicePhone: string;
  EmailServiceClient: string;
  HorairesServiceClient: string;
  DefaultPostalCode: string;
  DefaultCountryPk: string;
  DefaultCulture: string;
  DefaultCurrency?: string | null; // GUID represented as string
  SiteParentId?: number | null;
  IsECommerce: boolean;
  IsInProduction: boolean;
  Description: string;
  Title: string;
  IsPrivate: boolean;
  RootSearchPath: string;
  RootProductPath: string;
  RootPath: string;
  ThemeGuid?: string | null; // GUID represented as string
  WebOmsSourceGuid?: string | null; // GUID represented as string
  StoreOmsSourceGuid?: string | null; // GUID represented as string
}
```