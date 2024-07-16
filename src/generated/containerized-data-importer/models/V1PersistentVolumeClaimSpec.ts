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
import type { V1TypedLocalObjectReference } from './V1TypedLocalObjectReference';
import {
    V1TypedLocalObjectReferenceFromJSON,
    V1TypedLocalObjectReferenceFromJSONTyped,
    V1TypedLocalObjectReferenceToJSON,
} from './V1TypedLocalObjectReference';
import type { V1LabelSelector } from './V1LabelSelector';
import {
    V1LabelSelectorFromJSON,
    V1LabelSelectorFromJSONTyped,
    V1LabelSelectorToJSON,
} from './V1LabelSelector';
import type { V1VolumeResourceRequirements } from './V1VolumeResourceRequirements';
import {
    V1VolumeResourceRequirementsFromJSON,
    V1VolumeResourceRequirementsFromJSONTyped,
    V1VolumeResourceRequirementsToJSON,
} from './V1VolumeResourceRequirements';
import type { V1TypedObjectReference } from './V1TypedObjectReference';
import {
    V1TypedObjectReferenceFromJSON,
    V1TypedObjectReferenceFromJSONTyped,
    V1TypedObjectReferenceToJSON,
} from './V1TypedObjectReference';

/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 * @export
 * @interface V1PersistentVolumeClaimSpec
 */
export interface V1PersistentVolumeClaimSpec {
    /**
     * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     * @type {Array<string>}
     * @memberof V1PersistentVolumeClaimSpec
     */
    accessModes?: Array<V1PersistentVolumeClaimSpecAccessModesEnum>;
    /**
     * 
     * @type {V1TypedLocalObjectReference}
     * @memberof V1PersistentVolumeClaimSpec
     */
    dataSource?: V1TypedLocalObjectReference;
    /**
     * 
     * @type {V1TypedObjectReference}
     * @memberof V1PersistentVolumeClaimSpec
     */
    dataSourceRef?: V1TypedObjectReference;
    /**
     * 
     * @type {V1VolumeResourceRequirements}
     * @memberof V1PersistentVolumeClaimSpec
     */
    resources?: V1VolumeResourceRequirements;
    /**
     * 
     * @type {V1LabelSelector}
     * @memberof V1PersistentVolumeClaimSpec
     */
    selector?: V1LabelSelector;
    /**
     * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
     * @type {string}
     * @memberof V1PersistentVolumeClaimSpec
     */
    storageClassName?: string;
    /**
     * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
     * @type {string}
     * @memberof V1PersistentVolumeClaimSpec
     */
    volumeAttributesClassName?: string;
    /**
     * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
     * 
     * Possible enum values:
     *  - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
     *  - `"Filesystem"` means the volume will be or is formatted with a filesystem.
     *  - `"FromStorageProfile"` means the volume mode will be auto selected by CDI according to a matching StorageProfile
     * @type {string}
     * @memberof V1PersistentVolumeClaimSpec
     */
    volumeMode?: V1PersistentVolumeClaimSpecVolumeModeEnum;
    /**
     * volumeName is the binding reference to the PersistentVolume backing this claim.
     * @type {string}
     * @memberof V1PersistentVolumeClaimSpec
     */
    volumeName?: string;
}


/**
 * @export
 */
export const V1PersistentVolumeClaimSpecAccessModesEnum = {
    ReadOnlyMany: 'ReadOnlyMany',
    ReadWriteMany: 'ReadWriteMany',
    ReadWriteOnce: 'ReadWriteOnce',
    ReadWriteOncePod: 'ReadWriteOncePod'
} as const;
export type V1PersistentVolumeClaimSpecAccessModesEnum = typeof V1PersistentVolumeClaimSpecAccessModesEnum[keyof typeof V1PersistentVolumeClaimSpecAccessModesEnum];

/**
 * @export
 */
export const V1PersistentVolumeClaimSpecVolumeModeEnum = {
    Block: 'Block',
    Filesystem: 'Filesystem',
    FromStorageProfile: 'FromStorageProfile'
} as const;
export type V1PersistentVolumeClaimSpecVolumeModeEnum = typeof V1PersistentVolumeClaimSpecVolumeModeEnum[keyof typeof V1PersistentVolumeClaimSpecVolumeModeEnum];


/**
 * Check if a given object implements the V1PersistentVolumeClaimSpec interface.
 */
export function instanceOfV1PersistentVolumeClaimSpec(value: object): value is V1PersistentVolumeClaimSpec {
    return true;
}

export function V1PersistentVolumeClaimSpecFromJSON(json: any): V1PersistentVolumeClaimSpec {
    return V1PersistentVolumeClaimSpecFromJSONTyped(json, false);
}

export function V1PersistentVolumeClaimSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PersistentVolumeClaimSpec {
    if (json == null) {
        return json;
    }
    return {
        
        'accessModes': json['accessModes'] == null ? undefined : json['accessModes'],
        'dataSource': json['dataSource'] == null ? undefined : V1TypedLocalObjectReferenceFromJSON(json['dataSource']),
        'dataSourceRef': json['dataSourceRef'] == null ? undefined : V1TypedObjectReferenceFromJSON(json['dataSourceRef']),
        'resources': json['resources'] == null ? undefined : V1VolumeResourceRequirementsFromJSON(json['resources']),
        'selector': json['selector'] == null ? undefined : V1LabelSelectorFromJSON(json['selector']),
        'storageClassName': json['storageClassName'] == null ? undefined : json['storageClassName'],
        'volumeAttributesClassName': json['volumeAttributesClassName'] == null ? undefined : json['volumeAttributesClassName'],
        'volumeMode': json['volumeMode'] == null ? undefined : json['volumeMode'],
        'volumeName': json['volumeName'] == null ? undefined : json['volumeName'],
    };
}

export function V1PersistentVolumeClaimSpecToJSON(value?: V1PersistentVolumeClaimSpec | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accessModes': value['accessModes'],
        'dataSource': V1TypedLocalObjectReferenceToJSON(value['dataSource']),
        'dataSourceRef': V1TypedObjectReferenceToJSON(value['dataSourceRef']),
        'resources': V1VolumeResourceRequirementsToJSON(value['resources']),
        'selector': V1LabelSelectorToJSON(value['selector']),
        'storageClassName': value['storageClassName'],
        'volumeAttributesClassName': value['volumeAttributesClassName'],
        'volumeMode': value['volumeMode'],
        'volumeName': value['volumeName'],
    };
}
