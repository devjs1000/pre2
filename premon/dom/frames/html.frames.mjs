const selfFrame = (prexObj) => {
  return `<${prexObj.value} />`;
};

const nativeFrame = (prexObj) => {
  return `<${prexObj.value}> ${prexObj.value} </${prexObj.value}>`;
};
