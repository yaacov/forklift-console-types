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
import type { K8sIoApimachineryPkgApisMetaV1ListMeta } from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import {
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON,
    K8sIoApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1ListMetaToJSON,
} from './K8sIoApimachineryPkgApisMetaV1ListMeta';
import type { V1alpha1VirtualMachineExport } from './V1alpha1VirtualMachineExport';
import {
    V1alpha1VirtualMachineExportFromJSON,
    V1alpha1VirtualMachineExportFromJSONTyped,
    V1alpha1VirtualMachineExportToJSON,
} from './V1alpha1VirtualMachineExport';

/**
 * VirtualMachineExportList is a list of VirtualMachineExport resources
 * @export
 * @interface V1alpha1VirtualMachineExportList
 */
export interface V1alpha1VirtualMachineExportList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof V1alpha1VirtualMachineExportList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<V1alpha1VirtualMachineExport>}
     * @memberof V1alpha1VirtualMachineExportList
     */
    items: Array<V1alpha1VirtualMachineExport>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof V1alpha1VirtualMachineExportList
     */
    kind?: string;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
     * @memberof V1alpha1VirtualMachineExportList
     */
    metadata: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

/**
 * Check if a given object implements the V1alpha1VirtualMachineExportList interface.
 */
export function instanceOfV1alpha1VirtualMachineExportList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "metadata" in value;

    return isInstance;
}

export function V1alpha1VirtualMachineExportListFromJSON(json: any): V1alpha1VirtualMachineExportList {
    return V1alpha1VirtualMachineExportListFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineExportListFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineExportList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(V1alpha1VirtualMachineExportFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function V1alpha1VirtualMachineExportListToJSON(value?: V1alpha1VirtualMachineExportList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(V1alpha1VirtualMachineExportToJSON)),
        'kind': value.kind,
        'metadata': K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}
