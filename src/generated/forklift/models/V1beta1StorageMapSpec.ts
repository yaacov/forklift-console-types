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

import { V1beta1StorageMapSpecMap } from './V1beta1StorageMapSpecMap';
import { V1beta1StorageMapSpecProvider } from './V1beta1StorageMapSpecProvider';

/**
 * Storage map spec.
 *
 * @export
 */
export interface V1beta1StorageMapSpec {
  /** map
   * Mapped storage.
   *
   * @required {true}
   */
  map: V1beta1StorageMapSpecMap[];
  /** provider
   * Provider
   *
   * @required {false}
   */
  provider?: V1beta1StorageMapSpecProvider;
}
