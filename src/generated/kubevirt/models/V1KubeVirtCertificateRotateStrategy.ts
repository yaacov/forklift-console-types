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
import type { V1KubeVirtSelfSignConfiguration } from './V1KubeVirtSelfSignConfiguration';
import {
    V1KubeVirtSelfSignConfigurationFromJSON,
    V1KubeVirtSelfSignConfigurationFromJSONTyped,
    V1KubeVirtSelfSignConfigurationToJSON,
} from './V1KubeVirtSelfSignConfiguration';

/**
 * 
 * @export
 * @interface V1KubeVirtCertificateRotateStrategy
 */
export interface V1KubeVirtCertificateRotateStrategy {
    /**
     * 
     * @type {V1KubeVirtSelfSignConfiguration}
     * @memberof V1KubeVirtCertificateRotateStrategy
     */
    selfSigned?: V1KubeVirtSelfSignConfiguration;
}

/**
 * Check if a given object implements the V1KubeVirtCertificateRotateStrategy interface.
 */
export function instanceOfV1KubeVirtCertificateRotateStrategy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1KubeVirtCertificateRotateStrategyFromJSON(json: any): V1KubeVirtCertificateRotateStrategy {
    return V1KubeVirtCertificateRotateStrategyFromJSONTyped(json, false);
}

export function V1KubeVirtCertificateRotateStrategyFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1KubeVirtCertificateRotateStrategy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'selfSigned': !exists(json, 'selfSigned') ? undefined : V1KubeVirtSelfSignConfigurationFromJSON(json['selfSigned']),
    };
}

export function V1KubeVirtCertificateRotateStrategyToJSON(value?: V1KubeVirtCertificateRotateStrategy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'selfSigned': V1KubeVirtSelfSignConfigurationToJSON(value.selfSigned),
    };
}

