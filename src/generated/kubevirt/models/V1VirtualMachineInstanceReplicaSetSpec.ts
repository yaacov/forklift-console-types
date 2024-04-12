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
import type { K8sIoApimachineryPkgApisMetaV1LabelSelector } from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import {
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './K8sIoApimachineryPkgApisMetaV1LabelSelector';
import type { V1VirtualMachineInstanceTemplateSpec } from './V1VirtualMachineInstanceTemplateSpec';
import {
    V1VirtualMachineInstanceTemplateSpecFromJSON,
    V1VirtualMachineInstanceTemplateSpecFromJSONTyped,
    V1VirtualMachineInstanceTemplateSpecToJSON,
} from './V1VirtualMachineInstanceTemplateSpec';

/**
 * 
 * @export
 * @interface V1VirtualMachineInstanceReplicaSetSpec
 */
export interface V1VirtualMachineInstanceReplicaSetSpec {
    /**
     * Indicates that the replica set is paused.
     * @type {boolean}
     * @memberof V1VirtualMachineInstanceReplicaSetSpec
     */
    paused?: boolean;
    /**
     * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
     * @type {number}
     * @memberof V1VirtualMachineInstanceReplicaSetSpec
     */
    replicas?: number;
    /**
     * 
     * @type {K8sIoApimachineryPkgApisMetaV1LabelSelector}
     * @memberof V1VirtualMachineInstanceReplicaSetSpec
     */
    selector: K8sIoApimachineryPkgApisMetaV1LabelSelector;
    /**
     * 
     * @type {V1VirtualMachineInstanceTemplateSpec}
     * @memberof V1VirtualMachineInstanceReplicaSetSpec
     */
    template: V1VirtualMachineInstanceTemplateSpec;
}

/**
 * Check if a given object implements the V1VirtualMachineInstanceReplicaSetSpec interface.
 */
export function instanceOfV1VirtualMachineInstanceReplicaSetSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "selector" in value;
    isInstance = isInstance && "template" in value;

    return isInstance;
}

export function V1VirtualMachineInstanceReplicaSetSpecFromJSON(json: any): V1VirtualMachineInstanceReplicaSetSpec {
    return V1VirtualMachineInstanceReplicaSetSpecFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceReplicaSetSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceReplicaSetSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paused': !exists(json, 'paused') ? undefined : json['paused'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'selector': K8sIoApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'template': V1VirtualMachineInstanceTemplateSpecFromJSON(json['template']),
    };
}

export function V1VirtualMachineInstanceReplicaSetSpecToJSON(value?: V1VirtualMachineInstanceReplicaSetSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paused': value.paused,
        'replicas': value.replicas,
        'selector': K8sIoApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
        'template': V1VirtualMachineInstanceTemplateSpecToJSON(value.template),
    };
}

