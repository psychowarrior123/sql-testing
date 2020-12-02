/* eslint-disable no-await-in-loop */
import EventEmitter from 'events';

import axios from 'axios';

import registerAsGlobal from 'utils/register-as-global';

class Api {
  constructor() {
    const defaultHeaders = axios.defaults.headers;
    this.postman = axios.create({
      baseURL: webpack.BASE_URL,
      headers: {
        ...defaultHeaders,
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    });
  }

  /*   Events   */

  events = new EventEmitter();

  on = (...args) => this.events.on(...args);
  once = (...args) => this.events.once(...args);
  off = (...args) => this.events.off(...args);

  emitError(err, shouldNotify) {
    this.events.emit('error', err, shouldNotify);
    throw err;
  }

  /*   Requests   */

  get = (...args) => this.request('get', ...args);
  post = (...args) => this.request('post', ...args);
  patch = (...args) => this.request('patch', ...args);
  put = (...args) => this.request('put', ...args);
  delete = (...args) => this.request('delete', ...args);

  raw = (method, url, data, config) =>
    axios.request({
      url,
      method,
      baseURL: webpack.BASE_URL,
      [dataPropOfMethod(method)]: data,
      ...config,
    });

  async request(method, url, data, options = {}) {
    let result;
    let done = false;
    const { showNotifications = true, ...config } = options;

    while (!done) {
      try {
        result = await this.postman.request({
          url,
          method,
          [dataPropOfMethod(method)]: data,
          ...config,
        });
        done = true;
      } catch (err) {
        if (this.isCancelled(err)) {
          throw err;
        }

        switch (err.response?.status) {
          case 401:
            this.emitError(err, showNotifications);
            break;
          case 404:
            // eslint-disable-next-line @babel/no-unused-expressions
            webpack.IS_DEV_BUILD &&
              console.warn(
                `Error 404 on ${method.toUpperCase()} '${url}' with ${dataPropOfMethod(
                  method,
                )} = `,
                data,
              );
            done = true;
            break;
          default:
            this.emitError(err, showNotifications);
        }
      }
    }

    return result?.data;
  }

  /*   Utils   */

  isCancelled = (err) => axios.isCancel(err);

  getErrorMessage = (error) => {
    if (!error?.isAxiosError) {
      return undefined;
    }
    const { data, message, statusText } = error.response;
    return (
      data?.message ||
      (typeof data === 'string' && data) ||
      message ||
      statusText
    );
  };
}

function dataPropOfMethod(method) {
  return method.match(/^p.+/) === null ? 'params' : 'data';
}

export default registerAsGlobal('API', new Api());
