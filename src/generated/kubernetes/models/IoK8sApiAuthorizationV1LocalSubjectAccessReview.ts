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
import type { IoK8sApiAuthorizationV1SubjectAccessReviewSpec } from './IoK8sApiAuthorizationV1SubjectAccessReviewSpec';
import {
    IoK8sApiAuthorizationV1SubjectAccessReviewSpecFromJSON,
    IoK8sApiAuthorizationV1SubjectAccessReviewSpecFromJSONTyped,
    IoK8sApiAuthorizationV1SubjectAccessReviewSpecToJSON,
} from './IoK8sApiAuthorizationV1SubjectAccessReviewSpec';
import type { IoK8sApiAuthorizationV1SubjectAccessReviewStatus } from './IoK8sApiAuthorizationV1SubjectAccessReviewStatus';
import {
    IoK8sApiAuthorizationV1SubjectAccessReviewStatusFromJSON,
    IoK8sApiAuthorizationV1SubjectAccessReviewStatusFromJSONTyped,
    IoK8sApiAuthorizationV1SubjectAccessReviewStatusToJSON,
} from './IoK8sApiAuthorizationV1SubjectAccessReviewStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 * @export
 * @interface IoK8sApiAuthorizationV1LocalSubjectAccessReview
 */
export interface IoK8sApiAuthorizationV1LocalSubjectAccessReview {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1LocalSubjectAccessReview
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1LocalSubjectAccessReview
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAuthorizationV1LocalSubjectAccessReview
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAuthorizationV1SubjectAccessReviewSpec}
     * @memberof IoK8sApiAuthorizationV1LocalSubjectAccessReview
     */
    spec: IoK8sApiAuthorizationV1SubjectAccessReviewSpec;
    /**
     * 
     * @type {IoK8sApiAuthorizationV1SubjectAccessReviewStatus}
     * @memberof IoK8sApiAuthorizationV1LocalSubjectAccessReview
     */
    status?: IoK8sApiAuthorizationV1SubjectAccessReviewStatus;
}

/**
 * Check if a given object implements the IoK8sApiAuthorizationV1LocalSubjectAccessReview interface.
 */
export function instanceOfIoK8sApiAuthorizationV1LocalSubjectAccessReview(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function IoK8sApiAuthorizationV1LocalSubjectAccessReviewFromJSON(json: any): IoK8sApiAuthorizationV1LocalSubjectAccessReview {
    return IoK8sApiAuthorizationV1LocalSubjectAccessReviewFromJSONTyped(json, false);
}

export function IoK8sApiAuthorizationV1LocalSubjectAccessReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAuthorizationV1LocalSubjectAccessReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': IoK8sApiAuthorizationV1SubjectAccessReviewSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAuthorizationV1SubjectAccessReviewStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAuthorizationV1LocalSubjectAccessReviewToJSON(value?: IoK8sApiAuthorizationV1LocalSubjectAccessReview | null): any {
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
        'spec': IoK8sApiAuthorizationV1SubjectAccessReviewSpecToJSON(value.spec),
        'status': IoK8sApiAuthorizationV1SubjectAccessReviewStatusToJSON(value.status),
    };
}

