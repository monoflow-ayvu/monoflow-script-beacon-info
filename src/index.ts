import * as MonoUtils from "@fermuch/monoutils";
import { BeaconData } from "./minew_data";

declare class BeaconScanEvent extends MonoUtils.wk.event.BaseEvent {
  kind: 'beacon-scan-event';
  beacons: BeaconData[];
  getData(): {beacons: BeaconData[]};
}

// based on settingsSchema @ package.json
type Config = Record<string, unknown> & {}
const conf = new MonoUtils.config.Config<Config>();

MonoUtils.wk.event.subscribe<BeaconScanEvent>('beacon-scan-event', function(event) {
  platform.log(`Beacons: ${JSON.stringify(event.beacons)}`);
});