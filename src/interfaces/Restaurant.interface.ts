export type Address = {
  street: string
  city: string
  state: string
  location: {
    lat: number
    lng: number
  }
}

export type Contact = {
  site: string
  email: string
  phone: string
}

export type Restaurant = {
  id: string
  rating: number
  name: string
  contact: Contact
  address: Address
}
