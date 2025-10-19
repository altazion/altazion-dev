## WebSiteWithUrls

La classe WebSiteWithUrls représente un site web avec ses propriétés et configurations, complétée par une liste d'URLs secondaires associées.

Elle hérite de la classe WebSite et ajoute la propriété suivante :

- SecondaryUrls : Liste d'objets WebSiteUrl représentant les URLs secondaires associées au site web.

Cette classe permet de gérer un site web principal avec ses attributs ainsi que plusieurs URLs secondaires pour une gestion plus complète des adresses associées.

### D�claration TypeScript
```typescript
interface WebSiteUrl {
    Pk: number;
    SitePk: number;
    Url: string | null;
    Role: string | null;
}

interface WebSite {
    Code: string | null;
    Id: number;
    Label: string | null;
    Theme: string | null;
    CssTheme: string | null;
    MasterPage: string | null;
    RjsId: number;
    MainCategoryId: number;
    DefaultNewsletterId?: number | null;
    MainUrl: string | null;
    CustomerServicePhone: string | null;
    EmailServiceClient: string | null;
    HorairesServiceClient: string | null;
    DefaultPostalCode: string | null;
    DefaultCountryPk: string | null;
    DefaultCulture: string | null;
    DefaultCurrency?: string | null; // GUID represented as string
    SiteParentId?: number | null;
    IsECommerce: boolean;
    IsInProduction: boolean;
    Description: string | null;
    Title: string | null;
    IsPrivate: boolean;
    RootSearchPath: string | null;
    RootProductPath: string | null;
    RootPath: string | null;
    ThemeGuid?: string | null; // GUID as string
    WebOmsSourceGuid?: string | null; // GUID as string
    StoreOmsSourceGuid?: string | null; // GUID as string
}

interface WebSiteWithUrls extends WebSite {
    SecondaryUrls: WebSiteUrl[];
}
```