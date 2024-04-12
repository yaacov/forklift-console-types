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
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 * @export
 * @interface IoK8sApiAppsV1StatefulSetCondition
 */
export interface IoK8sApiAppsV1StatefulSetCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiAppsV1StatefulSetCondition
     */
    lastTransitionTime?: string;
    /**
     * A human readable message indicating details about the transition.
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetCondition
     */
    message?: string;
    /**
     * The reason for the condition's last transition.
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetCondition
     */
    status: string;
    /**
     * Type of statefulset condition.
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetCondition
     */
    type: string;
}

/**
 * Check if a given object implements the IoK8sApiAppsV1StatefulSetCondition interface.
 */
export function instanceOfIoK8sApiAppsV1StatefulSetCondition(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function IoK8sApiAppsV1StatefulSetConditionFromJSON(json: any): IoK8sApiAppsV1StatefulSetCondition {
    return IoK8sApiAppsV1StatefulSetConditionFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1StatefulSetConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1StatefulSetCondition {
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

export function IoK8sApiAppsV1StatefulSetConditionToJSON(value?: IoK8sApiAppsV1StatefulSetCondition | null): any {
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
