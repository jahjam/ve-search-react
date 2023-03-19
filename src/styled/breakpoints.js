const breakpoints = {
  maxBreakOne: '65.35em',
  maxBreakTwo: '51em',
  maxBreakThree: '40em',
  maxBreakFour: '35em',
};

export const breakpoint = name => {
  if (!Object.keys(breakpoints).includes(name))
    return console.log(`Warning: ${name} is not a valid breakpoint name.`);

  return `max-width: ${breakpoints[name]}`;
};
