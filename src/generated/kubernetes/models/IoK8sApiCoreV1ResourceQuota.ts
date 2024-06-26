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
import type { IoK8sApiCoreV1ResourceQuotaSpec } from './IoK8sApiCoreV1ResourceQuotaSpec';
import {
    IoK8sApiCoreV1ResourceQuotaSpecFromJSON,
    IoK8sApiCoreV1ResourceQuotaSpecFromJSONTyped,
    IoK8sApiCoreV1ResourceQuotaSpecToJSON,
} from './IoK8sApiCoreV1ResourceQuotaSpec';
import type { IoK8sApiCoreV1ResourceQuotaStatus } from './IoK8sApiCoreV1ResourceQuotaStatus';
import {
    IoK8sApiCoreV1ResourceQuotaStatusFromJSON,
    IoK8sApiCoreV1ResourceQuotaStatusFromJSONTyped,
    IoK8sApiCoreV1ResourceQuotaStatusToJSON,
} from './IoK8sApiCoreV1ResourceQuotaStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 * @export
 * @interface IoK8sApiCoreV1ResourceQuota
 */
export interface IoK8sApiCoreV1ResourceQuota {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1ResourceQuota
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1ResourceQuota
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1ResourceQuota
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCoreV1ResourceQuotaSpec}
     * @memberof IoK8sApiCoreV1ResourceQuota
     */
    spec?: IoK8sApiCoreV1ResourceQuotaSpec;
    /**
     * 
     * @type {IoK8sApiCoreV1ResourceQuotaStatus}
     * @memberof IoK8sApiCoreV1ResourceQuota
     */
    status?: IoK8sApiCoreV1ResourceQuotaStatus;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ResourceQuota interface.
 */
export function instanceOfIoK8sApiCoreV1ResourceQuota(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1ResourceQuotaFromJSON(json: any): IoK8sApiCoreV1ResourceQuota {
    return IoK8sApiCoreV1ResourceQuotaFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ResourceQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ResourceQuota {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiCoreV1ResourceQuotaSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiCoreV1ResourceQuotaStatusFromJSON(json['status']),
    };
}

export function IoK8sApiCoreV1ResourceQuotaToJSON(value?: IoK8sApiCoreV1ResourceQuota | null): any {
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
        'spec': IoK8sApiCoreV1ResourceQuotaSpecToJSON(value.spec),
        'status': IoK8sApiCoreV1ResourceQuotaStatusToJSON(value.status),
    };
}

