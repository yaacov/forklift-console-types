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
import type { IoK8sApiCoreV1TopologySelectorTerm } from './IoK8sApiCoreV1TopologySelectorTerm';
import {
    IoK8sApiCoreV1TopologySelectorTermFromJSON,
    IoK8sApiCoreV1TopologySelectorTermFromJSONTyped,
    IoK8sApiCoreV1TopologySelectorTermToJSON,
} from './IoK8sApiCoreV1TopologySelectorTerm';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 * @export
 * @interface IoK8sApiStorageV1StorageClass
 */
export interface IoK8sApiStorageV1StorageClass {
    /**
     * allowVolumeExpansion shows whether the storage class allow volume expand.
     * @type {boolean}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    allowVolumeExpansion?: boolean;
    /**
     * allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
     * @type {Array<IoK8sApiCoreV1TopologySelectorTerm>}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    allowedTopologies?: Array<IoK8sApiCoreV1TopologySelectorTerm>;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
     * @type {Array<string>}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    mountOptions?: string[];
    /**
     * parameters holds the parameters for the provisioner that should create volumes of this storage class.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    parameters?: { [key: string]: string; };
    /**
     * provisioner indicates the type of the provisioner.
     * @type {string}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    provisioner: string;
    /**
     * reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete.
     * @type {string}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    reclaimPolicy?: string;
    /**
     * volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
     * @type {string}
     * @memberof IoK8sApiStorageV1StorageClass
     */
    volumeBindingMode?: string;
}

/**
 * Check if a given object implements the IoK8sApiStorageV1StorageClass interface.
 */
export function instanceOfIoK8sApiStorageV1StorageClass(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "provisioner" in value;

    return isInstance;
}

export function IoK8sApiStorageV1StorageClassFromJSON(json: any): IoK8sApiStorageV1StorageClass {
    return IoK8sApiStorageV1StorageClassFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1StorageClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1StorageClass {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowVolumeExpansion': !exists(json, 'allowVolumeExpansion') ? undefined : json['allowVolumeExpansion'],
        'allowedTopologies': !exists(json, 'allowedTopologies') ? undefined : ((json['allowedTopologies'] as Array<any>).map(IoK8sApiCoreV1TopologySelectorTermFromJSON)),
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'mountOptions': !exists(json, 'mountOptions') ? undefined : json['mountOptions'],
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
        'provisioner': json['provisioner'],
        'reclaimPolicy': !exists(json, 'reclaimPolicy') ? undefined : json['reclaimPolicy'],
        'volumeBindingMode': !exists(json, 'volumeBindingMode') ? undefined : json['volumeBindingMode'],
    };
}

export function IoK8sApiStorageV1StorageClassToJSON(value?: IoK8sApiStorageV1StorageClass | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowVolumeExpansion': value.allowVolumeExpansion,
        'allowedTopologies': value.allowedTopologies === undefined ? undefined : ((value.allowedTopologies as Array<any>).map(IoK8sApiCoreV1TopologySelectorTermToJSON)),
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'mountOptions': value.mountOptions,
        'parameters': value.parameters,
        'provisioner': value.provisioner,
        'reclaimPolicy': value.reclaimPolicy,
        'volumeBindingMode': value.volumeBindingMode,
    };
}

