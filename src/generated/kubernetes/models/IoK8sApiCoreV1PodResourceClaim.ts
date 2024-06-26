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
import type { IoK8sApiCoreV1ClaimSource } from './IoK8sApiCoreV1ClaimSource';
import {
    IoK8sApiCoreV1ClaimSourceFromJSON,
    IoK8sApiCoreV1ClaimSourceFromJSONTyped,
    IoK8sApiCoreV1ClaimSourceToJSON,
} from './IoK8sApiCoreV1ClaimSource';

/**
 * PodResourceClaim references exactly one ResourceClaim through a ClaimSource. It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
 * @export
 * @interface IoK8sApiCoreV1PodResourceClaim
 */
export interface IoK8sApiCoreV1PodResourceClaim {
    /**
     * Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodResourceClaim
     */
    name: string;
    /**
     * 
     * @type {IoK8sApiCoreV1ClaimSource}
     * @memberof IoK8sApiCoreV1PodResourceClaim
     */
    source?: IoK8sApiCoreV1ClaimSource;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1PodResourceClaim interface.
 */
export function instanceOfIoK8sApiCoreV1PodResourceClaim(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiCoreV1PodResourceClaimFromJSON(json: any): IoK8sApiCoreV1PodResourceClaim {
    return IoK8sApiCoreV1PodResourceClaimFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PodResourceClaimFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1PodResourceClaim {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'source': !exists(json, 'source') ? undefined : IoK8sApiCoreV1ClaimSourceFromJSON(json['source']),
    };
}

export function IoK8sApiCoreV1PodResourceClaimToJSON(value?: IoK8sApiCoreV1PodResourceClaim | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'source': IoK8sApiCoreV1ClaimSourceToJSON(value.source),
    };
}

