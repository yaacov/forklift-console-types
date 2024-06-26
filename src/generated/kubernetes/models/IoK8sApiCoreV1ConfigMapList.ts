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
import type { IoK8sApiCoreV1ConfigMap } from './IoK8sApiCoreV1ConfigMap';
import {
    IoK8sApiCoreV1ConfigMapFromJSON,
    IoK8sApiCoreV1ConfigMapFromJSONTyped,
    IoK8sApiCoreV1ConfigMapToJSON,
} from './IoK8sApiCoreV1ConfigMap';
import type { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ListMeta';

/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 * @export
 * @interface IoK8sApiCoreV1ConfigMapList
 */
export interface IoK8sApiCoreV1ConfigMapList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1ConfigMapList
     */
    apiVersion?: string;
    /**
     * Items is the list of ConfigMaps.
     * @type {Array<IoK8sApiCoreV1ConfigMap>}
     * @memberof IoK8sApiCoreV1ConfigMapList
     */
    items: Array<IoK8sApiCoreV1ConfigMap>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1ConfigMapList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiCoreV1ConfigMapList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ConfigMapList interface.
 */
export function instanceOfIoK8sApiCoreV1ConfigMapList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;

    return isInstance;
}

export function IoK8sApiCoreV1ConfigMapListFromJSON(json: any): IoK8sApiCoreV1ConfigMapList {
    return IoK8sApiCoreV1ConfigMapListFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ConfigMapListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ConfigMapList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiCoreV1ConfigMapFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiCoreV1ConfigMapListToJSON(value?: IoK8sApiCoreV1ConfigMapList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiCoreV1ConfigMapToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

