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
import type { V1alpha1Error } from './V1alpha1Error';
import {
    V1alpha1ErrorFromJSON,
    V1alpha1ErrorFromJSONTyped,
    V1alpha1ErrorToJSON,
} from './V1alpha1Error';

/**
 * VolumeSnapshotStatus is the status of a VolumeSnapshot
 * @export
 * @interface V1alpha1VolumeSnapshotStatus
 */
export interface V1alpha1VolumeSnapshotStatus {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof V1alpha1VolumeSnapshotStatus
     */
    creationTime?: string;
    /**
     * 
     * @type {V1alpha1Error}
     * @memberof V1alpha1VolumeSnapshotStatus
     */
    error?: V1alpha1Error;
    /**
     * 
     * @type {boolean}
     * @memberof V1alpha1VolumeSnapshotStatus
     */
    readyToUse?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VolumeSnapshotStatus
     */
    volumeSnapshotName: string;
}

/**
 * Check if a given object implements the V1alpha1VolumeSnapshotStatus interface.
 */
export function instanceOfV1alpha1VolumeSnapshotStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "volumeSnapshotName" in value;

    return isInstance;
}

export function V1alpha1VolumeSnapshotStatusFromJSON(json: any): V1alpha1VolumeSnapshotStatus {
    return V1alpha1VolumeSnapshotStatusFromJSONTyped(json, false);
}

export function V1alpha1VolumeSnapshotStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VolumeSnapshotStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'creationTime': !exists(json, 'creationTime') ? undefined : json['creationTime'],
        'error': !exists(json, 'error') ? undefined : V1alpha1ErrorFromJSON(json['error']),
        'readyToUse': !exists(json, 'readyToUse') ? undefined : json['readyToUse'],
        'volumeSnapshotName': json['volumeSnapshotName'],
    };
}

export function V1alpha1VolumeSnapshotStatusToJSON(value?: V1alpha1VolumeSnapshotStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'creationTime': value.creationTime === undefined ? undefined : (value.creationTime),
        'error': V1alpha1ErrorToJSON(value.error),
        'readyToUse': value.readyToUse,
        'volumeSnapshotName': value.volumeSnapshotName,
    };
}

