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
 * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale {
    /**
     * labelSelectorPath defines the JSON path inside of a custom resource that corresponds to Scale `status.selector`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status` or `.spec`. Must be set to work with HorizontalPodAutoscaler. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the custom resource, the `status.selector` value in the `/scale` subresource will default to the empty string.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale
     */
    labelSelectorPath?: string;
    /**
     * specReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `spec.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.spec`. If there is no value under the given path in the custom resource, the `/scale` subresource will return an error on GET.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale
     */
    specReplicasPath: string;
    /**
     * statusReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `status.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status`. If there is no value under the given path in the custom resource, the `status.replicas` value in the `/scale` subresource will default to 0.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale
     */
    statusReplicasPath: string;
}

/**
 * Check if a given object implements the IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale interface.
 */
export function instanceOfIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "specReplicasPath" in value;
    isInstance = isInstance && "statusReplicasPath" in value;

    return isInstance;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScaleFromJSON(json: any): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale {
    return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScaleFromJSONTyped(json, false);
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labelSelectorPath': !exists(json, 'labelSelectorPath') ? undefined : json['labelSelectorPath'],
        'specReplicasPath': json['specReplicasPath'],
        'statusReplicasPath': json['statusReplicasPath'],
    };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScaleToJSON(value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labelSelectorPath': value.labelSelectorPath,
        'specReplicasPath': value.specReplicasPath,
        'statusReplicasPath': value.statusReplicasPath,
    };
}

