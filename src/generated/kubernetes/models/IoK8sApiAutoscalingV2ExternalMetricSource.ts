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
import type { IoK8sApiAutoscalingV2MetricIdentifier } from './IoK8sApiAutoscalingV2MetricIdentifier';
import {
    IoK8sApiAutoscalingV2MetricIdentifierFromJSON,
    IoK8sApiAutoscalingV2MetricIdentifierFromJSONTyped,
    IoK8sApiAutoscalingV2MetricIdentifierToJSON,
} from './IoK8sApiAutoscalingV2MetricIdentifier';
import type { IoK8sApiAutoscalingV2MetricTarget } from './IoK8sApiAutoscalingV2MetricTarget';
import {
    IoK8sApiAutoscalingV2MetricTargetFromJSON,
    IoK8sApiAutoscalingV2MetricTargetFromJSONTyped,
    IoK8sApiAutoscalingV2MetricTargetToJSON,
} from './IoK8sApiAutoscalingV2MetricTarget';

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 * @export
 * @interface IoK8sApiAutoscalingV2ExternalMetricSource
 */
export interface IoK8sApiAutoscalingV2ExternalMetricSource {
    /**
     * 
     * @type {IoK8sApiAutoscalingV2MetricIdentifier}
     * @memberof IoK8sApiAutoscalingV2ExternalMetricSource
     */
    metric: IoK8sApiAutoscalingV2MetricIdentifier;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2MetricTarget}
     * @memberof IoK8sApiAutoscalingV2ExternalMetricSource
     */
    target: IoK8sApiAutoscalingV2MetricTarget;
}

/**
 * Check if a given object implements the IoK8sApiAutoscalingV2ExternalMetricSource interface.
 */
export function instanceOfIoK8sApiAutoscalingV2ExternalMetricSource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "metric" in value;
    isInstance = isInstance && "target" in value;

    return isInstance;
}

export function IoK8sApiAutoscalingV2ExternalMetricSourceFromJSON(json: any): IoK8sApiAutoscalingV2ExternalMetricSource {
    return IoK8sApiAutoscalingV2ExternalMetricSourceFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV2ExternalMetricSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAutoscalingV2ExternalMetricSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metric': IoK8sApiAutoscalingV2MetricIdentifierFromJSON(json['metric']),
        'target': IoK8sApiAutoscalingV2MetricTargetFromJSON(json['target']),
    };
}

export function IoK8sApiAutoscalingV2ExternalMetricSourceToJSON(value?: IoK8sApiAutoscalingV2ExternalMetricSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metric': IoK8sApiAutoscalingV2MetricIdentifierToJSON(value.metric),
        'target': IoK8sApiAutoscalingV2MetricTargetToJSON(value.target),
    };
}

