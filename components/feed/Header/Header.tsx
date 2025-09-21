import React from 'react'
import OrdersInLast7Days from './OrdersInLast7Days'
import Sale from './Sale'

function Header() {
  return (
    <div className='p-6 flex items-center justify-between w-full'>
      <OrdersInLast7Days />

      <Sale />
    </div>
  )
}

export default Header