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
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 * @export
 * @interface IoK8sApiFlowcontrolV1ServiceAccountSubject
 */
export interface IoK8sApiFlowcontrolV1ServiceAccountSubject {
    /**
     * `name` is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required.
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1ServiceAccountSubject
     */
    name: string;
    /**
     * `namespace` is the namespace of matching ServiceAccount objects. Required.
     * @type {string}
     * @memberof IoK8sApiFlowcontrolV1ServiceAccountSubject
     */
    namespace: string;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1ServiceAccountSubject interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1ServiceAccountSubject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "namespace" in value;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1ServiceAccountSubjectFromJSON(json: any): IoK8sApiFlowcontrolV1ServiceAccountSubject {
    return IoK8sApiFlowcontrolV1ServiceAccountSubjectFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1ServiceAccountSubjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1ServiceAccountSubject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
    };
}

export function IoK8sApiFlowcontrolV1ServiceAccountSubjectToJSON(value?: IoK8sApiFlowcontrolV1ServiceAccountSubject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
    };
}

