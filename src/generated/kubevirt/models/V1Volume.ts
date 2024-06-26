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
import type { V1CloudInitConfigDriveSource } from './V1CloudInitConfigDriveSource';
import {
    V1CloudInitConfigDriveSourceFromJSON,
    V1CloudInitConfigDriveSourceFromJSONTyped,
    V1CloudInitConfigDriveSourceToJSON,
} from './V1CloudInitConfigDriveSource';
import type { V1CloudInitNoCloudSource } from './V1CloudInitNoCloudSource';
import {
    V1CloudInitNoCloudSourceFromJSON,
    V1CloudInitNoCloudSourceFromJSONTyped,
    V1CloudInitNoCloudSourceToJSON,
} from './V1CloudInitNoCloudSource';
import type { V1ConfigMapVolumeSource } from './V1ConfigMapVolumeSource';
import {
    V1ConfigMapVolumeSourceFromJSON,
    V1ConfigMapVolumeSourceFromJSONTyped,
    V1ConfigMapVolumeSourceToJSON,
} from './V1ConfigMapVolumeSource';
import type { V1ContainerDiskSource } from './V1ContainerDiskSource';
import {
    V1ContainerDiskSourceFromJSON,
    V1ContainerDiskSourceFromJSONTyped,
    V1ContainerDiskSourceToJSON,
} from './V1ContainerDiskSource';
import type { V1DataVolumeSource } from './V1DataVolumeSource';
import {
    V1DataVolumeSourceFromJSON,
    V1DataVolumeSourceFromJSONTyped,
    V1DataVolumeSourceToJSON,
} from './V1DataVolumeSource';
import type { V1DownwardAPIVolumeSource } from './V1DownwardAPIVolumeSource';
import {
    V1DownwardAPIVolumeSourceFromJSON,
    V1DownwardAPIVolumeSourceFromJSONTyped,
    V1DownwardAPIVolumeSourceToJSON,
} from './V1DownwardAPIVolumeSource';
import type { V1EmptyDiskSource } from './V1EmptyDiskSource';
import {
    V1EmptyDiskSourceFromJSON,
    V1EmptyDiskSourceFromJSONTyped,
    V1EmptyDiskSourceToJSON,
} from './V1EmptyDiskSource';
import type { V1EphemeralVolumeSource } from './V1EphemeralVolumeSource';
import {
    V1EphemeralVolumeSourceFromJSON,
    V1EphemeralVolumeSourceFromJSONTyped,
    V1EphemeralVolumeSourceToJSON,
} from './V1EphemeralVolumeSource';
import type { V1HostDisk } from './V1HostDisk';
import {
    V1HostDiskFromJSON,
    V1HostDiskFromJSONTyped,
    V1HostDiskToJSON,
} from './V1HostDisk';
import type { V1MemoryDumpVolumeSource } from './V1MemoryDumpVolumeSource';
import {
    V1MemoryDumpVolumeSourceFromJSON,
    V1MemoryDumpVolumeSourceFromJSONTyped,
    V1MemoryDumpVolumeSourceToJSON,
} from './V1MemoryDumpVolumeSource';
import type { V1PersistentVolumeClaimVolumeSource } from './V1PersistentVolumeClaimVolumeSource';
import {
    V1PersistentVolumeClaimVolumeSourceFromJSON,
    V1PersistentVolumeClaimVolumeSourceFromJSONTyped,
    V1PersistentVolumeClaimVolumeSourceToJSON,
} from './V1PersistentVolumeClaimVolumeSource';
import type { V1SecretVolumeSource } from './V1SecretVolumeSource';
import {
    V1SecretVolumeSourceFromJSON,
    V1SecretVolumeSourceFromJSONTyped,
    V1SecretVolumeSourceToJSON,
} from './V1SecretVolumeSource';
import type { V1ServiceAccountVolumeSource } from './V1ServiceAccountVolumeSource';
import {
    V1ServiceAccountVolumeSourceFromJSON,
    V1ServiceAccountVolumeSourceFromJSONTyped,
    V1ServiceAccountVolumeSourceToJSON,
} from './V1ServiceAccountVolumeSource';
import type { V1SysprepSource } from './V1SysprepSource';
import {
    V1SysprepSourceFromJSON,
    V1SysprepSourceFromJSONTyped,
    V1SysprepSourceToJSON,
} from './V1SysprepSource';

/**
 * Volume represents a named volume in a vmi.
 * @export
 * @interface V1Volume
 */
