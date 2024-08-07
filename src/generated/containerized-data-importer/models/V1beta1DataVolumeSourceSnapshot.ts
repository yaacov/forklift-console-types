/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt Containerized Data Importer API
 * Containerized Data Importer for KubeVirt.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../../runtime';
/**
 * DataVolumeSourceSnapshot provides the parameters to create a Data Volume from an existing VolumeSnapshot
 * @export
 * @interface V1beta1DataVolumeSourceSnapshot
 */
export interface V1beta1DataVolumeSourceSnapshot {
    /**
     * The name of the source VolumeSnapshot
     * @type {string}
     * @memberof V1beta1DataVolumeSourceSnapshot
     */
    name: string;
    /**
     * The namespace of the source VolumeSnapshot
     * @type {string}
     * @memberof V1beta1DataVolumeSourceSnapshot
     */
    namespace: string;
}

/**
 * Check if a given object implements the V1beta1DataVolumeSourceSnapshot interface.
 */
export function instanceOfV1beta1DataVolumeSourceSnapshot(value: object): value is V1beta1DataVolumeSourceSnapshot {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    return true;
}

export function V1beta1DataVolumeSourceSnapshotFromJSON(json: any): V1beta1DataVolumeSourceSnapshot {
    return V1beta1DataVolumeSourceSnapshotFromJSONTyped(json, false);
}

export function V1beta1DataVolumeSourceSnapshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1DataVolumeSourceSnapshot {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
    };
}

export function V1beta1DataVolumeSourceSnapshotToJSON(value?: V1beta1DataVolumeSourceSnapshot | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'namespace': value['namespace'],
    };
}

