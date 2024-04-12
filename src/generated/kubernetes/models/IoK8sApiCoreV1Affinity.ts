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
import type { IoK8sApiCoreV1NodeAffinity } from './IoK8sApiCoreV1NodeAffinity';
import {
    IoK8sApiCoreV1NodeAffinityFromJSON,
    IoK8sApiCoreV1NodeAffinityFromJSONTyped,
    IoK8sApiCoreV1NodeAffinityToJSON,
} from './IoK8sApiCoreV1NodeAffinity';
import type { IoK8sApiCoreV1PodAffinity } from './IoK8sApiCoreV1PodAffinity';
import {
    IoK8sApiCoreV1PodAffinityFromJSON,
    IoK8sApiCoreV1PodAffinityFromJSONTyped,
    IoK8sApiCoreV1PodAffinityToJSON,
} from './IoK8sApiCoreV1PodAffinity';
import type { IoK8sApiCoreV1PodAntiAffinity } from './IoK8sApiCoreV1PodAntiAffinity';
import {
    IoK8sApiCoreV1PodAntiAffinityFromJSON,
    IoK8sApiCoreV1PodAntiAffinityFromJSONTyped,
    IoK8sApiCoreV1PodAntiAffinityToJSON,
} from './IoK8sApiCoreV1PodAntiAffinity';

/**
 * Affinity is a group of affinity scheduling rules.
 * @export
 * @interface IoK8sApiCoreV1Affinity
 */
export interface IoK8sApiCoreV1Affinity {
    /**
     * 
     * @type {IoK8sApiCoreV1NodeAffinity}
     * @memberof IoK8sApiCoreV1Affinity
     */
    nodeAffinity?: IoK8sApiCoreV1NodeAffinity;
    /**
     * 
     * @type {IoK8sApiCoreV1PodAffinity}
     * @memberof IoK8sApiCoreV1Affinity
     */
    podAffinity?: IoK8sApiCoreV1PodAffinity;
    /**
     * 
     * @type {IoK8sApiCoreV1PodAntiAffinity}
     * @memberof IoK8sApiCoreV1Affinity
     */
    podAntiAffinity?: IoK8sApiCoreV1PodAntiAffinity;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1Affinity interface.
 */
export function instanceOfIoK8sApiCoreV1Affinity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1AffinityFromJSON(json: any): IoK8sApiCoreV1Affinity {
    return IoK8sApiCoreV1AffinityFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1AffinityFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1Affinity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nodeAffinity': !exists(json, 'nodeAffinity') ? undefined : IoK8sApiCoreV1NodeAffinityFromJSON(json['nodeAffinity']),
        'podAffinity': !exists(json, 'podAffinity') ? undefined : IoK8sApiCoreV1PodAffinityFromJSON(json['podAffinity']),
        'podAntiAffinity': !exists(json, 'podAntiAffinity') ? undefined : IoK8sApiCoreV1PodAntiAffinityFromJSON(json['podAntiAffinity']),
    };
}

export function IoK8sApiCoreV1AffinityToJSON(value?: IoK8sApiCoreV1Affinity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nodeAffinity': IoK8sApiCoreV1NodeAffinityToJSON(value.nodeAffinity),
        'podAffinity': IoK8sApiCoreV1PodAffinityToJSON(value.podAffinity),
        'podAntiAffinity': IoK8sApiCoreV1PodAntiAffinityToJSON(value.podAntiAffinity),
    };
}

