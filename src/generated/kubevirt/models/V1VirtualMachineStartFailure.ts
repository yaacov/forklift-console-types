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
/**
 * VirtualMachineStartFailure tracks VMIs which failed to transition successfully to running using the VM status
 * @export
 * @interface V1VirtualMachineStartFailure
 */
export interface V1VirtualMachineStartFailure {
    /**
     * 
     * @type {number}
     * @memberof V1VirtualMachineStartFailure
     */
    consecutiveFailCount?: number;
    /**
     * 
     * @type {string}
     * @memberof V1VirtualMachineStartFailure
     */
    lastFailedVMIUID?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof V1VirtualMachineStartFailure
     */
    retryAfterTimestamp?: string;
}

/**
 * Check if a given object implements the V1VirtualMachineStartFailure interface.
 */
export function instanceOfV1VirtualMachineStartFailure(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1VirtualMachineStartFailureFromJSON(json: any): V1VirtualMachineStartFailure {
    return V1VirtualMachineStartFailureFromJSONTyped(json, false);
}

export function V1VirtualMachineStartFailureFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineStartFailure {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consecutiveFailCount': !exists(json, 'consecutiveFailCount') ? undefined : json['consecutiveFailCount'],
        'lastFailedVMIUID': !exists(json, 'lastFailedVMIUID') ? undefined : json['lastFailedVMIUID'],
        'retryAfterTimestamp': !exists(json, 'retryAfterTimestamp') ? undefined : json['retryAfterTimestamp'],
    };
}

export function V1VirtualMachineStartFailureToJSON(value?: V1VirtualMachineStartFailure | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'consecutiveFailCount': value.consecutiveFailCount,
        'lastFailedVMIUID': value.lastFailedVMIUID,
        'retryAfterTimestamp': value.retryAfterTimestamp === undefined ? undefined : (value.retryAfterTimestamp),
    };
}

