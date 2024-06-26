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
import type { IoK8sApiStorageV1VolumeNodeResources } from './IoK8sApiStorageV1VolumeNodeResources';
import {
    IoK8sApiStorageV1VolumeNodeResourcesFromJSON,
    IoK8sApiStorageV1VolumeNodeResourcesFromJSONTyped,
    IoK8sApiStorageV1VolumeNodeResourcesToJSON,
} from './IoK8sApiStorageV1VolumeNodeResources';

/**
 * CSINodeDriver holds information about the specification of one CSI driver installed on a node
 * @export
 * @interface IoK8sApiStorageV1CSINodeDriver
 */
export interface IoK8sApiStorageV1CSINodeDriver {
    /**
     * 
     * @type {IoK8sApiStorageV1VolumeNodeResources}
     * @memberof IoK8sApiStorageV1CSINodeDriver
     */
    allocatable?: IoK8sApiStorageV1VolumeNodeResources;
    /**
     * name represents the name of the CSI driver that this object refers to. This MUST be the same name returned by the CSI GetPluginName() call for that driver.
     * @type {string}
     * @memberof IoK8sApiStorageV1CSINodeDriver
     */
    name: string;
    /**
     * nodeID of the node from the driver point of view. This field enables Kubernetes to communicate with storage systems that do not share the same nomenclature for nodes. For example, Kubernetes may refer to a given node as "node1", but the storage system may refer to the same node as "nodeA". When Kubernetes issues a command to the storage system to attach a volume to a specific node, it can use this field to refer to the node name using the ID that the storage system will understand, e.g. "nodeA" instead of "node1". This field is required.
     * @type {string}
     * @memberof IoK8sApiStorageV1CSINodeDriver
     */
    nodeID: string;
    /**
     * topologyKeys is the list of keys supported by the driver. When a driver is initialized on a cluster, it provides a set of topology keys that it understands (e.g. "company.com/zone", "company.com/region"). When a driver is initialized on a node, it provides the same topology keys along with values. Kubelet will expose these topology keys as labels on its own node object. When Kubernetes does topology aware provisioning, it can use this list to determine which labels it should retrieve from the node object and pass back to the driver. It is possible for different nodes to use different topology keys. This can be empty if driver does not support topology.
     * @type {Array<string>}
     * @memberof IoK8sApiStorageV1CSINodeDriver
     */
    topologyKeys?: string[];
}

/**
 * Check if a given object implements the IoK8sApiStorageV1CSINodeDriver interface.
 */
export function instanceOfIoK8sApiStorageV1CSINodeDriver(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "nodeID" in value;

    return isInstance;
}

export function IoK8sApiStorageV1CSINodeDriverFromJSON(json: any): IoK8sApiStorageV1CSINodeDriver {
    return IoK8sApiStorageV1CSINodeDriverFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1CSINodeDriverFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1CSINodeDriver {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allocatable': !exists(json, 'allocatable') ? undefined : IoK8sApiStorageV1VolumeNodeResourcesFromJSON(json['allocatable']),
        'name': json['name'],
        'nodeID': json['nodeID'],
        'topologyKeys': !exists(json, 'topologyKeys') ? undefined : json['topologyKeys'],
    };
}

export function IoK8sApiStorageV1CSINodeDriverToJSON(value?: IoK8sApiStorageV1CSINodeDriver | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allocatable': IoK8sApiStorageV1VolumeNodeResourcesToJSON(value.allocatable),
        'name': value.name,
        'nodeID': value.nodeID,
        'topologyKeys': value.topologyKeys,
    };
}

