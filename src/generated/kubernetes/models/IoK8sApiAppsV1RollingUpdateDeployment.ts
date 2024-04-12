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
 * Spec to control the desired behavior of rolling update.
 * @export
 * @interface IoK8sApiAppsV1RollingUpdateDeployment
 */
export interface IoK8sApiAppsV1RollingUpdateDeployment {
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {string}
     * @memberof IoK8sApiAppsV1RollingUpdateDeployment
     */
    maxSurge?: string;
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {string}
     * @memberof IoK8sApiAppsV1RollingUpdateDeployment
     */
    maxUnavailable?: string;
}

/**
 * Check if a given object implements the IoK8sApiAppsV1RollingUpdateDeployment interface.
 */
export function instanceOfIoK8sApiAppsV1RollingUpdateDeployment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAppsV1RollingUpdateDeploymentFromJSON(json: any): IoK8sApiAppsV1RollingUpdateDeployment {
    return IoK8sApiAppsV1RollingUpdateDeploymentFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1RollingUpdateDeploymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1RollingUpdateDeployment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxSurge': !exists(json, 'maxSurge') ? undefined : json['maxSurge'],
        'maxUnavailable': !exists(json, 'maxUnavailable') ? undefined : json['maxUnavailable'],
    };
}

export function IoK8sApiAppsV1RollingUpdateDeploymentToJSON(value?: IoK8sApiAppsV1RollingUpdateDeployment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxSurge': value.maxSurge,
        'maxUnavailable': value.maxUnavailable,
    };
}

