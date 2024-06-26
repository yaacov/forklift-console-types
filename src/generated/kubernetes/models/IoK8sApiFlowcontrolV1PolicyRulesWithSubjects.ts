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
import type { IoK8sApiFlowcontrolV1NonResourcePolicyRule } from './IoK8sApiFlowcontrolV1NonResourcePolicyRule';
import {
    IoK8sApiFlowcontrolV1NonResourcePolicyRuleFromJSON,
    IoK8sApiFlowcontrolV1NonResourcePolicyRuleFromJSONTyped,
    IoK8sApiFlowcontrolV1NonResourcePolicyRuleToJSON,
} from './IoK8sApiFlowcontrolV1NonResourcePolicyRule';
import type { IoK8sApiFlowcontrolV1ResourcePolicyRule } from './IoK8sApiFlowcontrolV1ResourcePolicyRule';
import {
    IoK8sApiFlowcontrolV1ResourcePolicyRuleFromJSON,
    IoK8sApiFlowcontrolV1ResourcePolicyRuleFromJSONTyped,
    IoK8sApiFlowcontrolV1ResourcePolicyRuleToJSON,
} from './IoK8sApiFlowcontrolV1ResourcePolicyRule';
import type { IoK8sApiFlowcontrolV1Subject } from './IoK8sApiFlowcontrolV1Subject';
import {
    IoK8sApiFlowcontrolV1SubjectFromJSON,
    IoK8sApiFlowcontrolV1SubjectFromJSONTyped,
    IoK8sApiFlowcontrolV1SubjectToJSON,
} from './IoK8sApiFlowcontrolV1Subject';

/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 * @export
 * @interface IoK8sApiFlowcontrolV1PolicyRulesWithSubjects
 */
export interface IoK8sApiFlowcontrolV1PolicyRulesWithSubjects {
    /**
     * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
     * @type {Array<IoK8sApiFlowcontrolV1NonResourcePolicyRule>}
     * @memberof IoK8sApiFlowcontrolV1PolicyRulesWithSubjects
     */
    nonResourceRules?: Array<IoK8sApiFlowcontrolV1NonResourcePolicyRule>;
    /**
     * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
     * @type {Array<IoK8sApiFlowcontrolV1ResourcePolicyRule>}
     * @memberof IoK8sApiFlowcontrolV1PolicyRulesWithSubjects
     */
    resourceRules?: Array<IoK8sApiFlowcontrolV1ResourcePolicyRule>;
    /**
     * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
     * @type {Array<IoK8sApiFlowcontrolV1Subject>}
     * @memberof IoK8sApiFlowcontrolV1PolicyRulesWithSubjects
     */
    subjects: Array<IoK8sApiFlowcontrolV1Subject>;
}

/**
 * Check if a given object implements the IoK8sApiFlowcontrolV1PolicyRulesWithSubjects interface.
 */
export function instanceOfIoK8sApiFlowcontrolV1PolicyRulesWithSubjects(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subjects" in value;

    return isInstance;
}

export function IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsFromJSON(json: any): IoK8sApiFlowcontrolV1PolicyRulesWithSubjects {
    return IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiFlowcontrolV1PolicyRulesWithSubjects {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nonResourceRules': !exists(json, 'nonResourceRules') ? undefined : ((json['nonResourceRules'] as Array<any>).map(IoK8sApiFlowcontrolV1NonResourcePolicyRuleFromJSON)),
        'resourceRules': !exists(json, 'resourceRules') ? undefined : ((json['resourceRules'] as Array<any>).map(IoK8sApiFlowcontrolV1ResourcePolicyRuleFromJSON)),
        'subjects': ((json['subjects'] as Array<any>).map(IoK8sApiFlowcontrolV1SubjectFromJSON)),
    };
}

export function IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsToJSON(value?: IoK8sApiFlowcontrolV1PolicyRulesWithSubjects | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nonResourceRules': value.nonResourceRules === undefined ? undefined : ((value.nonResourceRules as Array<any>).map(IoK8sApiFlowcontrolV1NonResourcePolicyRuleToJSON)),
        'resourceRules': value.resourceRules === undefined ? undefined : ((value.resourceRules as Array<any>).map(IoK8sApiFlowcontrolV1ResourcePolicyRuleToJSON)),
        'subjects': ((value.subjects as Array<any>).map(IoK8sApiFlowcontrolV1SubjectToJSON)),
    };
}

