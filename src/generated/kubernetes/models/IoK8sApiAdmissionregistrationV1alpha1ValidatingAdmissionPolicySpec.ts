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
import type { IoK8sApiAdmissionregistrationV1alpha1AuditAnnotation } from './IoK8sApiAdmissionregistrationV1alpha1AuditAnnotation';
import {
    IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationFromJSONTyped,
    IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationToJSON,
} from './IoK8sApiAdmissionregistrationV1alpha1AuditAnnotation';
import type { IoK8sApiAdmissionregistrationV1alpha1MatchCondition } from './IoK8sApiAdmissionregistrationV1alpha1MatchCondition';
import {
    IoK8sApiAdmissionregistrationV1alpha1MatchConditionFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1MatchConditionFromJSONTyped,
    IoK8sApiAdmissionregistrationV1alpha1MatchConditionToJSON,
} from './IoK8sApiAdmissionregistrationV1alpha1MatchCondition';
import type { IoK8sApiAdmissionregistrationV1alpha1MatchResources } from './IoK8sApiAdmissionregistrationV1alpha1MatchResources';
import {
    IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSONTyped,
    IoK8sApiAdmissionregistrationV1alpha1MatchResourcesToJSON,
} from './IoK8sApiAdmissionregistrationV1alpha1MatchResources';
import type { IoK8sApiAdmissionregistrationV1alpha1ParamKind } from './IoK8sApiAdmissionregistrationV1alpha1ParamKind';
import {
    IoK8sApiAdmissionregistrationV1alpha1ParamKindFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1ParamKindFromJSONTyped,
    IoK8sApiAdmissionregistrationV1alpha1ParamKindToJSON,
} from './IoK8sApiAdmissionregistrationV1alpha1ParamKind';
import type { IoK8sApiAdmissionregistrationV1alpha1Validation } from './IoK8sApiAdmissionregistrationV1alpha1Validation';
import {
    IoK8sApiAdmissionregistrationV1alpha1ValidationFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1ValidationFromJSONTyped,
    IoK8sApiAdmissionregistrationV1alpha1ValidationToJSON,
} from './IoK8sApiAdmissionregistrationV1alpha1Validation';
import type { IoK8sApiAdmissionregistrationV1alpha1Variable } from './IoK8sApiAdmissionregistrationV1alpha1Variable';
import {
    IoK8sApiAdmissionregistrationV1alpha1VariableFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1VariableFromJSONTyped,
    IoK8sApiAdmissionregistrationV1alpha1VariableToJSON,
} from './IoK8sApiAdmissionregistrationV1alpha1Variable';

/**
 * ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec
 */
export interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec {
    /**
     * auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.
     * @type {Array<IoK8sApiAdmissionregistrationV1alpha1AuditAnnotation>}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec
     */
    auditAnnotations?: Array<IoK8sApiAdmissionregistrationV1alpha1AuditAnnotation>;
    /**
     * failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.
     * 
     * A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.
     * 
     * failurePolicy does not define how validations that evaluate to false are handled.
     * 
     * When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.
     * 
     * Allowed values are Ignore or Fail. Defaults to Fail.
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec
     */
    failurePolicy?: string;
    /**
     * MatchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.
     * 
     * If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.
     * 
     * The exact matching logic is (in order):
     *   1. If ANY matchCondition evaluates to FALSE, the policy is skipped.
     *   2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.
     *   3. If any matchCondition evaluates to an error (but none are FALSE):
     *      - If failurePolicy=Fail, reject the request
     *      - If failurePolicy=Ignore, the policy is skipped
     * @type {Array<IoK8sApiAdmissionregistrationV1alpha1MatchCondition>}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec
     */
    matchConditions?: Array<IoK8sApiAdmissionregistrationV1alpha1MatchCondition>;
    /**
     * 
     * @type {IoK8sApiAdmissionregistrationV1alpha1MatchResources}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec
     */
    matchConstraints?: IoK8sApiAdmissionregistrationV1alpha1MatchResources;
    /**
     * 
     * @type {IoK8sApiAdmissionregistrationV1alpha1ParamKind}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec
     */
    paramKind?: IoK8sApiAdmissionregistrationV1alpha1ParamKind;
    /**
     * Validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.
     * @type {Array<IoK8sApiAdmissionregistrationV1alpha1Validation>}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec
     */
    validations?: Array<IoK8sApiAdmissionregistrationV1alpha1Validation>;
    /**
     * Variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.
     * 
     * The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.
     * @type {Array<IoK8sApiAdmissionregistrationV1alpha1Variable>}
     * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec
     */
    variables?: Array<IoK8sApiAdmissionregistrationV1alpha1Variable>;
}

/**
 * Check if a given object implements the IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec interface.
 */
export function instanceOfIoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpecFromJSON(json: any): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec {
    return IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpecFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auditAnnotations': !exists(json, 'auditAnnotations') ? undefined : ((json['auditAnnotations'] as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationFromJSON)),
        'failurePolicy': !exists(json, 'failurePolicy') ? undefined : json['failurePolicy'],
        'matchConditions': !exists(json, 'matchConditions') ? undefined : ((json['matchConditions'] as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1MatchConditionFromJSON)),
        'matchConstraints': !exists(json, 'matchConstraints') ? undefined : IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSON(json['matchConstraints']),
        'paramKind': !exists(json, 'paramKind') ? undefined : IoK8sApiAdmissionregistrationV1alpha1ParamKindFromJSON(json['paramKind']),
        'validations': !exists(json, 'validations') ? undefined : ((json['validations'] as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1ValidationFromJSON)),
        'variables': !exists(json, 'variables') ? undefined : ((json['variables'] as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1VariableFromJSON)),
    };
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpecToJSON(value?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auditAnnotations': value.auditAnnotations === undefined ? undefined : ((value.auditAnnotations as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationToJSON)),
        'failurePolicy': value.failurePolicy,
        'matchConditions': value.matchConditions === undefined ? undefined : ((value.matchConditions as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1MatchConditionToJSON)),
        'matchConstraints': IoK8sApiAdmissionregistrationV1alpha1MatchResourcesToJSON(value.matchConstraints),
        'paramKind': IoK8sApiAdmissionregistrationV1alpha1ParamKindToJSON(value.paramKind),
        'validations': value.validations === undefined ? undefined : ((value.validations as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1ValidationToJSON)),
        'variables': value.variables === undefined ? undefined : ((value.variables as Array<any>).map(IoK8sApiAdmissionregistrationV1alpha1VariableToJSON)),
    };
}

