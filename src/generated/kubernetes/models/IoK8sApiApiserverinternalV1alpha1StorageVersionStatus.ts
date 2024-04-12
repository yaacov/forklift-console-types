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
import type { IoK8sApiApiserverinternalV1alpha1ServerStorageVersion } from './IoK8sApiApiserverinternalV1alpha1ServerStorageVersion';
import {
    IoK8sApiApiserverinternalV1alpha1ServerStorageVersionFromJSON,
    IoK8sApiApiserverinternalV1alpha1ServerStorageVersionFromJSONTyped,
    IoK8sApiApiserverinternalV1alpha1ServerStorageVersionToJSON,
} from './IoK8sApiApiserverinternalV1alpha1ServerStorageVersion';
import type { IoK8sApiApiserverinternalV1alpha1StorageVersionCondition } from './IoK8sApiApiserverinternalV1alpha1StorageVersionCondition';
import {
    IoK8sApiApiserverinternalV1alpha1StorageVersionConditionFromJSON,
    IoK8sApiApiserverinternalV1alpha1StorageVersionConditionFromJSONTyped,
    IoK8sApiApiserverinternalV1alpha1StorageVersionConditionToJSON,
} from './IoK8sApiApiserverinternalV1alpha1StorageVersionCondition';

/**
 * API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend.
 * @export
 * @interface IoK8sApiApiserverinternalV1alpha1StorageVersionStatus
 */
export interface IoK8sApiApiserverinternalV1alpha1StorageVersionStatus {
    /**
     * If all API server instances agree on the same encoding storage version, then this field is set to that version. Otherwise this field is left empty. API servers should finish updating its storageVersionStatus entry before serving write operations, so that this field will be in sync with the reality.
     * @type {string}
     * @memberof IoK8sApiApiserverinternalV1alpha1StorageVersionStatus
     */
    commonEncodingVersion?: string;
    /**
     * The latest available observations of the storageVersion's state.
     * @type {Array<IoK8sApiApiserverinternalV1alpha1StorageVersionCondition>}
     * @memberof IoK8sApiApiserverinternalV1alpha1StorageVersionStatus
     */
    conditions?: Array<IoK8sApiApiserverinternalV1alpha1StorageVersionCondition>;
    /**
     * The reported versions per API server instance.
     * @type {Array<IoK8sApiApiserverinternalV1alpha1ServerStorageVersion>}
     * @memberof IoK8sApiApiserverinternalV1alpha1StorageVersionStatus
     */
    storageVersions?: Array<IoK8sApiApiserverinternalV1alpha1ServerStorageVersion>;
}

/**
 * Check if a given object implements the IoK8sApiApiserverinternalV1alpha1StorageVersionStatus interface.
 */
export function instanceOfIoK8sApiApiserverinternalV1alpha1StorageVersionStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiApiserverinternalV1alpha1StorageVersionStatusFromJSON(json: any): IoK8sApiApiserverinternalV1alpha1StorageVersionStatus {
    return IoK8sApiApiserverinternalV1alpha1StorageVersionStatusFromJSONTyped(json, false);
}

export function IoK8sApiApiserverinternalV1alpha1StorageVersionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiApiserverinternalV1alpha1StorageVersionStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commonEncodingVersion': !exists(json, 'commonEncodingVersion') ? undefined : json['commonEncodingVersion'],
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(IoK8sApiApiserverinternalV1alpha1StorageVersionConditionFromJSON)),
        'storageVersions': !exists(json, 'storageVersions') ? undefined : ((json['storageVersions'] as Array<any>).map(IoK8sApiApiserverinternalV1alpha1ServerStorageVersionFromJSON)),
    };
}

export function IoK8sApiApiserverinternalV1alpha1StorageVersionStatusToJSON(value?: IoK8sApiApiserverinternalV1alpha1StorageVersionStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commonEncodingVersion': value.commonEncodingVersion,
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(IoK8sApiApiserverinternalV1alpha1StorageVersionConditionToJSON)),
        'storageVersions': value.storageVersions === undefined ? undefined : ((value.storageVersions as Array<any>).map(IoK8sApiApiserverinternalV1alpha1ServerStorageVersionToJSON)),
    };
}

