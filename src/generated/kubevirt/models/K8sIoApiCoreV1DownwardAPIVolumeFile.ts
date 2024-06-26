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
import type { K8sIoApiCoreV1ObjectFieldSelector } from './K8sIoApiCoreV1ObjectFieldSelector';
import {
    K8sIoApiCoreV1ObjectFieldSelectorFromJSON,
    K8sIoApiCoreV1ObjectFieldSelectorFromJSONTyped,
    K8sIoApiCoreV1ObjectFieldSelectorToJSON,
} from './K8sIoApiCoreV1ObjectFieldSelector';
import type { K8sIoApiCoreV1ResourceFieldSelector } from './K8sIoApiCoreV1ResourceFieldSelector';
import {
    K8sIoApiCoreV1ResourceFieldSelectorFromJSON,
    K8sIoApiCoreV1ResourceFieldSelectorFromJSONTyped,
    K8sIoApiCoreV1ResourceFieldSelectorToJSON,
} from './K8sIoApiCoreV1ResourceFieldSelector';

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 * @export
 * @interface K8sIoApiCoreV1DownwardAPIVolumeFile
 */
export interface K8sIoApiCoreV1DownwardAPIVolumeFile {
    /**
     * 
     * @type {K8sIoApiCoreV1ObjectFieldSelector}
     * @memberof K8sIoApiCoreV1DownwardAPIVolumeFile
     */
    fieldRef?: K8sIoApiCoreV1ObjectFieldSelector;
    /**
     * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof K8sIoApiCoreV1DownwardAPIVolumeFile
     */
    mode?: number;
    /**
     * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
     * @type {string}
     * @memberof K8sIoApiCoreV1DownwardAPIVolumeFile
     */
    path: string;
    /**
     * 
     * @type {K8sIoApiCoreV1ResourceFieldSelector}
     * @memberof K8sIoApiCoreV1DownwardAPIVolumeFile
     */
    resourceFieldRef?: K8sIoApiCoreV1ResourceFieldSelector;
}

/**
 * Check if a given object implements the K8sIoApiCoreV1DownwardAPIVolumeFile interface.
 */
export function instanceOfK8sIoApiCoreV1DownwardAPIVolumeFile(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function K8sIoApiCoreV1DownwardAPIVolumeFileFromJSON(json: any): K8sIoApiCoreV1DownwardAPIVolumeFile {
    return K8sIoApiCoreV1DownwardAPIVolumeFileFromJSONTyped(json, false);
}

export function K8sIoApiCoreV1DownwardAPIVolumeFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): K8sIoApiCoreV1DownwardAPIVolumeFile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fieldRef': !exists(json, 'fieldRef') ? undefined : K8sIoApiCoreV1ObjectFieldSelectorFromJSON(json['fieldRef']),
        'mode': !exists(json, 'mode') ? undefined : json['mode'],
        'path': json['path'],
        'resourceFieldRef': !exists(json, 'resourceFieldRef') ? undefined : K8sIoApiCoreV1ResourceFieldSelectorFromJSON(json['resourceFieldRef']),
    };
}

export function K8sIoApiCoreV1DownwardAPIVolumeFileToJSON(value?: K8sIoApiCoreV1DownwardAPIVolumeFile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fieldRef': K8sIoApiCoreV1ObjectFieldSelectorToJSON(value.fieldRef),
        'mode': value.mode,
        'path': value.path,
        'resourceFieldRef': K8sIoApiCoreV1ResourceFieldSelectorToJSON(value.resourceFieldRef),
    };
}

