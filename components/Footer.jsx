import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-grey-4 text-dark py-12 px-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>

        <div className='space-y-4'>
          <h3 className='text-2xl font-medium'>
            Sapientia
          </h3>
          <p className='text-grey-1 text-sm leading-relaxed'>
            Empowering learners worldwide with accessible, high-quality online education.
          </p>

          <div className='flex gap-4 pt-2'>
            <Link
              className='hover:text-main transitioning'
              href='#'
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              className='hover:text-main transitioning'
              href='#'
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              className='hover:text-main transitioning'
              href='#'
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              className='hover:text-main transitioning'
              href='#'
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              className='hover:text-main transitioning'
              href='#'
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        <div className='space-y-3'>
          <h4 className='text-lg font-medium'>
            Explore
          </h4>
          <ul className='space-y-2 text-grey-1 text-sm'>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                All Courses
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                Become an Instructor
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                Learning Paths
              </Link>
            </li>
          </ul>
        </div>

        <div className='space-y-3'>
          <h4 className='text-lg font-medium'>
            Support
          </h4>
          <ul className='space-y-2 text-grey-1 text-sm'>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                Help Centre
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'>
                Contact Support
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                Account Settings
              </Link>
            </li>
          </ul>
        </div>

        <div className='space-y-3'>
          <h4 className='text-lg font-medium'>
            Legal
          </h4>
          <ul className='space-y-2 text-grey-1 text-sm'>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-main transitioning'
                href='#'
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className='border-t border-grey-2 mt-10 pt-6 text-center text-grey-1 text-sm'>
        © {new Date().getFullYear()} Sapientia. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer