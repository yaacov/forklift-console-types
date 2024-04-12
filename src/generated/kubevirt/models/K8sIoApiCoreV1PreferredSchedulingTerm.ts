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
import type { K8sIoApiCoreV1NodeSelectorTerm } from './K8sIoApiCoreV1NodeSelectorTerm';
import {
    K8sIoApiCoreV1NodeSelectorTermFromJSON,
    K8sIoApiCoreV1NodeSelectorTermFromJSONTyped,
    K8sIoApiCoreV1NodeSelectorTermToJSON,
} from './K8sIoApiCoreV1NodeSelectorTerm';

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 * @export
 * @interface K8sIoApiCoreV1PreferredSchedulingTerm
 */
export interface K8sIoApiCoreV1PreferredSchedulingTerm {
    /**
     * 
     * @type {K8sIoApiCoreV1NodeSelectorTerm}
     * @memberof K8sIoApiCoreV1PreferredSchedulingTerm
     */
    preference: K8sIoApiCoreV1NodeSelectorTerm;
    /**
     * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
     * @type {number}
     * @memberof K8sIoApiCoreV1PreferredSchedulingTerm
     */
    weight: number;
}

/**
 * Check if a given object implements the K8sIoApiCoreV1PreferredSchedulingTerm interface.
 */
export function instanceOfK8sIoApiCoreV1PreferredSchedulingTerm(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "preference" in value;
    isInstance = isInstance && "weight" in value;

    return isInstance;
}

export function K8sIoApiCoreV1PreferredSchedulingTermFromJSON(json: any): K8sIoApiCoreV1PreferredSchedulingTerm {
    return K8sIoApiCoreV1PreferredSchedulingTermFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1PreferredSchedulingTermFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1PreferredSchedulingTerm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preference': K8sIoApiCoreV1NodeSelectorTermFromJSON(json['preference']),
        'weight': json['weight'],
    };
}

export function K8sIoApiCoreV1PreferredSchedulingTermToJSON(value?: K8sIoApiCoreV1PreferredSchedulingTerm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preference': K8sIoApiCoreV1NodeSelectorTermToJSON(value.preference),
        'weight': value.weight,
    };
}
