import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import VolunteerForm from '../components/VolunteerForm';
 
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
    <p>hello world </p>
    <VolunteerForm />
    </>
  )
}
 
export default Page