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
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 * @export
 * @interface IoK8sApiCoreV1TopologySelectorLabelRequirement
 */
export interface IoK8sApiCoreV1TopologySelectorLabelRequirement {
    /**
     * The label key that the selector applies to.
     * @type {string}
     * @memberof IoK8sApiCoreV1TopologySelectorLabelRequirement
     */
    key: string;
    /**
     * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1TopologySelectorLabelRequirement
     */
    values: string[];
}

/**
 * Check if a given object implements the IoK8sApiCoreV1TopologySelectorLabelRequirement interface.
 */
export function instanceOfIoK8sApiCoreV1TopologySelectorLabelRequirement(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "values" in value;

    return isInstance;
}

export function IoK8sApiCoreV1TopologySelectorLabelRequirementFromJSON(json: any): IoK8sApiCoreV1TopologySelectorLabelRequirement {
    return IoK8sApiCoreV1TopologySelectorLabelRequirementFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1TopologySelectorLabelRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1TopologySelectorLabelRequirement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'values': json['values'],
    };
}

export function IoK8sApiCoreV1TopologySelectorLabelRequirementToJSON(value?: IoK8sApiCoreV1TopologySelectorLabelRequirement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'values': value.values,
    };
}

