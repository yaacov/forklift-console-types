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
 * Port represents a port to expose from the virtual machine. Default protocol TCP. The port field is mandatory
 * @export
 * @interface V1Port
 */
export interface V1Port {
    /**
     * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
     * @type {string}
     * @memberof V1Port
     */
    name?: string;
    /**
     * Number of port to expose for the virtual machine. This must be a valid port number, 0 < x < 65536.
     * @type {number}
     * @memberof V1Port
     */
    port: number;
    /**
     * Protocol for port. Must be UDP or TCP. Defaults to "TCP".
     * @type {string}
     * @memberof V1Port
     */
    protocol?: string;
}

/**
 * Check if a given object implements the V1Port interface.
 */
export function instanceOfV1Port(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "port" in value;

    return isInstance;
}

export function V1PortFromJSON(json: any): V1Port {
    return V1PortFromJSONTyped(json, false);
}

export function V1PortFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Port {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'port': json['port'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
    };
}

export function V1PortToJSON(value?: V1Port | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'port': value.port,
        'protocol': value.protocol,
    };
}

