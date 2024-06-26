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
import type { IoK8sApiCoreV1ReplicationController } from './IoK8sApiCoreV1ReplicationController';
import {
    IoK8sApiCoreV1ReplicationControllerFromJSON,
    IoK8sApiCoreV1ReplicationControllerFromJSONTyped,
    IoK8sApiCoreV1ReplicationControllerToJSON,
} from './IoK8sApiCoreV1ReplicationController';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * ReplicationControllerList is a collection of replication controllers.
 * @export
 * @interface IoK8sApiCoreV1ReplicationControllerList
 */
export interface IoK8sApiCoreV1ReplicationControllerList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1ReplicationControllerList
     */
    apiVersion?: string;
    /**
     * List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     * @type {Array<IoK8sApiCoreV1ReplicationController>}
     * @memberof IoK8sApiCoreV1ReplicationControllerList
     */
    items: Array<IoK8sApiCoreV1ReplicationController>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1ReplicationControllerList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiCoreV1ReplicationControllerList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ReplicationControllerList interface.
 */
export function instanceOfIoK8sApiCoreV1ReplicationControllerList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiCoreV1ReplicationControllerListFromJSON(json: any): IoK8sApiCoreV1ReplicationControllerList {
    return IoK8sApiCoreV1ReplicationControllerListFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ReplicationControllerListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ReplicationControllerList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiCoreV1ReplicationControllerFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiCoreV1ReplicationControllerListToJSON(value?: IoK8sApiCoreV1ReplicationControllerList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiCoreV1ReplicationControllerToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

