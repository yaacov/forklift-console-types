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
import type { IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec } from './IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec';
import {
    IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecFromJSON,
    IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecFromJSONTyped,
    IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecToJSON,
} from './IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec';
import type { IoK8sApiAuthorizationV1SubjectRulesReviewStatus } from './IoK8sApiAuthorizationV1SubjectRulesReviewStatus';
import {
    IoK8sApiAuthorizationV1SubjectRulesReviewStatusFromJSON,
    IoK8sApiAuthorizationV1SubjectRulesReviewStatusFromJSONTyped,
    IoK8sApiAuthorizationV1SubjectRulesReviewStatusToJSON,
} from './IoK8sApiAuthorizationV1SubjectRulesReviewStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 * @export
 * @interface IoK8sApiAuthorizationV1SelfSubjectRulesReview
 */
export interface IoK8sApiAuthorizationV1SelfSubjectRulesReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1SelfSubjectRulesReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1SelfSubjectRulesReview
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAuthorizationV1SelfSubjectRulesReview
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec}
     * @memberof IoK8sApiAuthorizationV1SelfSubjectRulesReview
     */
    spec: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec;
    /**
     * 
     * @type {IoK8sApiAuthorizationV1SubjectRulesReviewStatus}
     * @memberof IoK8sApiAuthorizationV1SelfSubjectRulesReview
     */
    status?: IoK8sApiAuthorizationV1SubjectRulesReviewStatus;
}

/**
 * Check if a given object implements the IoK8sApiAuthorizationV1SelfSubjectRulesReview interface.
 */
export function instanceOfIoK8sApiAuthorizationV1SelfSubjectRulesReview(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function IoK8sApiAuthorizationV1SelfSubjectRulesReviewFromJSON(json: any): IoK8sApiAuthorizationV1SelfSubjectRulesReview {
    return IoK8sApiAuthorizationV1SelfSubjectRulesReviewFromJSONTyped(json, false);
}

export function IoK8sApiAuthorizationV1SelfSubjectRulesReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAuthorizationV1SelfSubjectRulesReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAuthorizationV1SubjectRulesReviewStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAuthorizationV1SelfSubjectRulesReviewToJSON(value?: IoK8sApiAuthorizationV1SelfSubjectRulesReview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecToJSON(value.spec),
        'status': IoK8sApiAuthorizationV1SubjectRulesReviewStatusToJSON(value.status),
    };
}

