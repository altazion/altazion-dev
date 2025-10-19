## WebSiteWithUrls

The WebSiteWithUrls class represents a website with its properties and configurations, extended by a list of associated secondary URLs.

It inherits from the WebSite class and adds the following property:

- SecondaryUrls: A list of WebSiteUrl objects representing the secondary URLs associated with the website.

This class enables handling a main website with its attributes along with multiple secondary URLs for a more comprehensive URL management.

### TypeScript class
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