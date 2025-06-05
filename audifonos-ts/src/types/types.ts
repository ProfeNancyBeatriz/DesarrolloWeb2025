export type Audifono = {
    id: number
    name: string
    image: string
    description: string
    price: number
}
export type CartItem = Audifono & {
    quantity: number
}
