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
import type { IoK8sApiCoreV1NodeSelector } from './IoK8sApiCoreV1NodeSelector';
import {
    IoK8sApiCoreV1NodeSelectorFromJSON,
    IoK8sApiCoreV1NodeSelectorFromJSONTyped,
    IoK8sApiCoreV1NodeSelectorToJSON,
} from './IoK8sApiCoreV1NodeSelector';
import type { IoK8sApiResourceV1alpha2ResourceClassParametersReference } from './IoK8sApiResourceV1alpha2ResourceClassParametersReference';
import {
    IoK8sApiResourceV1alpha2ResourceClassParametersReferenceFromJSON,
    IoK8sApiResourceV1alpha2ResourceClassParametersReferenceFromJSONTyped,
    IoK8sApiResourceV1alpha2ResourceClassParametersReferenceToJSON,
} from './IoK8sApiResourceV1alpha2ResourceClassParametersReference';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * ResourceClass is used by administrators to influence how resources are allocated.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 * @export
 * @interface IoK8sApiResourceV1alpha2ResourceClass
 */
export interface IoK8sApiResourceV1alpha2ResourceClass {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClass
     */
    apiVersion?: string;
    /**
     * DriverName defines the name of the dynamic resource driver that is used for allocation of a ResourceClaim that uses this class.
     * 
     * Resource drivers have a unique name in forward domain order (acme.example.com).
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClass
     */
    driverName: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha2ResourceClass
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiResourceV1alpha2ResourceClass
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiResourceV1alpha2ResourceClassParametersReference}
     * @memberof IoK8sApiResourceV1alpha2ResourceClass
     */
    parametersRef?: IoK8sApiResourceV1alpha2ResourceClassParametersReference;
    /**
     * 
     * @type {IoK8sApiCoreV1NodeSelector}
     * @memberof IoK8sApiResourceV1alpha2ResourceClass
     */
    suitableNodes?: IoK8sApiCoreV1NodeSelector;
}

/**
 * Check if a given object implements the IoK8sApiResourceV1alpha2ResourceClass interface.
 */
export function instanceOfIoK8sApiResourceV1alpha2ResourceClass(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "driverName" in value;

    return isInstance;
}

export function IoK8sApiResourceV1alpha2ResourceClassFromJSON(json: any): IoK8sApiResourceV1alpha2ResourceClass {
    return IoK8sApiResourceV1alpha2ResourceClassFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2ResourceClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha2ResourceClass {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'driverName': json['driverName'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'parametersRef': !exists(json, 'parametersRef') ? undefined : IoK8sApiResourceV1alpha2ResourceClassParametersReferenceFromJSON(json['parametersRef']),
        'suitableNodes': !exists(json, 'suitableNodes') ? undefined : IoK8sApiCoreV1NodeSelectorFromJSON(json['suitableNodes']),
    };
}

export function IoK8sApiResourceV1alpha2ResourceClassToJSON(value?: IoK8sApiResourceV1alpha2ResourceClass | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'driverName': value.driverName,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'parametersRef': IoK8sApiResourceV1alpha2ResourceClassParametersReferenceToJSON(value.parametersRef),
        'suitableNodes': IoK8sApiCoreV1NodeSelectorToJSON(value.suitableNodes),
    };
}

