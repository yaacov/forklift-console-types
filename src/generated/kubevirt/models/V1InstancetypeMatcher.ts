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
/**
 * InstancetypeMatcher references a instancetype that is used to fill fields in the VMI template.
 * @export
 * @interface V1InstancetypeMatcher
 */
export interface V1InstancetypeMatcher {
    /**
     * InferFromVolume lists the name of a volume that should be used to infer or discover the instancetype to be used through known annotations on the underlying resource. Once applied to the InstancetypeMatcher this field is removed.
     * @type {string}
     * @memberof V1InstancetypeMatcher
     */
    inferFromVolume?: string;
    /**
     * InferFromVolumeFailurePolicy controls what should happen on failure when inferring the instancetype. Allowed values are: "RejectInferFromVolumeFailure" and "IgnoreInferFromVolumeFailure". If not specified, "RejectInferFromVolumeFailure" is used by default.
     * @type {string}
     * @memberof V1InstancetypeMatcher
     */
    inferFromVolumeFailurePolicy?: string;
    /**
     * Kind specifies which instancetype resource is referenced. Allowed values are: "VirtualMachineInstancetype" and "VirtualMachineClusterInstancetype". If not specified, "VirtualMachineClusterInstancetype" is used by default.
     * @type {string}
     * @memberof V1InstancetypeMatcher
     */
    kind?: string;
    /**
     * Name is the name of the VirtualMachineInstancetype or VirtualMachineClusterInstancetype
     * @type {string}
     * @memberof V1InstancetypeMatcher
     */
    name?: string;
    /**
     * RevisionName specifies a ControllerRevision containing a specific copy of the VirtualMachineInstancetype or VirtualMachineClusterInstancetype to be used. This is initially captured the first time the instancetype is applied to the VirtualMachineInstance.
     * @type {string}
     * @memberof V1InstancetypeMatcher
     */
    revisionName?: string;
}

/**
 * Check if a given object implements the V1InstancetypeMatcher interface.
 */
export function instanceOfV1InstancetypeMatcher(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1InstancetypeMatcherFromJSON(json: any): V1InstancetypeMatcher {
    return V1InstancetypeMatcherFromJSONTyped(json, false);
}

export function V1InstancetypeMatcherFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1InstancetypeMatcher {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inferFromVolume': !exists(json, 'inferFromVolume') ? undefined : json['inferFromVolume'],
        'inferFromVolumeFailurePolicy': !exists(json, 'inferFromVolumeFailurePolicy') ? undefined : json['inferFromVolumeFailurePolicy'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'revisionName': !exists(json, 'revisionName') ? undefined : json['revisionName'],
    };
}

export function V1InstancetypeMatcherToJSON(value?: V1InstancetypeMatcher | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inferFromVolume': value.inferFromVolume,
        'inferFromVolumeFailurePolicy': value.inferFromVolumeFailurePolicy,
        'kind': value.kind,
        'name': value.name,
        'revisionName': value.revisionName,
    };
}

