# Logs

## Consultation

### OnPremise

Les logs sont regroupés en fonction de l'application qui les génère. Chaque application de la solution a son propre dosier de traces, situé dans un sous-dossier spécifique sous la racine [$ROOTBINFOLDER$]([https://aide.altazion.com/fr-fr/administration/onpremise/dossier.html](https://aide.altazion.com/fr-fr/administration/onpremise/dossier.html)).

Application|Nom du sous dossier
---|---
Back-Office/Gestion commerciale|services\logs
e-commerce|e-commerce\logs
API et intégrations externes|integration\logs
Serveur de traitement|logistique\logs
Outils d'aide à la vente + API Phygitale|poscentral\logs

Certaines services (principalement le servirce "OnPremise" gérant les mises à jour et le monitoring du système) tracent dans un dossier logs directement situé sous [$ROOTBINFOLDER$](https://aide.altazion.com/fr-fr/administration/onpremise/dossier.html).

>[!WARNING]
> Pour des raisons purement techniques, le module de traitement "batchs" ne regroupe plus, depuis quelques versions les traces dans son dossier spécifique. Il utilise le paramètre `EServer.Service` des méthodes de traces pour déterminer le dossier de stockage.

> Cela ne devrait plus durer très longtemps, mais complique quelque peu la recherche des traces dans l'interval :)

#### Fichiers des logs

Les fichiers de logs sont regroupés en plusieurs ensembles de fichiers :
1. Les fichiers d'erreurs, journaliers, regroupent toutes les traces ... d'erreurs... mais aussi les warnings. Ils sont nommés sous la forme `err_{date:yyyyMMdd}.log`
2. les fichiers généraux sont eux splitté en fichier horaire et contiennent toutes les traces, quelques soit le niveau de criticité. Ils sont nommés `infos_{date:yyyyMMdd}-{date:HH}.log`
3. vous pouvez aussi ajouter des fichiers de logs spécifiques (ils seront forcément au format "horaire"), cf. un peu plus bas.

#### Format

En mode OnPremise, les fichiers suivent les spécificités suivantes :
- au format "texte délimité", le caractère de séparation entre colonne étant le pipe  `|`
- encodé en format Windows "de base"
- une ligne par trace, les passages à la ligne dans la trace étant remplacés par des espaces

Les différentes colonnes sont :
- date & heure au format yyyy-MM-dd HH:mm:ss
- le type de trace : info, erreur, warning,critique (pour erreur critique)
- l'id du process de l'OS, sous la forme pid:xxxx ou xxxx est l'identifiant du process
- la "zone applicative" dans laquelle s'est déroulée la trace ou "-" pour des traces générales
- la trace en elle même

exemple :
``` text
2019-04-09 19:17:52|info|pid:26528|Init|Redirection du dossier de configuration vers C:\ProgramData\CPoint\[e]\bin\config|
2019-04-09 19:17:53|info|pid:26528|-|Copie des extensions MEF depuis C:\ProgramData\CPoint\[e]\bin\logistique\assemblies vers C:\ProgramData\CPoint\[e]\bin\logistique\runningInstance\26528\assemblies|
2019-04-09 19:17:53|info|pid:26528|-|Copie des extensions MEF depuis C:\ProgramData\CPoint\[e]\extensibility\logistique\assemblies vers C:\ProgramData\CPoint\[e]\extensibility\logistique\runningInstance\26528\assemblies|
```
## Créer des traces

Maintenant que vous savez comment consulter les traces, il reste à en créer... Pour cela, la solution propose une classe [`BasicLogHelper`](../api/CPointSoftware.Equihira.Business.Common.BasicLogHelper.html).

En utilisant cette classe, vous pouvez créer :
- des traces informatives "simples" via [`TracerInfo`](../api/CPointSoftware.Equihira.Business.Common.BasicLogHelper.html#CPointSoftware_Equihira_Business_Common_BasicLogHelper_TracerInfo_System_Int32_CPointSoftware_Equihira_Business_Common_EServer_Service_System_String_) et ses dérivées
- des traces "warning" ([`TracerWarning`](../api/CPointSoftware.Equihira.Business.Common.BasicLogHelper.html#CPointSoftware_Equihira_Business_Common_BasicLogHelper_TracerWarning_System_Int32_CPointSoftware_Equihira_Business_Common_EServer_Service_System_Exception_
)) ou "erreur" ([`TracerErreur`](../api/CPointSoftware.Equihira.Business.Common.BasicLogHelper.html#CPointSoftware_Equihira_Business_Common_BasicLogHelper_TracerErreur_System_Int32_CPointSoftware_Equihira_Business_Common_EServer_Service_System_Exception_) ou [`TracerErreurCritique`](../api/CPointSoftware.Equihira.Business.Common.BasicLogHelper.html#CPointSoftware_Equihira_Business_Common_BasicLogHelper_TracerErreurCritique_System_Int32_CPointSoftware_Equihira_Business_Common_EServer_Service_System_Exception_)) à partir d'une `Exception`
- pour les erreurs, vous pouvez aussi utiliser une surchage de [`TracerErreur`](../api/CPointSoftware.Equihira.Business.Common.BasicLogHelper.html#CPointSoftware_Equihira_Business_Common_BasicLogHelper_TracerErreur_System_Int32_CPointSoftware_Equihira_Business_Common_EServer_Service_System_String_System_String_System_String_) qui accepte une erreur sous forme d'une chaîne de caractères.

Les paramètres de ces méthodes sont :
- une **RjsId** (c'est à dire [l'identifiant du tenant](technique-multitenant.md))
- un **[service](../api/CPointSoftware.Equihira.Business.Common.EServer.Service.html)** dans lequel l'évènement tracé s'est passée. _Ce paramètre est maintenant ignoré dans la plupart de cas : c'est l'application hébergeant le code qui détermine le service._
- une **zone** qui permet de découper l'application en plusieurs sections
- le **message** à tracer
- éventuellement un **logFileName** : le prefixe (à la place de `infos` ou  `err`) dans le nom du fichier
- en cas d'erreur, en lieu et place de message vous pouvez passer une `Exception`

Quelques exemples d'utilisation :
``` csharp
// tracer un message simple
BasicLogHelper.TracerInfo(rjs_id, EServer.Service.GestionCommerciale, 
    "Désinstallation du module " + urlModule);

// tracer un message avec une "zone applicative" (ici Systeme)
BasicLogHelper.TracerInfo(rjs_id, EServer.Service.GestionCommerciale, 
    "Systeme", "Désinstallation du module " + urlModule);

// tracer une exception
try 
{
// ... le code qui peut lancer l'exception
}
catch (Exception ex)
{
    BasicLogHelper.TracerErreurCritique(rjs_id, EServer.Service.ECommerce,
        "Config", ex);
}
```

## Considérations avancées OnPremise

Le module de trace est aussi capable de réaliser quelques opérations spécifiques, telle que :
- la centralisation des logs provenant de plusieurs serveurs (très utile en cas de service load-balancé par exemple)
- la compression et la suppression automatique des "vieux" fichiers de logs 

### Centralisation

Si vous êtes dans une configuration OnPremise, le _serveur principal_ peut être configuré pour centraliser les logs, les compresser et les archiver.
[En savoir plus](tools-mainsrv.md)

Si vous activez la centralisation des logs, ceux-ci sont déplacés, après 2h, du dossier décrit ci-dessus, vers un dossier configurable depuis la gestion commerciale. 

En complément de la centralisation, il est possible d'activer un processus de compression et de suppression automatique après un certain délai.

Pour configurer la centralisation des logs, vous devez définir l'option suivante pour la raison juridique d'id 1 en base de données :

Section|Groupe|Option|Valeur
---|---|---|---
System|Logs|PathCentralisation|_{le dossier dans lequel centraliser}_

Vous devez préciser le dossier sous la forme d'un path accessible pour l'utilisateur sous lequel tourne le service OnPremise. Si vous utilisez un lecteur partagé, par exemple, assurez vous que le mapping soit bien disponible et monté automatiquement. **Dans la mesure du possible, il est plus pratique d'utiliser un path UNC (sous la forme `\\server\nom_du_partage`).**

Par exemple, avec le module d'administration Powershell :

```Powershell
> Import-Module Altazion


> Connect-AltazionServer -ServerUrl *** -Username *** -Password ***

Id Name
-- ----
 1 Compte de test


> Set-AltazionSysOption -Section System -Group Logs -Option PathCentralisation 
       -Value '\\monserver\logs'

Section Group Option             Value
------- ----- ------             -----
System  Logs  PathCentralisation \\monserver\logs
```

>[!Note]
> Pour des détails sur comment est implémenté la centralisation, [consultez la documentation sur le service "on premise"](tools-mainsrv.md)
