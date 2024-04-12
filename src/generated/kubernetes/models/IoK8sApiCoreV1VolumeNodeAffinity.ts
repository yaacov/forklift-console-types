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
import type { IoK8sApiCoreV1NodeSelector } from './IoK8sApiCoreV1NodeSelector';
import {
    IoK8sApiCoreV1NodeSelectorFromJSON,
    IoK8sApiCoreV1NodeSelectorFromJSONTyped,
    IoK8sApiCoreV1NodeSelectorToJSON,
} from './IoK8sApiCoreV1NodeSelector';

/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 * @export
 * @interface IoK8sApiCoreV1VolumeNodeAffinity
 */
export interface IoK8sApiCoreV1VolumeNodeAffinity {
    /**
     * 
     * @type {IoK8sApiCoreV1NodeSelector}
     * @memberof IoK8sApiCoreV1VolumeNodeAffinity
     */
    required?: IoK8sApiCoreV1NodeSelector;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1VolumeNodeAffinity interface.
 */
export function instanceOfIoK8sApiCoreV1VolumeNodeAffinity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1VolumeNodeAffinityFromJSON(json: any): IoK8sApiCoreV1VolumeNodeAffinity {
    return IoK8sApiCoreV1VolumeNodeAffinityFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1VolumeNodeAffinityFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1VolumeNodeAffinity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'required': !exists(json, 'required') ? undefined : IoK8sApiCoreV1NodeSelectorFromJSON(json['required']),
    };
}

export function IoK8sApiCoreV1VolumeNodeAffinityToJSON(value?: IoK8sApiCoreV1VolumeNodeAffinity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'required': IoK8sApiCoreV1NodeSelectorToJSON(value.required),
    };
}

