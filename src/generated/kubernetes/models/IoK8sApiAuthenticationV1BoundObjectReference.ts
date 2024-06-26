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
 * BoundObjectReference is a reference to an object that a token is bound to.
 * @export
 * @interface IoK8sApiAuthenticationV1BoundObjectReference
 */
export interface IoK8sApiAuthenticationV1BoundObjectReference {
    /**
     * API version of the referent.
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1BoundObjectReference
     */
    apiVersion?: string;
    /**
     * Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1BoundObjectReference
     */
    kind?: string;
    /**
     * Name of the referent.
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1BoundObjectReference
     */
    name?: string;
    /**
     * UID of the referent.
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1BoundObjectReference
     */
    uid?: string;
}

/**
 * Check if a given object implements the IoK8sApiAuthenticationV1BoundObjectReference interface.
 */
export function instanceOfIoK8sApiAuthenticationV1BoundObjectReference(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAuthenticationV1BoundObjectReferenceFromJSON(json: any): IoK8sApiAuthenticationV1BoundObjectReference {
    return IoK8sApiAuthenticationV1BoundObjectReferenceFromJSONTyped(json, false);
}

export function IoK8sApiAuthenticationV1BoundObjectReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAuthenticationV1BoundObjectReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
    };
}

export function IoK8sApiAuthenticationV1BoundObjectReferenceToJSON(value?: IoK8sApiAuthenticationV1BoundObjectReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'name': value.name,
        'uid': value.uid,
    };
}

