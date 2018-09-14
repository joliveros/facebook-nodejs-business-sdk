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
 * VideoUploadLimits
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoUploadLimits extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      length: 'length',
      size: 'size',
      id: 'id'
    });
  }

  get (fields, params): VideoUploadLimits {
    return this.read(
      fields,
      params
    );
  }
}