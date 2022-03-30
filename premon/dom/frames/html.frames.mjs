export const selfFrame = (name, attrs) => {
  return `<${name} ${attrs} />`;
};

export const nativeFrame = (name, inner, attrs) => {
  return `<${name} ${attrs} > ${inner} </${name}>`;
};

export const attrFrame = (key, val) => {
  return `${key} = "${val}"`;
};

export const attrsFrame = (attributes) => {
  const attrBucket=[]
  for (const key in attributes) {
    if (Object.hasOwnProperty.call(attributes, key)) {
      const value = attributes[key];
      attrBucket.push(attrFrame(key, value))
    }
  }
  return attrBucket.join(" ")
};
