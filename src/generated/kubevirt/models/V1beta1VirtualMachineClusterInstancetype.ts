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
import type { V1beta1VirtualMachineInstancetypeSpec } from './V1beta1VirtualMachineInstancetypeSpec';
import {
    V1beta1VirtualMachineInstancetypeSpecFromJSON,
    V1beta1VirtualMachineInstancetypeSpecFromJSONTyped,
    V1beta1VirtualMachineInstancetypeSpecToJSON,
} from './V1beta1VirtualMachineInstancetypeSpec';

/**
 * VirtualMachineClusterInstancetype is a cluster scoped version of VirtualMachineInstancetype resource.
 * @export
 * @interface V1beta1VirtualMachineClusterInstancetype
 */
export interface V1beta1VirtualMachineClusterInstancetype {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1beta1VirtualMachineClusterInstancetype
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1beta1VirtualMachineClusterInstancetype
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof V1beta1VirtualMachineClusterInstancetype
     */
    metadata?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {V1beta1VirtualMachineInstancetypeSpec}
     * @memberof V1beta1VirtualMachineClusterInstancetype
     */
    spec: V1beta1VirtualMachineInstancetypeSpec;
}

/**
 * Check if a given object implements the V1beta1VirtualMachineClusterInstancetype interface.
 */
export function instanceOfV1beta1VirtualMachineClusterInstancetype(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function V1beta1VirtualMachineClusterInstancetypeFromJSON(json: any): V1beta1VirtualMachineClusterInstancetype {
    return V1beta1VirtualMachineClusterInstancetypeFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineClusterInstancetypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1VirtualMachineClusterInstancetype {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : K8sIoApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': V1beta1VirtualMachineInstancetypeSpecFromJSON(json['spec']),
    };
}

export function V1beta1VirtualMachineClusterInstancetypeToJSON(value?: V1beta1VirtualMachineClusterInstancetype | null): any {
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
        'spec': V1beta1VirtualMachineInstancetypeSpecToJSON(value.spec),
    };
}

