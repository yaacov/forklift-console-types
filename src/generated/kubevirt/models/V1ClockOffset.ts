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
import type { V1ClockOffsetUTC } from './V1ClockOffsetUTC';
import {
    V1ClockOffsetUTCFromJSON,
    V1ClockOffsetUTCFromJSONTyped,
    V1ClockOffsetUTCToJSON,
} from './V1ClockOffsetUTC';

/**
 * Exactly one of its members must be set.
 * @export
 * @interface V1ClockOffset
 */
export interface V1ClockOffset {
    /**
     * Timezone sets the guest clock to the specified timezone. Zone name follows the TZ environment variable format (e.g. 'America/New_York').
     * @type {string}
     * @memberof V1ClockOffset
     */
    timezone?: string;
    /**
     * 
     * @type {V1ClockOffsetUTC}
     * @memberof V1ClockOffset
     */
    utc?: V1ClockOffsetUTC;
}

/**
 * Check if a given object implements the V1ClockOffset interface.
 */
export function instanceOfV1ClockOffset(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ClockOffsetFromJSON(json: any): V1ClockOffset {
    return V1ClockOffsetFromJSONTyped(json, false);
}

export function V1ClockOffsetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ClockOffset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'utc': !exists(json, 'utc') ? undefined : V1ClockOffsetUTCFromJSON(json['utc']),
    };
}

export function V1ClockOffsetToJSON(value?: V1ClockOffset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timezone': value.timezone,
        'utc': V1ClockOffsetUTCToJSON(value.utc),
    };
}

