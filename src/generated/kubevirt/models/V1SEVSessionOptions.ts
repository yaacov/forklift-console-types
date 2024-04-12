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
 * SEVSessionOptions is used to provide SEV session parameters.
 * @export
 * @interface V1SEVSessionOptions
 */
export interface V1SEVSessionOptions {
    /**
     * Base64 encoded guest owner's Diffie-Hellman key.
     * @type {string}
     * @memberof V1SEVSessionOptions
     */
    dhCert?: string;
    /**
     * Base64 encoded session blob.
     * @type {string}
     * @memberof V1SEVSessionOptions
     */
    session?: string;
}

/**
 * Check if a given object implements the V1SEVSessionOptions interface.
 */
export function instanceOfV1SEVSessionOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1SEVSessionOptionsFromJSON(json: any): V1SEVSessionOptions {
    return V1SEVSessionOptionsFromJSONTyped(json, false);
}

export function V1SEVSessionOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1SEVSessionOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dhCert': !exists(json, 'dhCert') ? undefined : json['dhCert'],
        'session': !exists(json, 'session') ? undefined : json['session'],
    };
}

export function V1SEVSessionOptionsToJSON(value?: V1SEVSessionOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dhCert': value.dhCert,
        'session': value.session,
    };
}

