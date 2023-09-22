
export function getLastPathValue(event) {
  return event?.target?.location?.pathname.split('/').at(-1);
}
