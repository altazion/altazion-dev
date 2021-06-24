# Notification web-socket

## Gestion des broadcasts

```typescript
    $rootScope.$on("refreshDeviceStatus", (evt, deviceGuid: string, currentApp: string, currentStatus: string, currentTheme: string) => {
    });
```

## Notifications envoyées

### InvokeScreen

`$rootScope.$broadcast('invokeScreen', screenData:InvokeScreenData);`

```typescript
    class InvokeScreenData {
        public ScreenName: string;
        public InvokeDataKind: string;
        public InvokeData: string;
    }
```

### ForceRefresh

`$rootScope.$broadcast('invokeScreen', data:string)`

La chaine de caractères `data` est normalement vide (`""`), n'a pas de signification particulière et peut être ignorée.

### BotResponse

`$rootScope.$broadcast('botResponse', data:string)`

### HelpNeeded

Ce message est envoyé depuis une borne ou un smartphone vendeur. Il ne vous sera utile que si vous développez une template "back-office" ou similaire.

`$rootScope.$broadcast('displayHelpNotification', data:string)`

La chaine de caractères `data` contient le message saisi (ou associé au bouton d'aide) dans l'application appelante.

### InvokeRefreshCommande

`$rootScope.$broadcast('InvokeRefreshCommande', message)`

Le paramètre `message` peut être ignoré.

### RefreshDeviceStatus

`$rootScope.$broadcast('refreshDeviceStatus', deviceGuid, currentApp, currentStatus, currentTheme)`

Les paramètres ont les significations suivantes :

- `deviceGuid` : l'identifiant du device qui a envoyé une notification de changement d'état
- `currentApp` : le nom du socle ("vending" ou "concierge" par exemple)
- `currentStatus` : une chaine représentant l'état (affichable au client)
- `currentTheme` : le nom du thème applicatif actuellement actif sur le device
