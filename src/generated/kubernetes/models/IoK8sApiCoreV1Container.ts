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
import type { IoK8sApiCoreV1ContainerPort } from './IoK8sApiCoreV1ContainerPort';
import {
    IoK8sApiCoreV1ContainerPortFromJSON,
    IoK8sApiCoreV1ContainerPortFromJSONTyped,
    IoK8sApiCoreV1ContainerPortToJSON,
} from './IoK8sApiCoreV1ContainerPort';
import type { IoK8sApiCoreV1ContainerResizePolicy } from './IoK8sApiCoreV1ContainerResizePolicy';
import {
    IoK8sApiCoreV1ContainerResizePolicyFromJSON,
    IoK8sApiCoreV1ContainerResizePolicyFromJSONTyped,
    IoK8sApiCoreV1ContainerResizePolicyToJSON,
} from './IoK8sApiCoreV1ContainerResizePolicy';
import type { IoK8sApiCoreV1EnvFromSource } from './IoK8sApiCoreV1EnvFromSource';
import {
    IoK8sApiCoreV1EnvFromSourceFromJSON,
    IoK8sApiCoreV1EnvFromSourceFromJSONTyped,
    IoK8sApiCoreV1EnvFromSourceToJSON,
} from './IoK8sApiCoreV1EnvFromSource';
import type { IoK8sApiCoreV1EnvVar } from './IoK8sApiCoreV1EnvVar';
import {
    IoK8sApiCoreV1EnvVarFromJSON,
    IoK8sApiCoreV1EnvVarFromJSONTyped,
    IoK8sApiCoreV1EnvVarToJSON,
} from './IoK8sApiCoreV1EnvVar';
import type { IoK8sApiCoreV1Lifecycle } from './IoK8sApiCoreV1Lifecycle';
import {
    IoK8sApiCoreV1LifecycleFromJSON,
    IoK8sApiCoreV1LifecycleFromJSONTyped,
    IoK8sApiCoreV1LifecycleToJSON,
} from './IoK8sApiCoreV1Lifecycle';
import type { IoK8sApiCoreV1Probe } from './IoK8sApiCoreV1Probe';
import {
    IoK8sApiCoreV1ProbeFromJSON,
    IoK8sApiCoreV1ProbeFromJSONTyped,
    IoK8sApiCoreV1ProbeToJSON,
} from './IoK8sApiCoreV1Probe';
import type { IoK8sApiCoreV1ResourceRequirements } from './IoK8sApiCoreV1ResourceRequirements';
import {
    IoK8sApiCoreV1ResourceRequirementsFromJSON,
    IoK8sApiCoreV1ResourceRequirementsFromJSONTyped,
    IoK8sApiCoreV1ResourceRequirementsToJSON,
} from './IoK8sApiCoreV1ResourceRequirements';
import type { IoK8sApiCoreV1SecurityContext } from './IoK8sApiCoreV1SecurityContext';
import {
    IoK8sApiCoreV1SecurityContextFromJSON,
    IoK8sApiCoreV1SecurityContextFromJSONTyped,
    IoK8sApiCoreV1SecurityContextToJSON,
} from './IoK8sApiCoreV1SecurityContext';
import type { IoK8sApiCoreV1VolumeDevice } from './IoK8sApiCoreV1VolumeDevice';
import {
    IoK8sApiCoreV1VolumeDeviceFromJSON,
    IoK8sApiCoreV1VolumeDeviceFromJSONTyped,
    IoK8sApiCoreV1VolumeDeviceToJSON,
} from './IoK8sApiCoreV1VolumeDevice';
import type { IoK8sApiCoreV1VolumeMount } from './IoK8sApiCoreV1VolumeMount';
import {
    IoK8sApiCoreV1VolumeMountFromJSON,
    IoK8sApiCoreV1VolumeMountFromJSONTyped,
    IoK8sApiCoreV1VolumeMountToJSON,
} from './IoK8sApiCoreV1VolumeMount';

/**
 * A single application container that you want to run within a pod.
 * @export
 * @interface IoK8sApiCoreV1Container
 */
