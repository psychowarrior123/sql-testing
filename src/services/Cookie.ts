/* eslint-disable */
class CookieService {
  getCookie = (name): string | undefined => {
    const matches = document.cookie.match(
      new RegExp(
        `(?:^|; )${name.replace(
          /([\.$?*|{}\(\)\[\]\\\/\+^])/g,
          '\\$1',
        )}=([^;]*)`,
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  setCookie = (name, value, options = {}): void => {
    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options,
    };
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value,
    )}`;

    for (const optionKey in options) {
      updatedCookie += `; ${optionKey}`;
      const optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += `=${optionValue}`;
      }
    }

    document.cookie = updatedCookie;
  };

  deleteCookie = (name: string): void => {
    this.setCookie(name, '', {
      'max-age': -1,
    });
  };
}

export default new CookieService();
