export function parseCode(code) {
  if (code === 0) return 'Soleado'
  if (code >= 1 && code <= 3) return 'Parcialmente Nublado'
  if (code >= 45 && code <= 48) return 'Niebla'
  if (code >= 51 && code <= 67) return 'Lluvia'
  if (code >= 71 && code <= 77) return 'Nieve'
  if (code >= 80 && code <= 82) return 'Chubascos'
  return 'Despejado'
}