export interface V1Volume {
    /**
     * 
     * @type {V1CloudInitConfigDriveSource}
     * @memberof V1Volume
     */
    cloudInitConfigDrive?: V1CloudInitConfigDriveSource;
    /**
     * 
     * @type {V1CloudInitNoCloudSource}
     * @memberof V1Volume
     */
    cloudInitNoCloud?: V1CloudInitNoCloudSource;
    /**
     * 
     * @type {V1ConfigMapVolumeSource}
     * @memberof V1Volume
     */
    configMap?: V1ConfigMapVolumeSource;
    /**
     * 
     * @type {V1ContainerDiskSource}
     * @memberof V1Volume
     */
    containerDisk?: V1ContainerDiskSource;
    /**
     * 
     * @type {V1DataVolumeSource}
     * @memberof V1Volume
     */
    dataVolume?: V1DataVolumeSource;
    /**
     * 
     * @type {V1DownwardAPIVolumeSource}
     * @memberof V1Volume
     */
    downwardAPI?: V1DownwardAPIVolumeSource;
    /**
     * DownwardMetricsVolumeSource adds a very small disk to VMIs which contains a limited view of host and guest metrics. The disk content is compatible with vhostmd (https://github.com/vhostmd/vhostmd) and vm-dump-metrics.
     * @type {object}
     * @memberof V1Volume
     */
    downwardMetrics?: object;
    /**
     * 
     * @type {V1EmptyDiskSource}
     * @memberof V1Volume
     */
    emptyDisk?: V1EmptyDiskSource;
    /**
     * 
     * @type {V1EphemeralVolumeSource}
     * @memberof V1Volume
     */
    ephemeral?: V1EphemeralVolumeSource;
    /**
     * 
     * @type {V1HostDisk}
     * @memberof V1Volume
     */
    hostDisk?: V1HostDisk;
    /**
     * 
     * @type {V1MemoryDumpVolumeSource}
     * @memberof V1Volume
     */
    memoryDump?: V1MemoryDumpVolumeSource;
    /**
     * Volume's name. Must be a DNS_LABEL and unique within the vmi. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof V1Volume
     */
    name: string;
    /**
     * 
     * @type {V1PersistentVolumeClaimVolumeSource}
     * @memberof V1Volume
     */
    persistentVolumeClaim?: V1PersistentVolumeClaimVolumeSource;
    /**
     * 
     * @type {V1SecretVolumeSource}
     * @memberof V1Volume
     */
    secret?: V1SecretVolumeSource;
    /**
     * 
     * @type {V1ServiceAccountVolumeSource}
     * @memberof V1Volume
     */
    serviceAccount?: V1ServiceAccountVolumeSource;
    /**
     * 
     * @type {V1SysprepSource}
     * @memberof V1Volume
     */
    sysprep?: V1SysprepSource;
}

/**
 * Check if a given object implements the V1Volume interface.
 */
export function instanceOfV1Volume(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function V1VolumeFromJSON(json: any): V1Volume {
    return V1VolumeFromJSONTyped(json, false);
}

export function V1VolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Volume {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloudInitConfigDrive': !exists(json, 'cloudInitConfigDrive') ? undefined : V1CloudInitConfigDriveSourceFromJSON(json['cloudInitConfigDrive']),
        'cloudInitNoCloud': !exists(json, 'cloudInitNoCloud') ? undefined : V1CloudInitNoCloudSourceFromJSON(json['cloudInitNoCloud']),
        'configMap': !exists(json, 'configMap') ? undefined : V1ConfigMapVolumeSourceFromJSON(json['configMap']),
        'containerDisk': !exists(json, 'containerDisk') ? undefined : V1ContainerDiskSourceFromJSON(json['containerDisk']),
        'dataVolume': !exists(json, 'dataVolume') ? undefined : V1DataVolumeSourceFromJSON(json['dataVolume']),
        'downwardAPI': !exists(json, 'downwardAPI') ? undefined : V1DownwardAPIVolumeSourceFromJSON(json['downwardAPI']),
        'downwardMetrics': !exists(json, 'downwardMetrics') ? undefined : json['downwardMetrics'],
        'emptyDisk': !exists(json, 'emptyDisk') ? undefined : V1EmptyDiskSourceFromJSON(json['emptyDisk']),
        'ephemeral': !exists(json, 'ephemeral') ? undefined : V1EphemeralVolumeSourceFromJSON(json['ephemeral']),
        'hostDisk': !exists(json, 'hostDisk') ? undefined : V1HostDiskFromJSON(json['hostDisk']),
        'memoryDump': !exists(json, 'memoryDump') ? undefined : V1MemoryDumpVolumeSourceFromJSON(json['memoryDump']),
        'name': json['name'],
        'persistentVolumeClaim': !exists(json, 'persistentVolumeClaim') ? undefined : V1PersistentVolumeClaimVolumeSourceFromJSON(json['persistentVolumeClaim']),
        'secret': !exists(json, 'secret') ? undefined : V1SecretVolumeSourceFromJSON(json['secret']),
        'serviceAccount': !exists(json, 'serviceAccount') ? undefined : V1ServiceAccountVolumeSourceFromJSON(json['serviceAccount']),
        'sysprep': !exists(json, 'sysprep') ? undefined : V1SysprepSourceFromJSON(json['sysprep']),
    };
}

export function V1VolumeToJSON(value?: V1Volume | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloudInitConfigDrive': V1CloudInitConfigDriveSourceToJSON(value.cloudInitConfigDrive),
        'cloudInitNoCloud': V1CloudInitNoCloudSourceToJSON(value.cloudInitNoCloud),
        'configMap': V1ConfigMapVolumeSourceToJSON(value.configMap),
        'containerDisk': V1ContainerDiskSourceToJSON(value.containerDisk),
        'dataVolume': V1DataVolumeSourceToJSON(value.dataVolume),
        'downwardAPI': V1DownwardAPIVolumeSourceToJSON(value.downwardAPI),
        'downwardMetrics': value.downwardMetrics,
        'emptyDisk': V1EmptyDiskSourceToJSON(value.emptyDisk),
        'ephemeral': V1EphemeralVolumeSourceToJSON(value.ephemeral),
        'hostDisk': V1HostDiskToJSON(value.hostDisk),
        'memoryDump': V1MemoryDumpVolumeSourceToJSON(value.memoryDump),
        'name': value.name,
        'persistentVolumeClaim': V1PersistentVolumeClaimVolumeSourceToJSON(value.persistentVolumeClaim),
        'secret': V1SecretVolumeSourceToJSON(value.secret),
        'serviceAccount': V1ServiceAccountVolumeSourceToJSON(value.serviceAccount),
        'sysprep': V1SysprepSourceToJSON(value.sysprep),
    };
}

