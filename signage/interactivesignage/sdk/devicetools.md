# Device

## ConfigurationManager

### Configuration du device

- `getRootData(success: (device: DeviceConfigData) => void)`

### Etat des devices du magasin

-`getDevices(done: (data: any) => void)`

- `getDeviceStatus(success: (devices: DevicesStatus) => void)`


-`(deviceGuid: string, currentApp: string, currentStatus: string, value: string = null): void`

Envoie au serveur (et aux autres devices) une info 


-`SendMessage(deviceGuid: string, currentStatus: string, currentApp: string, data: string): void`
