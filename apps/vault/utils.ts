export function truncateWallet(address?: string) {
  if (!address || address.length < 30) {
    return address
  }

  const firstFour = address.slice(0, 7)
  const lastThree = address.slice(-4)

  return `${firstFour}...${lastThree}`
}
