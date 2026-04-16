import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/formatPrice'
import SectionTitle from '@/components/SectionTitle'
import Element from '@/components/Element'
import Support from '@/components/Support'
import { categories, courses } from '@/components/data/uiData'
import { PiBookOpenUser } from 'react-icons/pi'

export default function HomePage() {
  return (
    <div className='w-full flex flex-col items-center'>

      <section className='w-full bg-grey-5 border-b'>
        <div className='container mx-auto max-w-6xl py-24 text-center flex flex-col items-center gap-6'>
          <h1 className='text-4xl md:text-6xl font-medium tracking-tight text-dark'>
            Master New Skills with Sapientia
          </h1>
          <SectionTitle />

          <p className='text-grey-1 max-w-2xl text-lg'>
            High-quality courses taught by real experts. Learn at your pace. Build your future.
          </p>

          <div className='flex gap-4 mt-4'>
            <Button className='px-6 py-3 text-lg'>
              Browse Courses
            </Button>
            <Button variant='outline' className='px-6 py-3 text-lg'>
              Become an Instructor
            </Button>
          </div>

        </div>
      </section>

      <section className='container mx-auto max-w-6xl py-20'>
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-3xl font-medium'>
            Categories
          </h2>
          <Link
            href=''
            className='flex items-center gap-2 text-grey-1 hover:text-main transitioning'
          >
            Browse All
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
                <h3 className='font-medium text-lg'>
                  {cat.title}
                </h3>
              </Link>
            )
          })}
        </div>
      </section>

      <section className='container mx-auto max-w-6xl py-20'>
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-3xl font-medium'>
            Popular Courses
          </h2>
          <Link
            href=''
            className='flex items-center gap-2 text-grey-1 hover:text-main transitioning'
          >
            Browse All
          </Link>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
            >
              <div className='border rounded-xl p-5 bg-light hover:shadow-md transition h-full flex flex-col'>
                <div className='flex items-center justify-center h-32 text-main'>
                  <PiBookOpenUser className='text-5xl' />
                </div>

                <h3 className='mt-4 font-medium text-lg'>
                  {course.title}
                </h3>
                <p className='text-sm text-main'>
                  {course.category}
                </p>

                <div className='flex items-center gap-2 text-sm text-grey-1 mt-3'>
                  <PiBookOpenUser className='w-4' />
                  <span>
                    {course.chapters} Chapters
                  </span>
                </div>

                <div className='flex justify-between items-center mt-6'>
                  <p className='font-medium text-grey-1'>
                    {formatPrice(course.price)}
                  </p>
                  <Button
                    variant='ghost'
                    className='text-main text-xs flex items-center gap-1'
                  >
                    Enroll
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
