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
import type { IoK8sApiCoreV1ContainerState } from './IoK8sApiCoreV1ContainerState';
import {
    IoK8sApiCoreV1ContainerStateFromJSON,
    IoK8sApiCoreV1ContainerStateFromJSONTyped,
    IoK8sApiCoreV1ContainerStateToJSON,
} from './IoK8sApiCoreV1ContainerState';
import type { IoK8sApiCoreV1ResourceRequirements } from './IoK8sApiCoreV1ResourceRequirements';
import {
    IoK8sApiCoreV1ResourceRequirementsFromJSON,
    IoK8sApiCoreV1ResourceRequirementsFromJSONTyped,
    IoK8sApiCoreV1ResourceRequirementsToJSON,
} from './IoK8sApiCoreV1ResourceRequirements';

/**
 * ContainerStatus contains details for the current status of this container.
 * @export
 * @interface IoK8sApiCoreV1ContainerStatus
 */
export interface IoK8sApiCoreV1ContainerStatus {
    /**
     * AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    allocatedResources?: { [key: string]: string; };
    /**
     * ContainerID is the ID of the container in the format '<type>://<container_id>'. Where type is a container runtime identifier, returned from Version call of CRI API (for example "containerd").
     * @type {string}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    containerID?: string;
    /**
     * Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
     * @type {string}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    image: string;
    /**
     * ImageID is the image ID of the container's image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
     * @type {string}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    imageID: string;
    /**
     * 
     * @type {IoK8sApiCoreV1ContainerState}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    lastState?: IoK8sApiCoreV1ContainerState;
    /**
     * Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
     * @type {string}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    name: string;
    /**
     * Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).
     * 
     * The value is typically used to determine whether a container is ready to accept traffic.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    ready: boolean;
    /**
     * 
     * @type {IoK8sApiCoreV1ResourceRequirements}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    resources?: IoK8sApiCoreV1ResourceRequirements;
    /**
     * RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
     * @type {number}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    restartCount: number;
    /**
     * Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    started?: boolean;
    /**
     * 
     * @type {IoK8sApiCoreV1ContainerState}
     * @memberof IoK8sApiCoreV1ContainerStatus
     */
    state?: IoK8sApiCoreV1ContainerState;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1ContainerStatus interface.
 */
export function instanceOfIoK8sApiCoreV1ContainerStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "imageID" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ready" in value;
    isInstance = isInstance && "restartCount" in value;

    return isInstance;
}

export function IoK8sApiCoreV1ContainerStatusFromJSON(json: any): IoK8sApiCoreV1ContainerStatus {
    return IoK8sApiCoreV1ContainerStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ContainerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ContainerStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allocatedResources': !exists(json, 'allocatedResources') ? undefined : json['allocatedResources'],
        'containerID': !exists(json, 'containerID') ? undefined : json['containerID'],
        'image': json['image'],
        'imageID': json['imageID'],
        'lastState': !exists(json, 'lastState') ? undefined : IoK8sApiCoreV1ContainerStateFromJSON(json['lastState']),
        'name': json['name'],
        'ready': json['ready'],
        'resources': !exists(json, 'resources') ? undefined : IoK8sApiCoreV1ResourceRequirementsFromJSON(json['resources']),
        'restartCount': json['restartCount'],
        'started': !exists(json, 'started') ? undefined : json['started'],
        'state': !exists(json, 'state') ? undefined : IoK8sApiCoreV1ContainerStateFromJSON(json['state']),
    };
}

export function IoK8sApiCoreV1ContainerStatusToJSON(value?: IoK8sApiCoreV1ContainerStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allocatedResources': value.allocatedResources,
        'containerID': value.containerID,
        'image': value.image,
        'imageID': value.imageID,
        'lastState': IoK8sApiCoreV1ContainerStateToJSON(value.lastState),
        'name': value.name,
        'ready': value.ready,
        'resources': IoK8sApiCoreV1ResourceRequirementsToJSON(value.resources),
        'restartCount': value.restartCount,
        'started': value.started,
        'state': IoK8sApiCoreV1ContainerStateToJSON(value.state),
    };
}

