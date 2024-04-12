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

/**
 * Condition
 *
 * @export
 */
export interface V1beta1PlanStatusMigrationVmsConditions {
  /** category
   * The condition category.
   *
   * @required {true}
   */
  category: string;
  /** durable
   * The condition is durable - never un-staged.
   *
   * @required {false}
   */
  durable?: boolean;
  /** items
   *
   * @required {false}
   */
  items?: string[];
  /** lastTransitionTime
   * When the last status transition occurred.
   *
   * @required {true}
   * @format {date-time}
   */
  lastTransitionTime: string;
  /** message
   * The human readable description of the condition.
   *
   * @required {false}
   */
  message?: string;
  /** reason
   * The reason for the condition or transition.
   *
   * @required {false}
   */
  reason?: string;
  /** status
   * The condition status [true,false].
   *
   * @required {true}
   */
  status: string;
  /** type
   * The condition type.
   *
   * @required {true}
   */
  type: string;
}
