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
import type { IoK8sApiFlowcontrolV1FlowSchemaCondition } from './IoK8sApiFlowcontrolV1FlowSchemaCondition';
import {
    IoK8sApiFlowcontrolV1FlowSchemaConditionFromJSON,
    IoK8sApiFlowcontrolV1FlowSchemaConditionFromJSONTyped,
    IoK8sApiFlowcontrolV1FlowSchemaConditionToJSON,
} from './IoK8sApiFlowcontrolV1FlowSchemaCondition';

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 * @export
 * @interface IoK8sApiFlowcontrolV1FlowSchemaStatus
 */
export interface IoK8sApiFlowcontrolV1FlowSchemaStatus {
    /**
     * `conditions` is a list of the current states of FlowSchema.
     * @type {Array<IoK8sApiFlowcontrolV1FlowSchemaCondition>}
     * @memberof IoK8sApiFlowcontrolV1FlowSchemaStatus
     */
    conditions?: Array<IoK8sApiFlowcontrolV1FlowSchemaCondition>;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1FlowSchemaStatus interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1FlowSchemaStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1FlowSchemaStatusFromJSON(json: any): IoK8sApiFlowcontrolV1FlowSchemaStatus {
    return IoK8sApiFlowcontrolV1FlowSchemaStatusFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1FlowSchemaStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1FlowSchemaStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiFlowcontrolV1FlowSchemaConditionFromJSON)),
    };
}

export function IoK8sApiFlowcontrolV1FlowSchemaStatusToJSON(value?: IoK8sApiFlowcontrolV1FlowSchemaStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiFlowcontrolV1FlowSchemaConditionToJSON)),
    };
}

