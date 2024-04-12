/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { IoK8sApiDiscoveryV1ForZone } from './IoK8sApiDiscoveryV1ForZone';
import {
    IoK8sApiDiscoveryV1ForZoneFromJSON,
    IoK8sApiDiscoveryV1ForZoneFromJSONTyped,
    IoK8sApiDiscoveryV1ForZoneToJSON,
} from './IoK8sApiDiscoveryV1ForZone';

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 * @export
 * @interface IoK8sApiDiscoveryV1EndpointHints
 */
export interface IoK8sApiDiscoveryV1EndpointHints {
    /**
     * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
     * @type {Array<IoK8sApiDiscoveryV1ForZone>}
     * @memberof IoK8sApiDiscoveryV1EndpointHints
     */
    forZones?: Array<IoK8sApiDiscoveryV1ForZone>;
}

/**
 * Check if a given object implements the IoK8sApiDiscoveryV1EndpointHints interface.
 */
export function instanceOfIoK8sApiDiscoveryV1EndpointHints(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiDiscoveryV1EndpointHintsFromJSON(json: any): IoK8sApiDiscoveryV1EndpointHints {
    return IoK8sApiDiscoveryV1EndpointHintsFromJSONTyped(json, false);
}

export function IoK8sApiDiscoveryV1EndpointHintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiDiscoveryV1EndpointHints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forZones': !exists(json, 'forZones') ? undefined : ((json['forZones'] as Array<any>).map(IoK8sApiDiscoveryV1ForZoneFromJSON)),
    };
}

export function IoK8sApiDiscoveryV1EndpointHintsToJSON(value?: IoK8sApiDiscoveryV1EndpointHints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forZones': value.forZones === undefined ? undefined : ((value.forZones as Array<any>).map(IoK8sApiDiscoveryV1ForZoneToJSON)),
    };
}

