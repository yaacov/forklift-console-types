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
import type { IoK8sApiResourceV1alpha2ResourceClaim } from './IoK8sApiResourceV1alpha2ResourceClaim';
import {
    IoK8sApiResourceV1alpha2ResourceClaimFromJSON,
    IoK8sApiResourceV1alpha2ResourceClaimFromJSONTyped,
    IoK8sApiResourceV1alpha2ResourceClaimToJSON,
} from './IoK8sApiResourceV1alpha2ResourceClaim';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * ResourceClaimList is a collection of claims.
 * @export
 * @interface IoK8sApiResourceV1alpha2ResourceClaimList
 */
export interface IoK8sApiResourceV1alpha2ResourceClaimList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimList
     */
    apiVersion?: string;
    /**
     * Items is the list of resource claims.
     * @type {Array<IoK8sApiResourceV1alpha2ResourceClaim>}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimList
     */
    items: Array<IoK8sApiResourceV1alpha2ResourceClaim>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiResourceV1alpha2ResourceClaimList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiResourceV1alpha2ResourceClaimList interface.
 */
export function instanceOfIoK8sApiResourceV1alpha2ResourceClaimList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiResourceV1alpha2ResourceClaimListFromJSON(json: any): IoK8sApiResourceV1alpha2ResourceClaimList {
    return IoK8sApiResourceV1alpha2ResourceClaimListFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2ResourceClaimListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha2ResourceClaimList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiResourceV1alpha2ResourceClaimFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiResourceV1alpha2ResourceClaimListToJSON(value?: IoK8sApiResourceV1alpha2ResourceClaimList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiResourceV1alpha2ResourceClaimToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

