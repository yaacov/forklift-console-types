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
 * 
 * @export
 * @interface V1DataVolumeSource
 */
export interface V1DataVolumeSource {
    /**
     * Hotpluggable indicates whether the volume can be hotplugged and hotunplugged.
     * @type {boolean}
     * @memberof V1DataVolumeSource
     */
    hotpluggable?: boolean;
    /**
     * Name of both the DataVolume and the PVC in the same namespace. After PVC population the DataVolume is garbage collected by default.
     * @type {string}
     * @memberof V1DataVolumeSource
     */
    name: string;
}

/**
 * Check if a given object implements the V1DataVolumeSource interface.
 */
export function instanceOfV1DataVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1DataVolumeSourceFromJSON(json: any): V1DataVolumeSource {
    return V1DataVolumeSourceFromJSONTyped(json, false);
}

export function V1DataVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DataVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotpluggable': !exists(json, 'hotpluggable') ? undefined : json['hotpluggable'],
        'name': json['name'],
    };
}

export function V1DataVolumeSourceToJSON(value?: V1DataVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotpluggable': value.hotpluggable,
        'name': value.name,
    };
}

