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
import type { IoK8sApiApiserverinternalV1alpha1StorageVersionStatus } from './IoK8sApiApiserverinternalV1alpha1StorageVersionStatus';
import {
    IoK8sApiApiserverinternalV1alpha1StorageVersionStatusFromJSON,
    IoK8sApiApiserverinternalV1alpha1StorageVersionStatusFromJSONTyped,
    IoK8sApiApiserverinternalV1alpha1StorageVersionStatusToJSON,
} from './IoK8sApiApiserverinternalV1alpha1StorageVersionStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * Storage version of a specific resource.
 * @export
 * @interface IoK8sApiApiserverinternalV1alpha1StorageVersion
 */
export interface IoK8sApiApiserverinternalV1alpha1StorageVersion {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiApiserverinternalV1alpha1StorageVersion
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiApiserverinternalV1alpha1StorageVersion
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiApiserverinternalV1alpha1StorageVersion
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * StorageVersionSpec is an empty spec.
     * @type {object}
     * @memberof IoK8sApiApiserverinternalV1alpha1StorageVersion
     */
    spec: object;
    /**
     * 
     * @type {IoK8sApiApiserverinternalV1alpha1StorageVersionStatus}
     * @memberof IoK8sApiApiserverinternalV1alpha1StorageVersion
     */
    status: IoK8sApiApiserverinternalV1alpha1StorageVersionStatus;
}

/**
 * Check if a given object implements the IoK8sApiApiserverinternalV1alpha1StorageVersion interface.
 */
export function instanceOfIoK8sApiApiserverinternalV1alpha1StorageVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function IoK8sApiApiserverinternalV1alpha1StorageVersionFromJSON(json: any): IoK8sApiApiserverinternalV1alpha1StorageVersion {
    return IoK8sApiApiserverinternalV1alpha1StorageVersionFromJSONTyped(json, false);
}

export function IoK8sApiApiserverinternalV1alpha1StorageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiApiserverinternalV1alpha1StorageVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': json['spec'],
        'status': IoK8sApiApiserverinternalV1alpha1StorageVersionStatusFromJSON(json['status']),
    };
}

export function IoK8sApiApiserverinternalV1alpha1StorageVersionToJSON(value?: IoK8sApiApiserverinternalV1alpha1StorageVersion | null): any {
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
        'spec': value.spec,
        'status': IoK8sApiApiserverinternalV1alpha1StorageVersionStatusToJSON(value.status),
    };
}

