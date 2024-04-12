/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { V1I6300ESBWatchdog } from './V1I6300ESBWatchdog';
import {
    V1I6300ESBWatchdogFromJSON,
    V1I6300ESBWatchdogFromJSONTyped,
    V1I6300ESBWatchdogToJSON,
} from './V1I6300ESBWatchdog';

/**
 * Named watchdog device.
 * @export
 * @interface V1Watchdog
 */
export interface V1Watchdog {
    /**
     * 
     * @type {V1I6300ESBWatchdog}
     * @memberof V1Watchdog
     */
    i6300esb?: V1I6300ESBWatchdog;
    /**
     * Name of the watchdog.
     * @type {string}
     * @memberof V1Watchdog
     */
    name: string;
}

/**
 * Check if a given object implements the V1Watchdog interface.
 */
export function instanceOfV1Watchdog(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1WatchdogFromJSON(json: any): V1Watchdog {
    return V1WatchdogFromJSONTyped(json, false);
}

export function V1WatchdogFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Watchdog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'i6300esb': !exists(json, 'i6300esb') ? undefined : V1I6300ESBWatchdogFromJSON(json['i6300esb']),
        'name': json['name'],
    };
}

export function V1WatchdogToJSON(value?: V1Watchdog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'i6300esb': V1I6300ESBWatchdogToJSON(value.i6300esb),
        'name': value.name,
    };
}

