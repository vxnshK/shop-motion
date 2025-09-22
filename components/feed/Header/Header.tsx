import React from 'react'
import OrdersInLast7Days from './OrdersInLast7Days'
import Sale from './Sale'
import Cart from './Cart/Cart'
import Profile from './Profile'

function Header() {
  return (
    <div className='px-6 py-2 flex items-center justify-between w-full'>
      <OrdersInLast7Days />
      <Sale />
      <div className='flex items-center gap-3'>
        <Cart />
        <Profile />
      </div>
    </div>
  )
}

export default Header