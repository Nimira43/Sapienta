import { getCourses } from '@/queries/courses'

export default async function HomePage() {
  const courses = await getCourses()
  console.log(courses)

  return (
    <div>HomePage</div>
  )
}