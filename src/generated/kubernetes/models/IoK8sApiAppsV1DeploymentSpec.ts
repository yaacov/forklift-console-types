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
import type { IoK8sApiAppsV1DeploymentStrategy } from './IoK8sApiAppsV1DeploymentStrategy';
import {
    IoK8sApiAppsV1DeploymentStrategyFromJSON,
    IoK8sApiAppsV1DeploymentStrategyFromJSONTyped,
    IoK8sApiAppsV1DeploymentStrategyToJSON,
} from './IoK8sApiAppsV1DeploymentStrategy';
import type { IoK8sApiCoreV1PodTemplateSpec } from './IoK8sApiCoreV1PodTemplateSpec';
import {
    IoK8sApiCoreV1PodTemplateSpecFromJSON,
    IoK8sApiCoreV1PodTemplateSpecFromJSONTyped,
    IoK8sApiCoreV1PodTemplateSpecToJSON,
} from './IoK8sApiCoreV1PodTemplateSpec';
import type { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './IoK8sApimachineryPkgApisMetaV1LabelSelector';
import {
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './IoK8sApimachineryPkgApisMetaV1LabelSelector';

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 * @export
 * @interface IoK8sApiAppsV1DeploymentSpec
 */
export interface IoK8sApiAppsV1DeploymentSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     * @type {number}
     * @memberof IoK8sApiAppsV1DeploymentSpec
     */
    minReadySeconds?: number;
    /**
     * Indicates that the deployment is paused.
     * @type {boolean}
     * @memberof IoK8sApiAppsV1DeploymentSpec
     */
    paused?: boolean;
    /**
     * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
     * @type {number}
     * @memberof IoK8sApiAppsV1DeploymentSpec
     */
    progressDeadlineSeconds?: number;
    /**
     * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
     * @type {number}
     * @memberof IoK8sApiAppsV1DeploymentSpec
     */
    replicas?: number;
    /**
     * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
     * @type {number}
     * @memberof IoK8sApiAppsV1DeploymentSpec
     */
    revisionHistoryLimit?: number;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiAppsV1DeploymentSpec
     */
    selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * 
     * @type {IoK8sApiAppsV1DeploymentStrategy}
     * @memberof IoK8sApiAppsV1DeploymentSpec
     */
    strategy?: IoK8sApiAppsV1DeploymentStrategy;
    /**
     * 
     * @type {IoK8sApiCoreV1PodTemplateSpec}
     * @memberof IoK8sApiAppsV1DeploymentSpec
     */
    template: IoK8sApiCoreV1PodTemplateSpec;
}

/**
 * Check if a given object implements the IoK8sApiAppsV1DeploymentSpec interface.
 */
export function instanceOfIoK8sApiAppsV1DeploymentSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "selector" in value;
    isInstance = isInstance && "template" in value;

    return isInstance;
}

export function IoK8sApiAppsV1DeploymentSpecFromJSON(json: any): IoK8sApiAppsV1DeploymentSpec {
    return IoK8sApiAppsV1DeploymentSpecFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1DeploymentSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1DeploymentSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minReadySeconds': !exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'paused': !exists(json, 'paused') ? undefined : json['paused'],
        'progressDeadlineSeconds': !exists(json, 'progressDeadlineSeconds') ? undefined : json['progressDeadlineSeconds'],
        'replicas': !exists(json, 'replicas') ? undefined : json['replicas'],
        'revisionHistoryLimit': !exists(json, 'revisionHistoryLimit') ? undefined : json['revisionHistoryLimit'],
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'strategy': !exists(json, 'strategy') ? undefined : IoK8sApiAppsV1DeploymentStrategyFromJSON(json['strategy']),
        'template': IoK8sApiCoreV1PodTemplateSpecFromJSON(json['template']),
    };
}

export function IoK8sApiAppsV1DeploymentSpecToJSON(value?: IoK8sApiAppsV1DeploymentSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'minReadySeconds': value.minReadySeconds,
        'paused': value.paused,
        'progressDeadlineSeconds': value.progressDeadlineSeconds,
        'replicas': value.replicas,
        'revisionHistoryLimit': value.revisionHistoryLimit,
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
        'strategy': IoK8sApiAppsV1DeploymentStrategyToJSON(value.strategy),
        'template': IoK8sApiCoreV1PodTemplateSpecToJSON(value.template),
    };
}

