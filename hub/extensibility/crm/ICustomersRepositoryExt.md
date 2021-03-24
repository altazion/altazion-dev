# Module de base client

En complément de l'interface `Altazion.Hub.Common.IAltazionHubModule`, votre module devra implémenter l'interface `CPointSoftware.Equihira.Extensibility.ICustomersRepositoryExt4`.

``` csharp
using CPointSoftware.Equihira.Extensibility;

partial class URCustomerRepository : ICustomersRepositoryExt4
{
    //...
}
```