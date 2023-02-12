const last: <T>(array: T[]) => T | undefined = 
  array => array.length ? array[array.length - 1] : undefined

export { last }
