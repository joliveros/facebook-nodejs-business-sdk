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
 * AdStudyObjectiveOffsiteDatasets
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdStudyObjectiveOffsiteDatasets extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      event_names: 'event_names',
      id: 'id',
    });
  }

}