export interface IoK8sApiCoreV1Container {
    /**
     * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1Container
     */
    args?: string[];
    /**
     * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1Container
     */
    command?: string[];
    /**
     * List of environment variables to set in the container. Cannot be updated.
     * @type {Array<IoK8sApiCoreV1EnvVar>}
     * @memberof IoK8sApiCoreV1Container
     */
    env?: Array<IoK8sApiCoreV1EnvVar>;
    /**
     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
     * @type {Array<IoK8sApiCoreV1EnvFromSource>}
     * @memberof IoK8sApiCoreV1Container
     */
    envFrom?: Array<IoK8sApiCoreV1EnvFromSource>;
    /**
     * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
     * @type {string}
     * @memberof IoK8sApiCoreV1Container
     */
    image?: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     * @type {string}
     * @memberof IoK8sApiCoreV1Container
     */
    imagePullPolicy?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1Lifecycle}
     * @memberof IoK8sApiCoreV1Container
     */
    lifecycle?: IoK8sApiCoreV1Lifecycle;
    /**
     * 
     * @type {IoK8sApiCoreV1Probe}
     * @memberof IoK8sApiCoreV1Container
     */
    livenessProbe?: IoK8sApiCoreV1Probe;
    /**
     * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
     * @type {string}
     * @memberof IoK8sApiCoreV1Container
     */
    name: string;
    /**
     * List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
     * @type {Array<IoK8sApiCoreV1ContainerPort>}
     * @memberof IoK8sApiCoreV1Container
     */
    ports?: Array<IoK8sApiCoreV1ContainerPort>;
    /**
     * 
     * @type {IoK8sApiCoreV1Probe}
     * @memberof IoK8sApiCoreV1Container
     */
    readinessProbe?: IoK8sApiCoreV1Probe;
    /**
     * Resources resize policy for the container.
     * @type {Array<IoK8sApiCoreV1ContainerResizePolicy>}
     * @memberof IoK8sApiCoreV1Container
     */
    resizePolicy?: Array<IoK8sApiCoreV1ContainerResizePolicy>;
    /**
     * 
     * @type {IoK8sApiCoreV1ResourceRequirements}
     * @memberof IoK8sApiCoreV1Container
     */
    resources?: IoK8sApiCoreV1ResourceRequirements;
    /**
     * RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is "Always". For non-init containers or when this field is not specified, the restart behavior is defined by the Pod's restart policy and the container type. Setting the RestartPolicy as "Always" for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy "Always" will be shut down. This lifecycle differs from normal init containers and is often referred to as a "sidecar" container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.
     * @type {string}
     * @memberof IoK8sApiCoreV1Container
     */
    restartPolicy?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1SecurityContext}
     * @memberof IoK8sApiCoreV1Container
     */
    securityContext?: IoK8sApiCoreV1SecurityContext;
    /**
     * 
     * @type {IoK8sApiCoreV1Probe}
     * @memberof IoK8sApiCoreV1Container
     */
    startupProbe?: IoK8sApiCoreV1Probe;
    /**
     * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1Container
     */
    stdin?: boolean;
    /**
     * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
     * @type {boolean}
     * @memberof IoK8sApiCoreV1Container
     */
    stdinOnce?: boolean;
    /**
     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
     * @type {string}
     * @memberof IoK8sApiCoreV1Container
     */
    terminationMessagePath?: string;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     * @type {string}
     * @memberof IoK8sApiCoreV1Container
     */
    terminationMessagePolicy?: string;
    /**
     * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1Container
     */
    tty?: boolean;
    /**
     * volumeDevices is the list of block devices to be used by the container.
     * @type {Array<IoK8sApiCoreV1VolumeDevice>}
     * @memberof IoK8sApiCoreV1Container
     */
    volumeDevices?: Array<IoK8sApiCoreV1VolumeDevice>;
    /**
     * Pod volumes to mount into the container's filesystem. Cannot be updated.
     * @type {Array<IoK8sApiCoreV1VolumeMount>}
     * @memberof IoK8sApiCoreV1Container
     */
    volumeMounts?: Array<IoK8sApiCoreV1VolumeMount>;
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
     * @type {string}
     * @memberof IoK8sApiCoreV1Container
     */
    workingDir?: string;
}

/**
 * Check if a given object implements the IoK8sApiCoreV1Container interface.
 */
