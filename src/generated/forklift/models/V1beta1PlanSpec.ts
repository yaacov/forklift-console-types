/**
 * 
 * 
 *
 * The version of the OpenAPI document: 
 * Contact Email: 
 * License: 
 *
 * NOTE: This file is auto generated by crdtotypes (https://github.com/yaacov/crdtoapi/).
 * https://github.com/yaacov/crdtoapi/README.crdtotypes
 */

import { V1beta1PlanSpecMap } from './V1beta1PlanSpecMap';
import { V1beta1PlanSpecProvider } from './V1beta1PlanSpecProvider';
import { V1beta1PlanSpecTransferNetwork } from './V1beta1PlanSpecTransferNetwork';
import { V1beta1PlanSpecVms } from './V1beta1PlanSpecVms';

/**
 * PlanSpec defines the desired state of Plan.
 *
 * @export
 */
export interface V1beta1PlanSpec {
  /** archived
   * Whether this plan should be archived.
   *
   * @required {false}
   */
  archived?: boolean;
  /** description
   * Description
   *
   * @required {false}
   */
  description?: string;
  /** map
   * Resource mapping.
   *
   * @required {true}
   */
  map: V1beta1PlanSpecMap;
  /** preserveClusterCpuModel
   * Preserve the CPU model and flags the VM runs with in its oVirt cluster.
   *
   * @required {false}
   */
  preserveClusterCpuModel?: boolean;
  /** provider
   * Providers.
   *
   * @required {false}
   */
  provider?: V1beta1PlanSpecProvider;
  /** targetNamespace
   * Target namespace.
   *
   * @required {true}
   */
  targetNamespace: string;
  /** transferNetwork
   * The network attachment definition that should be used for disk transfer.
   *
   * @required {false}
   */
  transferNetwork?: V1beta1PlanSpecTransferNetwork;
  /** vms
   * A VM listed on the plan.
   *
   * @required {false}
   */
  vms?: V1beta1PlanSpecVms[];
  /** warm
   * Whether this is a warm migration.
   *
   * @required {false}
   */
  warm?: boolean;
}
