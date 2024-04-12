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
/**
 * Represents a Persistent Disk resource in AWS.
 * 
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource
 */
export interface IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource {
    /**
     * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
     * @type {string}
     * @memberof IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource
     */
    fsType?: string;
    /**
     * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
     * @type {number}
     * @memberof IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource
     */
    partition?: number;
    /**
     * readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
     * @type {boolean}
     * @memberof IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource
     */
    readOnly?: boolean;
    /**
     * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
     * @type {string}
     * @memberof IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource
     */
    volumeID: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource interface.
 */
export function instanceOfIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "volumeID" in value;

    return isInstance;
}

export function IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceFromJSON(json: any): IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource {
    return IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'partition': !exists(json, 'partition') ? undefined : json['partition'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'volumeID': json['volumeID'],
    };
}

export function IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceToJSON(value?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fsType': value.fsType,
        'partition': value.partition,
        'readOnly': value.readOnly,
        'volumeID': value.volumeID,
    };
}

