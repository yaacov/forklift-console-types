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
import type { IoK8sApiResourceV1alpha2ResourceClaimSpec } from './IoK8sApiResourceV1alpha2ResourceClaimSpec';
import {
    IoK8sApiResourceV1alpha2ResourceClaimSpecFromJSON,
    IoK8sApiResourceV1alpha2ResourceClaimSpecFromJSONTyped,
    IoK8sApiResourceV1alpha2ResourceClaimSpecToJSON,
} from './IoK8sApiResourceV1alpha2ResourceClaimSpec';
import type { IoK8sApiResourceV1alpha2ResourceClaimStatus } from './IoK8sApiResourceV1alpha2ResourceClaimStatus';
import {
    IoK8sApiResourceV1alpha2ResourceClaimStatusFromJSON,
    IoK8sApiResourceV1alpha2ResourceClaimStatusFromJSONTyped,
    IoK8sApiResourceV1alpha2ResourceClaimStatusToJSON,
} from './IoK8sApiResourceV1alpha2ResourceClaimStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * ResourceClaim describes which resources are needed by a resource consumer. Its status tracks whether the resource has been allocated and what the resulting attributes are.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 * @export
 * @interface IoK8sApiResourceV1alpha2ResourceClaim
 */
export interface IoK8sApiResourceV1alpha2ResourceClaim {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaim
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaim
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaim
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiResourceV1alpha2ResourceClaimSpec}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaim
     */
    spec: IoK8sApiResourceV1alpha2ResourceClaimSpec;
    /**
     * 
     * @type {IoK8sApiResourceV1alpha2ResourceClaimStatus}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaim
     */
    status?: IoK8sApiResourceV1alpha2ResourceClaimStatus;
}

/**
 * Check if a given object implements the IoK8sApiResourceV1alpha2ResourceClaim interface.
 */
export function instanceOfIoK8sApiResourceV1alpha2ResourceClaim(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function IoK8sApiResourceV1alpha2ResourceClaimFromJSON(json: any): IoK8sApiResourceV1alpha2ResourceClaim {
    return IoK8sApiResourceV1alpha2ResourceClaimFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2ResourceClaimFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha2ResourceClaim {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': IoK8sApiResourceV1alpha2ResourceClaimSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiResourceV1alpha2ResourceClaimStatusFromJSON(json['status']),
    };
}

export function IoK8sApiResourceV1alpha2ResourceClaimToJSON(value?: IoK8sApiResourceV1alpha2ResourceClaim | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiResourceV1alpha2ResourceClaimSpecToJSON(value.spec),
        'status': IoK8sApiResourceV1alpha2ResourceClaimStatusToJSON(value.status),
    };
}

