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
import type { IoK8sApiAppsV1DaemonSetSpec } from './IoK8sApiAppsV1DaemonSetSpec';
import {
    IoK8sApiAppsV1DaemonSetSpecFromJSON,
    IoK8sApiAppsV1DaemonSetSpecFromJSONTyped,
    IoK8sApiAppsV1DaemonSetSpecToJSON,
} from './IoK8sApiAppsV1DaemonSetSpec';
import type { IoK8sApiAppsV1DaemonSetStatus } from './IoK8sApiAppsV1DaemonSetStatus';
import {
    IoK8sApiAppsV1DaemonSetStatusFromJSON,
    IoK8sApiAppsV1DaemonSetStatusFromJSONTyped,
    IoK8sApiAppsV1DaemonSetStatusToJSON,
} from './IoK8sApiAppsV1DaemonSetStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * DaemonSet represents the configuration of a daemon set.
 * @export
 * @interface IoK8sApiAppsV1DaemonSet
 */
export interface IoK8sApiAppsV1DaemonSet {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1DaemonSet
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1DaemonSet
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAppsV1DaemonSet
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAppsV1DaemonSetSpec}
     * @memberof IoK8sApiAppsV1DaemonSet
     */
    spec?: IoK8sApiAppsV1DaemonSetSpec;
    /**
     * 
     * @type {IoK8sApiAppsV1DaemonSetStatus}
     * @memberof IoK8sApiAppsV1DaemonSet
     */
    status?: IoK8sApiAppsV1DaemonSetStatus;
}

/**
 * Check if a given object implements the IoK8sApiAppsV1DaemonSet interface.
 */
export function instanceOfIoK8sApiAppsV1DaemonSet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAppsV1DaemonSetFromJSON(json: any): IoK8sApiAppsV1DaemonSet {
    return IoK8sApiAppsV1DaemonSetFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1DaemonSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1DaemonSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiAppsV1DaemonSetSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAppsV1DaemonSetStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAppsV1DaemonSetToJSON(value?: IoK8sApiAppsV1DaemonSet | null): any {
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
        'spec': IoK8sApiAppsV1DaemonSetSpecToJSON(value.spec),
        'status': IoK8sApiAppsV1DaemonSetStatusToJSON(value.status),
    };
}

