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
 * Migration
 *
 * @export
 */
export interface V1beta1PlanStatusMigrationHistoryMigration {
  /** generation
   *
   * @required {true}
   * @format {int64}
   * @originalType {integer}
   */
  generation: number;
  /** name
   *
   * @required {true}
   */
  name: string;
  /** namespace
   *
   * @required {true}
   */
  namespace: string;
  /** uid
   * UID is a type that holds unique ID values, including UUIDs.  Because we don't ONLY use UUIDs, this is an alias to string.  Being a type captures intent and helps make sure that UIDs and names do not get conflated.
   *
   * @required {true}
   */
  uid: string;
}
