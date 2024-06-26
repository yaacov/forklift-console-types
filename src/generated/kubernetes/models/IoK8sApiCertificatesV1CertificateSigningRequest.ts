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
import type { IoK8sApiCertificatesV1CertificateSigningRequestSpec } from './IoK8sApiCertificatesV1CertificateSigningRequestSpec';
import {
    IoK8sApiCertificatesV1CertificateSigningRequestSpecFromJSON,
    IoK8sApiCertificatesV1CertificateSigningRequestSpecFromJSONTyped,
    IoK8sApiCertificatesV1CertificateSigningRequestSpecToJSON,
} from './IoK8sApiCertificatesV1CertificateSigningRequestSpec';
import type { IoK8sApiCertificatesV1CertificateSigningRequestStatus } from './IoK8sApiCertificatesV1CertificateSigningRequestStatus';
import {
    IoK8sApiCertificatesV1CertificateSigningRequestStatusFromJSON,
    IoK8sApiCertificatesV1CertificateSigningRequestStatusFromJSONTyped,
    IoK8sApiCertificatesV1CertificateSigningRequestStatusToJSON,
} from './IoK8sApiCertificatesV1CertificateSigningRequestStatus';
import type { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import {
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
 * CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.
 * 
 * Kubelets use this API to obtain:
 *  1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 *  2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).
 * 
 * This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
 * @export
 * @interface IoK8sApiCertificatesV1CertificateSigningRequest
 */
export interface IoK8sApiCertificatesV1CertificateSigningRequest {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCertificatesV1CertificateSigningRequest
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCertificatesV1CertificateSigningRequest
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCertificatesV1CertificateSigningRequest
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCertificatesV1CertificateSigningRequestSpec}
     * @memberof IoK8sApiCertificatesV1CertificateSigningRequest
     */
    spec: IoK8sApiCertificatesV1CertificateSigningRequestSpec;
    /**
     * 
     * @type {IoK8sApiCertificatesV1CertificateSigningRequestStatus}
     * @memberof IoK8sApiCertificatesV1CertificateSigningRequest
     */
    status?: IoK8sApiCertificatesV1CertificateSigningRequestStatus;
}

/**
 * Check if a given object implements the IoK8sApiCertificatesV1CertificateSigningRequest interface.
 */
export function instanceOfIoK8sApiCertificatesV1CertificateSigningRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function IoK8sApiCertificatesV1CertificateSigningRequestFromJSON(json: any): IoK8sApiCertificatesV1CertificateSigningRequest {
    return IoK8sApiCertificatesV1CertificateSigningRequestFromJSONTyped(json, false);
}

export function IoK8sApiCertificatesV1CertificateSigningRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCertificatesV1CertificateSigningRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': IoK8sApiCertificatesV1CertificateSigningRequestSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiCertificatesV1CertificateSigningRequestStatusFromJSON(json['status']),
    };
}

export function IoK8sApiCertificatesV1CertificateSigningRequestToJSON(value?: IoK8sApiCertificatesV1CertificateSigningRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiCertificatesV1CertificateSigningRequestSpecToJSON(value.spec),
        'status': IoK8sApiCertificatesV1CertificateSigningRequestStatusToJSON(value.status),
    };
}

