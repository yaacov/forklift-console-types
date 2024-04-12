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
import type { IoK8sApiCoreV1NodeConfigSource } from './IoK8sApiCoreV1NodeConfigSource';
import {
    IoK8sApiCoreV1NodeConfigSourceFromJSON,
    IoK8sApiCoreV1NodeConfigSourceFromJSONTyped,
    IoK8sApiCoreV1NodeConfigSourceToJSON,
} from './IoK8sApiCoreV1NodeConfigSource';
import type { IoK8sApiCoreV1Taint } from './IoK8sApiCoreV1Taint';
import {
    IoK8sApiCoreV1TaintFromJSON,
    IoK8sApiCoreV1TaintFromJSONTyped,
    IoK8sApiCoreV1TaintToJSON,
} from './IoK8sApiCoreV1Taint';

/**
 * NodeSpec describes the attributes that a node is created with.
 * @export
 * @interface IoK8sApiCoreV1NodeSpec
 */
export interface IoK8sApiCoreV1NodeSpec {
    /**
     * 
     * @type {IoK8sApiCoreV1NodeConfigSource}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    configSource?: IoK8sApiCoreV1NodeConfigSource;
    /**
     * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    externalID?: string;
    /**
     * PodCIDR represents the pod IP range assigned to the node.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    podCIDR?: string;
    /**
     * podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    podCIDRs?: string[];
    /**
     * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    providerID?: string;
    /**
     * If specified, the node's taints.
     * @type {Array<IoK8sApiCoreV1Taint>}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    taints?: Array<IoK8sApiCoreV1Taint>;
    /**
     * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
     * @type {boolean}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    unschedulable?: boolean;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1NodeSpec interface.
 */
export function instanceOfIoK8sApiCoreV1NodeSpec(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiCoreV1NodeSpecFromJSON(json: any): IoK8sApiCoreV1NodeSpec {
    return IoK8sApiCoreV1NodeSpecFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NodeSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1NodeSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configSource': !exists(json, 'configSource') ? undefined : IoK8sApiCoreV1NodeConfigSourceFromJSON(json['configSource']),
        'externalID': !exists(json, 'externalID') ? undefined : json['externalID'],
        'podCIDR': !exists(json, 'podCIDR') ? undefined : json['podCIDR'],
        'podCIDRs': !exists(json, 'podCIDRs') ? undefined : json['podCIDRs'],
        'providerID': !exists(json, 'providerID') ? undefined : json['providerID'],
        'taints': !exists(json, 'taints') ? undefined : ((json['taints'] as Array<any>).map(IoK8sApiCoreV1TaintFromJSON)),
        'unschedulable': !exists(json, 'unschedulable') ? undefined : json['unschedulable'],
    };
}

export function IoK8sApiCoreV1NodeSpecToJSON(value?: IoK8sApiCoreV1NodeSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configSource': IoK8sApiCoreV1NodeConfigSourceToJSON(value.configSource),
        'externalID': value.externalID,
        'podCIDR': value.podCIDR,
        'podCIDRs': value.podCIDRs,
        'providerID': value.providerID,
        'taints': value.taints === undefined ? undefined : ((value.taints as Array<any>).map(IoK8sApiCoreV1TaintToJSON)),
        'unschedulable': value.unschedulable,
    };
}

