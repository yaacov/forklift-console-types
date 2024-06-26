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
 * ContainerStateRunning is a running state of a container.
 * @export
 * @interface IoK8sApiCoreV1ContainerStateRunning
 */
export interface IoK8sApiCoreV1ContainerStateRunning {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1ContainerStateRunning
     */
    startedAt?: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ContainerStateRunning interface.
 */
export function instanceOfIoK8sApiCoreV1ContainerStateRunning(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1ContainerStateRunningFromJSON(json: any): IoK8sApiCoreV1ContainerStateRunning {
    return IoK8sApiCoreV1ContainerStateRunningFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ContainerStateRunningFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ContainerStateRunning {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startedAt': !exists(json, 'startedAt') ? undefined : json['startedAt'],
    };
}

export function IoK8sApiCoreV1ContainerStateRunningToJSON(value?: IoK8sApiCoreV1ContainerStateRunning | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startedAt': value.startedAt === undefined ? undefined : (value.startedAt),
    };
}

