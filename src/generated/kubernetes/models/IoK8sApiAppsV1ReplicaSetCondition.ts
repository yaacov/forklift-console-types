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
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 * @export
 * @interface IoK8sApiAppsV1ReplicaSetCondition
 */
export interface IoK8sApiAppsV1ReplicaSetCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiAppsV1ReplicaSetCondition
     */
    lastTransitionTime?: string;
    /**
     * A human readable message indicating details about the transition.
     * @type {string}
     * @memberof IoK8sApiAppsV1ReplicaSetCondition
     */
    message?: string;
    /**
     * The reason for the condition's last transition.
     * @type {string}
     * @memberof IoK8sApiAppsV1ReplicaSetCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof IoK8sApiAppsV1ReplicaSetCondition
     */
    status: string;
    /**
     * Type of replica set condition.
     * @type {string}
     * @memberof IoK8sApiAppsV1ReplicaSetCondition
     */
    type: string;
}

/**
 * Check if a given object implements the IoK8sApiAppsV1ReplicaSetCondition interface.
 */
export function instanceOfIoK8sApiAppsV1ReplicaSetCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function IoK8sApiAppsV1ReplicaSetConditionFromJSON(json: any): IoK8sApiAppsV1ReplicaSetCondition {
    return IoK8sApiAppsV1ReplicaSetConditionFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1ReplicaSetConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1ReplicaSetCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : json['lastTransitionTime'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sApiAppsV1ReplicaSetConditionToJSON(value?: IoK8sApiAppsV1ReplicaSetCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}

