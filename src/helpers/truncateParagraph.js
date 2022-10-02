const truncateParagraph = para => {
  if (para.length > 65) {
    return `${para.substring(0, 65)}...`;
  }

  return para;
};

export default truncateParagraph;
