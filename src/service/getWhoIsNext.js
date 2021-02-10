export function whoIsNext (names, r) {
  let geekNames = names.length
  while (r > geekNames) {
    r = r - geekNames
    geekNames = geekNames * 2
  }
  return names[Math.ceil(r / (geekNames / names.length)) - 1]
}
