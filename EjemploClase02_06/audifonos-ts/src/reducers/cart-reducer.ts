import { db } from "../data/db";
import type { Audifono, CartItem } from "../types/types";

export type CartActions = 
{type: 'add-to cart', payload: {item: Audifono}} |
{type: 'remove-from-cart', payload: {id: Audifono['id']}} |
{type: 'increase-quantity', payload: {id: Audifono['id']}} |
{type: 'decrease-quantity', payload: {id: Audifono['id']}} |
{type: 'clear-cart'}

export type CartState = {
    data: Audifono[]
    cart: CartItem[]
}

export const initialState : CartState = {
    data: db,
    cart: []
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

//Escribo las acciones que debo programar
export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
    if (action.type === 'add-to cart') {
        //Verifico si el audifono ya está en el carrito
        const itemExists = state.cart.find( audifono => audifono.id === action.payload.item.id)
        let updateCart : CartItem[] = []
        if(itemExists){ //item existe en el carrito
            updateCart = state.cart.map(item => {
                if(item.id === action.payload.item.id){
                    if(item.quantity < MAX_ITEMS){
                        return {...item, quantity: item.quantity +1}
                    }else{
                        return item
                    }
                }else{
                    return item
                }
            })
        }else{
            const newItem: CartItem = {...action.payload.item, quantity : 1}
            updateCart = [...state.cart, newItem]
        }
        return{
            ...state,
            cart: updateCart
        }
    }
    if (action.type === 'remove-from-cart') {
        const cart = state.cart.filter( item => item.id != action.payload.id)
        return{
            ...state,
            cart
        }
    }
    if (action.type === 'increase-quantity') {
        const cart = state.cart.map( item => {
            if(item.id === action.payload.id && item.quantity < MAX_ITEMS){
                return{
                    ...item,
                    quantity: item.quantity + 1
                }                
            }
            return item
        })
        return{
            ...state,
            cart
        }
    }
    if (action.type === 'decrease-quantity') {
        const cart = state.cart.map( item => {
            if(item.id === action.payload.id && item.quantity > MIN_ITEMS){
                return{
                    ...item,
                    quantity: item.quantity - 1
                }                
            }
            return item
        })
        return{
            ...state,
            cart
        }
    }
    if (action.type === 'clear-cart') {
        return{
            ...state,
            cart: []
        }
    }
    return state
}