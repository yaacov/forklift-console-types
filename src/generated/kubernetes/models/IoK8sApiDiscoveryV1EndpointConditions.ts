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
 * EndpointConditions represents the current condition of an endpoint.
 * @export
 * @interface IoK8sApiDiscoveryV1EndpointConditions
 */
export interface IoK8sApiDiscoveryV1EndpointConditions {
    /**
     * ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be "true" for terminating endpoints, except when the normal readiness behavior is being explicitly overridden, for example when the associated Service has set the publishNotReadyAddresses flag.
     * @type {boolean}
     * @memberof IoK8sApiDiscoveryV1EndpointConditions
     */
    ready?: boolean;
    /**
     * serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition.
     * @type {boolean}
     * @memberof IoK8sApiDiscoveryV1EndpointConditions
     */
    serving?: boolean;
    /**
     * terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating.
     * @type {boolean}
     * @memberof IoK8sApiDiscoveryV1EndpointConditions
     */
    terminating?: boolean;
}

/**
 * Check if a given object implements the IoK8sApiDiscoveryV1EndpointConditions interface.
 */
export function instanceOfIoK8sApiDiscoveryV1EndpointConditions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IoK8sApiDiscoveryV1EndpointConditionsFromJSON(json: any): IoK8sApiDiscoveryV1EndpointConditions {
    return IoK8sApiDiscoveryV1EndpointConditionsFromJSONTyped(json, false);
}

export function IoK8sApiDiscoveryV1EndpointConditionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiDiscoveryV1EndpointConditions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ready': !exists(json, 'ready') ? undefined : json['ready'],
        'serving': !exists(json, 'serving') ? undefined : json['serving'],
        'terminating': !exists(json, 'terminating') ? undefined : json['terminating'],
    };
}

export function IoK8sApiDiscoveryV1EndpointConditionsToJSON(value?: IoK8sApiDiscoveryV1EndpointConditions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ready': value.ready,
        'serving': value.serving,
        'terminating': value.terminating,
    };
}

