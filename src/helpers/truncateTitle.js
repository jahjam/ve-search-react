const truncateTitle = para => {
  if (para.length > 18) {
    return `${para.substring(0, 18)}...`;
  }

  return para;
};

export default truncateTitle;
