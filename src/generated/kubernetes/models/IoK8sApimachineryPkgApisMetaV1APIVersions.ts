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
import type { IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from './IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR';
import {
    IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSON,
    IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR';

/**
 * APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1APIVersions
 */
export interface IoK8sApimachineryPkgApisMetaV1APIVersions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIVersions
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIVersions
     */
    kind?: string;
    /**
     * a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
     * @type {Array<IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIVersions
     */
    serverAddressByClientCIDRs: Array<IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;
    /**
     * versions are the api versions that are available.
     * @type {Array<string>}
     * @memberof IoK8sApimachineryPkgApisMetaV1APIVersions
     */
    versions: string[];
}

/**
 * Check if a given object implements the IoK8sApimachineryPkgApisMetaV1APIVersions interface.
 */
export function instanceOfIoK8sApimachineryPkgApisMetaV1APIVersions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "serverAddressByClientCIDRs" in value;
    isInstance = isInstance && "versions" in value;

    return isInstance;
}

export function IoK8sApimachineryPkgApisMetaV1APIVersionsFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1APIVersions {
    return IoK8sApimachineryPkgApisMetaV1APIVersionsFromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgApisMetaV1APIVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApimachineryPkgApisMetaV1APIVersions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'serverAddressByClientCIDRs': ((json['serverAddressByClientCIDRs'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSON)),
        'versions': json['versions'],
    };
}

export function IoK8sApimachineryPkgApisMetaV1APIVersionsToJSON(value?: IoK8sApimachineryPkgApisMetaV1APIVersions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'serverAddressByClientCIDRs': ((value.serverAddressByClientCIDRs as Array<any>).map(IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRToJSON)),
        'versions': value.versions,
    };
}

