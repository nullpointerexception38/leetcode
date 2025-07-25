function defangIPaddr(address) {
  return address.replaceAll('.', '[.]')
}
