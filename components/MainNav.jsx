import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from './ui/button'
import { VscMenu } from 'react-icons/vsc'
import { LiaTimesSolid } from 'react-icons/lia'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

function MainNav({items, children}) {
  return (
    <>
      <div className='flex gap-6 lg:gap-10'>
        <Link href='/'>
          <h1 className='logo-text text-3xl'>
            Sapienta
          </h1>
        </Link> 
        {
          items?.length
            ? (
              <nav className='hidden gap-6 lg:flex'>
                {
                  items?.map((item, index) => (
                    <Link
                      key={index}
                      href={item.disable 
                        ? '#'
                        : item.href
                      }
                      className={cn(
                        'flex items-center font-medium hover:text-main transitioning'
                      )}
                    >
                      {item.title}
                    </Link>
                  ))
                }
              </nav>
            ) 
            : null
        }
      </div>
      <nav className='flex items-center gap-3'>
        <div className='items-center gap-3 hidden lg:flex'>
          <Link
            href='/login'
            className='px-4 font-medium hover:text-main transitioning'
          >
            Login          
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='link'
              >
                Register
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='w-56 mt-4'
            >
              <DropdownMenuItem 
                className='cursor-pointer'
                asChild
              >  
                <Link href='#'>
                  Student
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='cursor-pointer'
                asChild
              >  
                <Link href='#'>
                  Instructor
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='cursor-pointer'>
              <Avatar>
                <AvatarImage
                  src='/images/user.jpg'
                  alt="User"
                />
                <AvatarFallback>LB</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
              align='end'
              className='w-56 mt-4'
            >
              <DropdownMenuItem 
                className='cursor-pointer'
                asChild
              >  
              <Link href='/account'>
                Profile
              </Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='cursor-pointer'
                asChild
              >  
              <Link href='/account/enrolled-courses'>
                My Courses
              </Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='cursor-pointer'
                asChild
              >  
              <Link href='#'>
                Testimonials & Certificates
              </Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='cursor-pointer'
                asChild
              >  
              <Link href='#'>
                Logout
              </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>   
  )
}

export default MainNav
