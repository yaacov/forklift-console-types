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
import type { IoK8sApiCoreV1ObjectReference } from './IoK8sApiCoreV1ObjectReference';
import {
    IoK8sApiCoreV1ObjectReferenceFromJSON,
    IoK8sApiCoreV1ObjectReferenceFromJSONTyped,
    IoK8sApiCoreV1ObjectReferenceToJSON,
} from './IoK8sApiCoreV1ObjectReference';

/**
 * EndpointAddress is a tuple that describes single IP address.
 * @export
 * @interface IoK8sApiCoreV1EndpointAddress
 */
export interface IoK8sApiCoreV1EndpointAddress {
    /**
     * The Hostname of this endpoint
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointAddress
     */
    hostname?: string;
    /**
     * The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointAddress
     */
    ip: string;
    /**
     * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
     * @type {string}
     * @memberof IoK8sApiCoreV1EndpointAddress
     */
    nodeName?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1ObjectReference}
     * @memberof IoK8sApiCoreV1EndpointAddress
     */
    targetRef?: IoK8sApiCoreV1ObjectReference;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1EndpointAddress interface.
 */
export function instanceOfIoK8sApiCoreV1EndpointAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ip" in value;

    return isInstance;
}

export function IoK8sApiCoreV1EndpointAddressFromJSON(json: any): IoK8sApiCoreV1EndpointAddress {
    return IoK8sApiCoreV1EndpointAddressFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1EndpointAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1EndpointAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'ip': json['ip'],
        'nodeName': !exists(json, 'nodeName') ? undefined : json['nodeName'],
        'targetRef': !exists(json, 'targetRef') ? undefined : IoK8sApiCoreV1ObjectReferenceFromJSON(json['targetRef']),
    };
}

export function IoK8sApiCoreV1EndpointAddressToJSON(value?: IoK8sApiCoreV1EndpointAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hostname': value.hostname,
        'ip': value.ip,
        'nodeName': value.nodeName,
        'targetRef': IoK8sApiCoreV1ObjectReferenceToJSON(value.targetRef),
    };
}

