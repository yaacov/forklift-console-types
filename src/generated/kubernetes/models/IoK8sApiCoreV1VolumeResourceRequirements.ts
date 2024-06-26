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
 * VolumeResourceRequirements describes the storage resource requirements for a volume.
 * @export
 * @interface IoK8sApiCoreV1VolumeResourceRequirements
 */
export interface IoK8sApiCoreV1VolumeResourceRequirements {
    /**
     * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1VolumeResourceRequirements
     */
    limits?: { [key: string]: string; };
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1VolumeResourceRequirements
     */
    requests?: { [key: string]: string; };
}

/**
 * Check if a given object implements the IoK8sApiCoreV1VolumeResourceRequirements interface.
 */
export function instanceOfIoK8sApiCoreV1VolumeResourceRequirements(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1VolumeResourceRequirementsFromJSON(json: any): IoK8sApiCoreV1VolumeResourceRequirements {
    return IoK8sApiCoreV1VolumeResourceRequirementsFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1VolumeResourceRequirementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1VolumeResourceRequirements {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limits': !exists(json, 'limits') ? undefined : json['limits'],
        'requests': !exists(json, 'requests') ? undefined : json['requests'],
    };
}

export function IoK8sApiCoreV1VolumeResourceRequirementsToJSON(value?: IoK8sApiCoreV1VolumeResourceRequirements | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limits': value.limits,
        'requests': value.requests,
    };
}

