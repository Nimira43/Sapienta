import { cn } from "@/lib/utils"
import Link from "next/link"

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
    </>
    
  )
}

export default MainNav
