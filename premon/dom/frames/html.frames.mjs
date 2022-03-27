const selfFrame = (prexObj) => {
  return `<${prexObj.value} />`;
};

const nativeFrame = (prexObj) => {
  return `<${prexObj.value}> ${prexObj.value} </${prexObj.value}>`;
};

const attrFrame = (key, val) => {
  return `${key} = ${val}`;
};

const attrsFrame = (attributes) => {
  const attrBucket=[]
  for (const key in attributes) {
    if (Object.hasOwnProperty.call(attributes, key)) {
      const value = atr[key];
      attrBucket.push(attrFrame(key, value))
    }
  }
  return attrBucket.join(" ")
};
