/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ShopOrder
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShopOrder extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      creation_time: 'creation_time',
      id: 'id',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): ShopOrder {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
