/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../../runtime';
import type { V1alpha1Condition } from './V1alpha1Condition';
import {
    V1alpha1ConditionFromJSON,
    V1alpha1ConditionFromJSONTyped,
    V1alpha1ConditionToJSON,
} from './V1alpha1Condition';

/**
 * 
 * @export
 * @interface V1alpha1VirtualMachineCloneStatus
 */
export interface V1alpha1VirtualMachineCloneStatus {
    /**
     * 
     * @type {Array<V1alpha1Condition>}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    conditions?: Array<V1alpha1Condition>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    creationTime?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    phase?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    restoreName?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    snapshotName?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VirtualMachineCloneStatus
     */
    targetName?: string;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachineCloneStatus interface.
 */
export function instanceOfV1alpha1VirtualMachineCloneStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1alpha1VirtualMachineCloneStatusFromJSON(json: any): V1alpha1VirtualMachineCloneStatus {
    return V1alpha1VirtualMachineCloneStatusFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineCloneStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineCloneStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1alpha1ConditionFromJSON)),
        'creationTime': !exists(json, 'creationTime') ? undefined : json['creationTime'],
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'restoreName': !exists(json, 'restoreName') ? undefined : json['restoreName'],
        'snapshotName': !exists(json, 'snapshotName') ? undefined : json['snapshotName'],
        'targetName': !exists(json, 'targetName') ? undefined : json['targetName'],
    };
}

export function V1alpha1VirtualMachineCloneStatusToJSON(value?: V1alpha1VirtualMachineCloneStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1alpha1ConditionToJSON)),
        'creationTime': value.creationTime === undefined ? undefined : (value.creationTime),
        'phase': value.phase,
        'restoreName': value.restoreName,
        'snapshotName': value.snapshotName,
        'targetName': value.targetName,
    };
}

