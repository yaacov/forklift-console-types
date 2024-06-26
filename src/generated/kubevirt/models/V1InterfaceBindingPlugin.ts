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
import type { V1InterfaceBindingMigration } from './V1InterfaceBindingMigration';
import {
    V1InterfaceBindingMigrationFromJSON,
    V1InterfaceBindingMigrationFromJSONTyped,
    V1InterfaceBindingMigrationToJSON,
} from './V1InterfaceBindingMigration';

/**
 * 
 * @export
 * @interface V1InterfaceBindingPlugin
 */
export interface V1InterfaceBindingPlugin {
    /**
     * DomainAttachmentType is a standard domain network attachment method kubevirt supports. Supported values: "tap". The standard domain attachment can be used instead or in addition to the sidecarImage. version: 1alphav1
     * @type {string}
     * @memberof V1InterfaceBindingPlugin
     */
    domainAttachmentType?: string;
    /**
     * 
     * @type {V1InterfaceBindingMigration}
     * @memberof V1InterfaceBindingPlugin
     */
    migration?: V1InterfaceBindingMigration;
    /**
     * NetworkAttachmentDefinition references to a NetworkAttachmentDefinition CR object. Format: <name>, <namespace>/<name>. If namespace is not specified, VMI namespace is assumed. version: 1alphav1
     * @type {string}
     * @memberof V1InterfaceBindingPlugin
     */
    networkAttachmentDefinition?: string;
    /**
     * SidecarImage references a container image that runs in the virt-launcher pod. The sidecar handles (libvirt) domain configuration and optional services. version: 1alphav1
     * @type {string}
     * @memberof V1InterfaceBindingPlugin
     */
    sidecarImage?: string;
}

/**
 * Check if a given object implements the V1InterfaceBindingPlugin interface.
 */
export function instanceOfV1InterfaceBindingPlugin(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1InterfaceBindingPluginFromJSON(json: any): V1InterfaceBindingPlugin {
    return V1InterfaceBindingPluginFromJSONTyped(json, false);
}

export function V1InterfaceBindingPluginFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1InterfaceBindingPlugin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domainAttachmentType': !exists(json, 'domainAttachmentType') ? undefined : json['domainAttachmentType'],
        'migration': !exists(json, 'migration') ? undefined : V1InterfaceBindingMigrationFromJSON(json['migration']),
        'networkAttachmentDefinition': !exists(json, 'networkAttachmentDefinition') ? undefined : json['networkAttachmentDefinition'],
        'sidecarImage': !exists(json, 'sidecarImage') ? undefined : json['sidecarImage'],
    };
}

export function V1InterfaceBindingPluginToJSON(value?: V1InterfaceBindingPlugin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domainAttachmentType': value.domainAttachmentType,
        'migration': V1InterfaceBindingMigrationToJSON(value.migration),
        'networkAttachmentDefinition': value.networkAttachmentDefinition,
        'sidecarImage': value.sidecarImage,
    };
}

