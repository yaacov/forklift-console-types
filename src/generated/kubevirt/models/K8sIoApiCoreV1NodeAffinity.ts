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
import type { K8sIoApiCoreV1NodeSelector } from './K8sIoApiCoreV1NodeSelector';
import {
    K8sIoApiCoreV1NodeSelectorFromJSON,
    K8sIoApiCoreV1NodeSelectorFromJSONTyped,
    K8sIoApiCoreV1NodeSelectorToJSON,
} from './K8sIoApiCoreV1NodeSelector';
import type { K8sIoApiCoreV1PreferredSchedulingTerm } from './K8sIoApiCoreV1PreferredSchedulingTerm';
import {
    K8sIoApiCoreV1PreferredSchedulingTermFromJSON,
    K8sIoApiCoreV1PreferredSchedulingTermFromJSONTyped,
    K8sIoApiCoreV1PreferredSchedulingTermToJSON,
} from './K8sIoApiCoreV1PreferredSchedulingTerm';

/**
 * Node affinity is a group of node affinity scheduling rules.
 * @export
 * @interface K8sIoApiCoreV1NodeAffinity
 */
export interface K8sIoApiCoreV1NodeAffinity {
    /**
     * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
     * @type {Array<K8sIoApiCoreV1PreferredSchedulingTerm>}
     * @memberof K8sIoApiCoreV1NodeAffinity
     */
    preferredDuringSchedulingIgnoredDuringExecution?: Array<K8sIoApiCoreV1PreferredSchedulingTerm>;
    /**
     * 
     * @type {K8sIoApiCoreV1NodeSelector}
     * @memberof K8sIoApiCoreV1NodeAffinity
     */
    requiredDuringSchedulingIgnoredDuringExecution?: K8sIoApiCoreV1NodeSelector;
}

/**
 * Check if a given object implements the K8sIoApiCoreV1NodeAffinity interface.
 */
export function instanceOfK8sIoApiCoreV1NodeAffinity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function K8sIoApiCoreV1NodeAffinityFromJSON(json: any): K8sIoApiCoreV1NodeAffinity {
    return K8sIoApiCoreV1NodeAffinityFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1NodeAffinityFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1NodeAffinity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preferredDuringSchedulingIgnoredDuringExecution': !exists(json, 'preferredDuringSchedulingIgnoredDuringExecution') ? undefined : ((json['preferredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(K8sIoApiCoreV1PreferredSchedulingTermFromJSON)),
        'requiredDuringSchedulingIgnoredDuringExecution': !exists(json, 'requiredDuringSchedulingIgnoredDuringExecution') ? undefined : K8sIoApiCoreV1NodeSelectorFromJSON(json['requiredDuringSchedulingIgnoredDuringExecution']),
    };
}

export function K8sIoApiCoreV1NodeAffinityToJSON(value?: K8sIoApiCoreV1NodeAffinity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preferredDuringSchedulingIgnoredDuringExecution': value.preferredDuringSchedulingIgnoredDuringExecution === undefined ? undefined : ((value.preferredDuringSchedulingIgnoredDuringExecution as Array<any>).map(K8sIoApiCoreV1PreferredSchedulingTermToJSON)),
        'requiredDuringSchedulingIgnoredDuringExecution': K8sIoApiCoreV1NodeSelectorToJSON(value.requiredDuringSchedulingIgnoredDuringExecution),
    };
}

