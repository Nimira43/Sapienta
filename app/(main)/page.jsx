import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/formatPrice'
import {
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaLaptopCode,
  FaUserGraduate,
  FaBriefcase,
  FaCamera,
  FaMusic,
  FaBookOpen,
  FaArrowRight
} from 'react-icons/fa'

const categories = [
  { id: 1, title: 'Design', icon: FaPaintBrush },
  { id: 2, title: 'Development', icon: FaCode },
  { id: 3, title: 'Marketing', icon: FaBullhorn },
  { id: 4, title: 'IT & Software', icon: FaLaptopCode },
  { id: 5, title: 'Personal Development', icon: FaUserGraduate },
  { id: 6, title: 'Business', icon: FaBriefcase },
  { id: 7, title: 'Photography', icon: FaCamera },
  { id: 8, title: 'Music', icon: FaMusic },
]

const courses = [
  { id: 1, title: 'Reactive Accelerator', category: 'Development', chapters: 4, price: 49 },
  { id: 2, title: 'Creative Design Mastery', category: 'Design', chapters: 6, price: 59 },
  { id: 3, title: 'Marketing Strategy 101', category: 'Marketing', chapters: 5, price: 39 },
  { id: 4, title: 'Business Foundations', category: 'Business', chapters: 8, price: 69 },
]

export default function HomePage() {
  return (
    <div className='w-full flex flex-col items-center'>

      <section className='w-full bg-grey-4 border-b'>
        <div className='container mx-auto max-w-6xl py-24 text-center flex flex-col items-center gap-6'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-dark'>
            Master New Skills with Sapientia
          </h1>

          <p className='text-grey-1 max-w-2xl text-lg'>
            High-quality courses taught by real experts. Learn at your pace. Build your future.
          </p>

          <div className='flex gap-4 mt-4'>
            <Button className='px-6 py-3 text-lg'>Browse Courses</Button>
            <Button variant='outline' className='px-6 py-3 text-lg'>
              Become an Instructor
            </Button>
          </div>
        </div>
      </section>

      <section className='container mx-auto max-w-6xl py-20'>
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-3xl font-bold'>
            Categories
          </h2>
          <Link href='' className='flex items-center gap-2 text-grey-1 hover:text-dark'>
            Browse All <FaArrowRight />
          </Link>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.id}
                href=''
                className='border rounded-xl p-8 bg-light hover:shadow-md transition flex flex-col items-center gap-4'
              >
                <Icon className='text-5xl text-main' />
                <h3 className='font-semibold text-lg'>{cat.title}</h3>
              </Link>
            )
          })}
        </div>
      </section>

      <section className='container mx-auto max-w-6xl py-20'>
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-3xl font-bold'>
            Popular Courses
          </h2>
          <Link
            href=''
            className='flex items-center gap-2 text-grey-1 hover:text-dark'
          >
            Browse All <FaArrowRight />
          </Link>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
            >
              <div className='border rounded-xl p-5 bg-light hover:shadow-md transition h-full flex flex-col'>
                <div className='flex items-center justify-center h-32 text-grey-1'>
                  <FaBookOpen className='text-5xl' />
                </div>

                <h3 className='mt-4 font-semibold text-lg'>
                  {course.title}
                </h3>
                <p className='text-sm text-grey-2'>
                  {course.category}
                </p>

                <div className='flex items-center gap-2 text-sm text-grey-2 mt-3'>
                  <FaBookOpen className='w-4' />
                  <span>
                    {course.chapters} Chapters
                  </span>
                </div>

                <div className='flex justify-between items-center mt-6'>
                  <p className='font-semibold text-grey-1'>
                    {formatPrice(course.price)}
                  </p>
                  <Button variant='ghost' className='text-main text-xs flex items-center gap-1'>
                    Enroll <FaArrowRight className='w-3' />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}
