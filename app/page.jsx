import { getCourses } from '@/queries/courses'

export default async function HomePage() {
  const courses = await getCourses()
  console.log(courses)
  console.log(courses[0]?.instructor?.socialMedia)
  console.log(courses[0]?.testimonials)

  return (
    <div>HomePage</div>
  )
}