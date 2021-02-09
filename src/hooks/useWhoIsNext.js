const ClientList = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

export function whoIsNext(r) {
  let geekNames = ClientList.length
  while (r > geekNames) {
    r = r - geekNames
    geekNames = geekNames * 2
  }
  return ClientList[Math.ceil(r / (geekNames / ClientList.length)) - 1]
}