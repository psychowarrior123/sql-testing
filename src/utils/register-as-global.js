const PREFIX = 'LTI';

const registerAsGlobal = function (variable, data, useSafePrefix = true) {
  if (!webpack.IS_DEV_BUILD) {
    return data;
  }

  const varName = useSafePrefix ? `${PREFIX}_${variable}` : variable;

  if (!window[varName]) {
    window[varName] = data;
  } else {
    console.warn(`Global dev variable '${varName}' already exists`);
  }

  return data;
};

export default registerAsGlobal;
