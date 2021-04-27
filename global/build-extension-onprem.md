# Compiler et déployer votre extension

## Déploiement classique 

Lorsque vous développez des extensions, vous devez les déposer dans un dossier connu de la solution se trouvant sous la racine : 

**$ROOTEXTFOLDER$** = %ALLUSERSPROFILE%\Cpoint\\\[e]\extensibility

> [!NOTE]
> Le dossier `ext` peut être défini dans un autre emplacement en modifiant la configuration, si vous souhaitez, par exemple, placer un environnement de tests et un environnement de production sur le même serveur. Contactez notre service de support pour plus d'informations.

A l'intérieur de cette racine, vous pourrez déposer votre extensions dans l'un des sous dossiers suivants, en fonction du module que vous voulez étendre.

Module|Chemin|
---|---|
Altazion Office (ERP et Back Office) | **$ROOTEXTFOLDER$**\services |
Altazion e-commerce | **$ROOTEXTFOLDER$**\ecommerce |
Altazion Orchestrator (OMS et Batchs) | **$ROOTEXTFOLDER$**\logistique |
Altazion Store & Signage | **$ROOTEXTFOLDER$**\POSCentral |

> [!WARNING]
> Vous ne devez en aucun cas déposer vos extensions dans le dossier d'installation du programme dans cette configuration. Le programme de mise à jour, permettant l'installation des nos nouvelles versions, supprime tous les fichiers qu'il ne reconnait pas lors de la mise à jour.

## Deploiement Docker

Si vous utilisez docker, vous pouvez utiliser le même principe et déposer vos extensions dans le dossier d'extensibilité. Toutefois, comme il n'y a pas de mise à jour automatique de nos applications dans ce mode et que la dispersion des binaires n'est pas souhaitable dans un container, vous avez deux autres possibilités :

1. utiliser le montage de volume pour déployer le binaire sur l'hôte de vos containers et mapper ensuite ce dossier. 
2. créer votre propre image Docker en incluant vos spécifiques dans un sous-dossier de la solution.

### Mappage de dossier

Pour utiliser un dossier local pour fournir à la fois la configuration et les extensibilités, vous aurez besoin d'un volume contenant le dossier de configuration de votre installation, à mapper sur le dossier c:\programdata\cpoint\

Par exemple :

`docker run -v c:\programdata\cpoint\:c:\programdata\cpoint\ -d -p 8000:80 altazion/office:latest`

### Créer votre image Docker

Pour inclure directement vos extensions dans les containers que vous déploierez, il vous suffit de placer vos binaires et fichiers de configuration dans le sous dossier `/inetpub/wwwroot/custom-bin/` de l'image.

Voici un exemple de dockerfile vous permettant d'ajouter le contenu du dossier courant dans le path d'extensibilité `custom-bin`

```text
FROM altazion/office
COPY ./ /inetpub/wwwroot/custom-bin/
```
