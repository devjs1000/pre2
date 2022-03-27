const valid = {
  attributesExtraction: ['prex'],
  allowedAttributes: [
    "id",
    "class",
    "placeholder",
    "src",
    "type",
    "onsubmit",
    "onclick",
    "onkeyup",
    "onkeydown",
    "onkeypress",
  ],
};

export const validExecution = (validVar, include, executionFunction) => {
  if (valid[validVar].includes(include)) {
    executionFunction();
  }
};
