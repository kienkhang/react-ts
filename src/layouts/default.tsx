import TheHeader from '@/components/TheHeader'

const DefaultLayout = () => {
  return (
    <div>
      <TheHeader></TheHeader>
      <div className="px-4 py-16">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default DefaultLayout
