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

import { V1beta1HostStatusConditions } from './V1beta1HostStatusConditions';

/**
 * HostStatus defines the observed state of Host
 *
 * @export
 */
export interface V1beta1HostStatus {
  /** conditions
   * Condition
   *
   * @required {false}
   */
  conditions?: V1beta1HostStatusConditions[];
  /** observedGeneration
   * The most recent generation observed by the controller.
   *
   * @required {false}
   * @format {int64}
   * @originalType {integer}
   */
  observedGeneration?: number;
}
