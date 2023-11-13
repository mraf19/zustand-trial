export function getStatus(status: string) {
  if (status === "ONGOING") return ("bg-yellow-500")
  if (status === "COMPLETED") return ("bg-green-500")
  if (status === "CANCELLED") return ("bg-red-500")
  return false
}