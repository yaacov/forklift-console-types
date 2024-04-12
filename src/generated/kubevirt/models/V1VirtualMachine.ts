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
import type { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import type { V1VirtualMachineSpec } from './V1VirtualMachineSpec';
import {
    V1VirtualMachineSpecFromJSON,
    V1VirtualMachineSpecFromJSONTyped,
    V1VirtualMachineSpecToJSON,
} from './V1VirtualMachineSpec';
import type { V1VirtualMachineStatus } from './V1VirtualMachineStatus';
import {
    V1VirtualMachineStatusFromJSON,
    V1VirtualMachineStatusFromJSONTyped,
    V1VirtualMachineStatusToJSON,
} from './V1VirtualMachineStatus';

/**
 * VirtualMachine handles the VirtualMachines that are not running or are in a stopped state The VirtualMachine contains the template to create the VirtualMachineInstance. It also mirrors the running state of the created VirtualMachineInstance in its status.
 * @export
 * @interface V1VirtualMachine
 */
export interface V1VirtualMachine {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1VirtualMachine
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1VirtualMachine
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1VirtualMachine
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1VirtualMachineSpec}
     * @memberof V1VirtualMachine
     */
    spec: V1VirtualMachineSpec;
    /**
     * 
     * @type {V1VirtualMachineStatus}
     * @memberof V1VirtualMachine
     */
    status?: V1VirtualMachineStatus;
}

/**
 * Check if a given object implements the V1VirtualMachine interface.
 */
export function instanceOfV1VirtualMachine(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function V1VirtualMachineFromJSON(json: any): V1VirtualMachine {
    return V1VirtualMachineFromJSONTyped(json, false);
}

export function V1VirtualMachineFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachine {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1VirtualMachineSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1VirtualMachineStatusFromJSON(json['status']),
    };
}

export function V1VirtualMachineToJSON(value?: V1VirtualMachine | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': V1VirtualMachineSpecToJSON(value.spec),
        'status': V1VirtualMachineStatusToJSON(value.status),
    };
}

