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
import type { IoK8sApiNetworkingV1alpha1ServiceCIDRSpec } from './IoK8sApiNetworkingV1alpha1ServiceCIDRSpec';
import {
    IoK8sApiNetworkingV1alpha1ServiceCIDRSpecFromJSON,
    IoK8sApiNetworkingV1alpha1ServiceCIDRSpecFromJSONTyped,
    IoK8sApiNetworkingV1alpha1ServiceCIDRSpecToJSON,
} from './IoK8sApiNetworkingV1alpha1ServiceCIDRSpec';
import type { IoK8sApiNetworkingV1alpha1ServiceCIDRStatus } from './IoK8sApiNetworkingV1alpha1ServiceCIDRStatus';
import {
    IoK8sApiNetworkingV1alpha1ServiceCIDRStatusFromJSON,
    IoK8sApiNetworkingV1alpha1ServiceCIDRStatusFromJSONTyped,
    IoK8sApiNetworkingV1alpha1ServiceCIDRStatusToJSON,
} from './IoK8sApiNetworkingV1alpha1ServiceCIDRStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * ServiceCIDR defines a range of IP addresses using CIDR format (e.g. 192.168.0.0/24 or 2001:db2::/64). This range is used to allocate ClusterIPs to Service objects.
 * @export
 * @interface IoK8sApiNetworkingV1alpha1ServiceCIDR
 */
export interface IoK8sApiNetworkingV1alpha1ServiceCIDR {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiNetworkingV1alpha1ServiceCIDR
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiNetworkingV1alpha1ServiceCIDR
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiNetworkingV1alpha1ServiceCIDR
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiNetworkingV1alpha1ServiceCIDRSpec}
     * @memberof IoK8sApiNetworkingV1alpha1ServiceCIDR
     */
    spec?: IoK8sApiNetworkingV1alpha1ServiceCIDRSpec;
    /**
     * 
     * @type {IoK8sApiNetworkingV1alpha1ServiceCIDRStatus}
     * @memberof IoK8sApiNetworkingV1alpha1ServiceCIDR
     */
    status?: IoK8sApiNetworkingV1alpha1ServiceCIDRStatus;
}

/**
 * Check if a given object implements the IoK8sApiNetworkingV1alpha1ServiceCIDR interface.
 */
export function instanceOfIoK8sApiNetworkingV1alpha1ServiceCIDR(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiNetworkingV1alpha1ServiceCIDRFromJSON(json: any): IoK8sApiNetworkingV1alpha1ServiceCIDR {
    return IoK8sApiNetworkingV1alpha1ServiceCIDRFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1alpha1ServiceCIDRFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1alpha1ServiceCIDR {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiNetworkingV1alpha1ServiceCIDRSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiNetworkingV1alpha1ServiceCIDRStatusFromJSON(json['status']),
    };
}

export function IoK8sApiNetworkingV1alpha1ServiceCIDRToJSON(value?: IoK8sApiNetworkingV1alpha1ServiceCIDR | null): any {
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
        'spec': IoK8sApiNetworkingV1alpha1ServiceCIDRSpecToJSON(value.spec),
        'status': IoK8sApiNetworkingV1alpha1ServiceCIDRStatusToJSON(value.status),
    };
}

