export const x_clone = (value: any): any => {
  if (typeof value == 'object' || Array.isArray(value)) {
    return JSON.parse(JSON.stringify(value))
  }

  return value
}
