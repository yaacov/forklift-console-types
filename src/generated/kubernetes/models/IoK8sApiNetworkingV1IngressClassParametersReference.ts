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
/**
 * IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource.
 * @export
 * @interface IoK8sApiNetworkingV1IngressClassParametersReference
 */
export interface IoK8sApiNetworkingV1IngressClassParametersReference {
    /**
     * apiGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressClassParametersReference
     */
    apiGroup?: string;
    /**
     * kind is the type of resource being referenced.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressClassParametersReference
     */
    kind: string;
    /**
     * name is the name of resource being referenced.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressClassParametersReference
     */
    name: string;
    /**
     * namespace is the namespace of the resource being referenced. This field is required when scope is set to "Namespace" and must be unset when scope is set to "Cluster".
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressClassParametersReference
     */
    namespace?: string;
    /**
     * scope represents if this refers to a cluster or namespace scoped resource. This may be set to "Cluster" (default) or "Namespace".
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressClassParametersReference
     */
    scope?: string;
}

/**
 * Check if a given object implements the IoK8sApiNetworkingV1IngressClassParametersReference interface.
 */
export function instanceOfIoK8sApiNetworkingV1IngressClassParametersReference(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiNetworkingV1IngressClassParametersReferenceFromJSON(json: any): IoK8sApiNetworkingV1IngressClassParametersReference {
    return IoK8sApiNetworkingV1IngressClassParametersReferenceFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1IngressClassParametersReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1IngressClassParametersReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroup': !exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
    };
}

export function IoK8sApiNetworkingV1IngressClassParametersReferenceToJSON(value?: IoK8sApiNetworkingV1IngressClassParametersReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
        'namespace': value.namespace,
        'scope': value.scope,
    };
}

