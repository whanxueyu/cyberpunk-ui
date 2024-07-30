function createBEM(name: string) {
    return function (el?: string, mods?: any): string {
      if (el && typeof el !== 'string') {
        mods = el;
        el = '';
      }
      el = el ? `${name}__${el}` : name;
      if (mods) {
        if (typeof mods === 'string') {
          return `${el}--${mods}`;
        }
        if (Array.isArray(mods)) {
          return mods.reduce((ret, item) => ret + ` ${el}--${item}`, el);
        }
        return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? ` ${el}--${key}` : ''), el);
      }
      return el;
    };
  }
  export default createBEM;