/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import Cursor from './../cursor';
import ProductFeedUploadErrorSample from './product-feed-upload-error-sample';
import ProductFeedRuleSuggestion from './product-feed-rule-suggestion';

/**
 * ProductFeedUploadError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedUploadError extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      affected_surfaces: 'affected_surfaces',
      description: 'description',
      error_type: 'error_type',
      id: 'id',
      severity: 'severity',
      summary: 'summary',
      total_count: 'total_count',
    });
  }

  static get AffectedSurfaces (): Object {
    return Object.freeze({
      dynamic_ads: 'Dynamic Ads',
      marketplace: 'Marketplace',
      us_marketplace: 'US Marketplace',
    });
  }
  static get Severity (): Object {
    return Object.freeze({
      fatal: 'fatal',
      warning: 'warning',
    });
  }
  static get ErrorPriority (): Object {
    return Object.freeze({
      high: 'HIGH',
      low: 'LOW',
      medium: 'MEDIUM',
    });
  }

  getSamples (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductFeedUploadErrorSample,
      fields,
      params,
      fetchFirstPage,
      '/samples'
    );
  }

  getSuggestedRules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductFeedRuleSuggestion,
      fields,
      params,
      fetchFirstPage,
      '/suggested_rules'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): ProductFeedUploadError {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
