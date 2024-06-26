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
/**
 * CPUFeature allows specifying a CPU feature.
 * @export
 * @interface V1CPUFeature
 */
export interface V1CPUFeature {
    /**
     * Name of the CPU feature
     * @type {string}
     * @memberof V1CPUFeature
     */
    name: string;
    /**
     * Policy is the CPU feature attribute which can have the following attributes: force    - The virtual CPU will claim the feature is supported regardless of it being supported by host CPU. require  - Guest creation will fail unless the feature is supported by the host CPU or the hypervisor is able to emulate it. optional - The feature will be supported by virtual CPU if and only if it is supported by host CPU. disable  - The feature will not be supported by virtual CPU. forbid   - Guest creation will fail if the feature is supported by host CPU. Defaults to require
     * @type {string}
     * @memberof V1CPUFeature
     */
    policy?: string;
}

/**
 * Check if a given object implements the V1CPUFeature interface.
 */
export function instanceOfV1CPUFeature(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1CPUFeatureFromJSON(json: any): V1CPUFeature {
    return V1CPUFeatureFromJSONTyped(json, false);
}

export function V1CPUFeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CPUFeature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'policy': !exists(json, 'policy') ? undefined : json['policy'],
    };
}

export function V1CPUFeatureToJSON(value?: V1CPUFeature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'policy': value.policy,
    };
}

