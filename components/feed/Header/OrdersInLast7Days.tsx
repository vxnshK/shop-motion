function OrdersInLast7Days() {
  return (
    <div className='flex items-center gap-2'>
      <span className='text-4xl font-medium'>37</span>
      <div className='w-[2px] h-[18px] block bg-black opacity-30'></div>
      <div className='flex flex-col items-start font-medium text-xs'>
        <div>Orders</div>
        <div>Last 7 days</div>
      </div>
    </div>
  )
}

export default OrdersInLast7Days