export function instanceOfIoK8sApiCoreV1Container(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IoK8sApiCoreV1ContainerFromJSON(json: any): IoK8sApiCoreV1Container {
    return IoK8sApiCoreV1ContainerFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1Container {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'args': !exists(json, 'args') ? undefined : json['args'],
        'command': !exists(json, 'command') ? undefined : json['command'],
        'env': !exists(json, 'env') ? undefined : ((json['env'] as Array<any>).map(IoK8sApiCoreV1EnvVarFromJSON)),
        'envFrom': !exists(json, 'envFrom') ? undefined : ((json['envFrom'] as Array<any>).map(IoK8sApiCoreV1EnvFromSourceFromJSON)),
        'image': !exists(json, 'image') ? undefined : json['image'],
        'imagePullPolicy': !exists(json, 'imagePullPolicy') ? undefined : json['imagePullPolicy'],
        'lifecycle': !exists(json, 'lifecycle') ? undefined : IoK8sApiCoreV1LifecycleFromJSON(json['lifecycle']),
        'livenessProbe': !exists(json, 'livenessProbe') ? undefined : IoK8sApiCoreV1ProbeFromJSON(json['livenessProbe']),
        'name': json['name'],
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(IoK8sApiCoreV1ContainerPortFromJSON)),
        'readinessProbe': !exists(json, 'readinessProbe') ? undefined : IoK8sApiCoreV1ProbeFromJSON(json['readinessProbe']),
        'resizePolicy': !exists(json, 'resizePolicy') ? undefined : ((json['resizePolicy'] as Array<any>).map(IoK8sApiCoreV1ContainerResizePolicyFromJSON)),
        'resources': !exists(json, 'resources') ? undefined : IoK8sApiCoreV1ResourceRequirementsFromJSON(json['resources']),
        'restartPolicy': !exists(json, 'restartPolicy') ? undefined : json['restartPolicy'],
        'securityContext': !exists(json, 'securityContext') ? undefined : IoK8sApiCoreV1SecurityContextFromJSON(json['securityContext']),
        'startupProbe': !exists(json, 'startupProbe') ? undefined : IoK8sApiCoreV1ProbeFromJSON(json['startupProbe']),
        'stdin': !exists(json, 'stdin') ? undefined : json['stdin'],
        'stdinOnce': !exists(json, 'stdinOnce') ? undefined : json['stdinOnce'],
        'terminationMessagePath': !exists(json, 'terminationMessagePath') ? undefined : json['terminationMessagePath'],
        'terminationMessagePolicy': !exists(json, 'terminationMessagePolicy') ? undefined : json['terminationMessagePolicy'],
        'tty': !exists(json, 'tty') ? undefined : json['tty'],
        'volumeDevices': !exists(json, 'volumeDevices') ? undefined : ((json['volumeDevices'] as Array<any>).map(IoK8sApiCoreV1VolumeDeviceFromJSON)),
        'volumeMounts': !exists(json, 'volumeMounts') ? undefined : ((json['volumeMounts'] as Array<any>).map(IoK8sApiCoreV1VolumeMountFromJSON)),
        'workingDir': !exists(json, 'workingDir') ? undefined : json['workingDir'],
    };
}

export function IoK8sApiCoreV1ContainerToJSON(value?: IoK8sApiCoreV1Container | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'args': value.args,
        'command': value.command,
        'env': value.env === undefined ? undefined : ((value.env as Array<any>).map(IoK8sApiCoreV1EnvVarToJSON)),
        'envFrom': value.envFrom === undefined ? undefined : ((value.envFrom as Array<any>).map(IoK8sApiCoreV1EnvFromSourceToJSON)),
        'image': value.image,
        'imagePullPolicy': value.imagePullPolicy,
        'lifecycle': IoK8sApiCoreV1LifecycleToJSON(value.lifecycle),
        'livenessProbe': IoK8sApiCoreV1ProbeToJSON(value.livenessProbe),
        'name': value.name,
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(IoK8sApiCoreV1ContainerPortToJSON)),
        'readinessProbe': IoK8sApiCoreV1ProbeToJSON(value.readinessProbe),
        'resizePolicy': value.resizePolicy === undefined ? undefined : ((value.resizePolicy as Array<any>).map(IoK8sApiCoreV1ContainerResizePolicyToJSON)),
        'resources': IoK8sApiCoreV1ResourceRequirementsToJSON(value.resources),
        'restartPolicy': value.restartPolicy,
        'securityContext': IoK8sApiCoreV1SecurityContextToJSON(value.securityContext),
        'startupProbe': IoK8sApiCoreV1ProbeToJSON(value.startupProbe),
        'stdin': value.stdin,
        'stdinOnce': value.stdinOnce,
        'terminationMessagePath': value.terminationMessagePath,
        'terminationMessagePolicy': value.terminationMessagePolicy,
        'tty': value.tty,
        'volumeDevices': value.volumeDevices === undefined ? undefined : ((value.volumeDevices as Array<any>).map(IoK8sApiCoreV1VolumeDeviceToJSON)),
        'volumeMounts': value.volumeMounts === undefined ? undefined : ((value.volumeMounts as Array<any>).map(IoK8sApiCoreV1VolumeMountToJSON)),
        'workingDir': value.workingDir,
    };
}

