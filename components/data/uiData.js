import { PiCamera, PiChartLine, PiDesktop, PiGraduationCap, PiMusicNote, PiPaintBrush } from 'react-icons/pi'
import { SiFuturelearn } from 'react-icons/si'
import { IoBusinessOutline } from 'react-icons/io5'

export const categories = [
  { id: 1, title: 'Design', icon: PiPaintBrush },
  { id: 2, title: 'Development', icon: SiFuturelearn },
  { id: 3, title: 'Marketing', icon: PiChartLine },
  { id: 4, title: 'IT & Software', icon: PiDesktop },
  { id: 5, title: 'Personal Development', icon: PiGraduationCap },
  { id: 6, title: 'Business', icon: IoBusinessOutline },
  { id: 7, title: 'Photography', icon: PiCamera },
  { id: 8, title: 'Music', icon: PiMusicNote },
]

export const courses = [
  { id: 1, title: 'Reactive Accelerator', category: 'Development', chapters: 4, price: 49 },
  { id: 2, title: 'Creative Design Mastery', category: 'Design', chapters: 6, price: 59 },
  { id: 3, title: 'Marketing Strategy 101', category: 'Marketing', chapters: 5, price: 39 },
  { id: 4, title: 'IT Foundations', category: 'IT & Software', chapters: 8, price: 69 },
  { id: 5, title: 'Communications', category: 'Personal Development', chapters: 3, price: 59 },
  { id: 6, title: 'Photo Mastery', category: 'Photography', chapters: 8, price: 69 },
  { id: 7, title: 'Sound & Acoustics', category: 'Music', chapters: 6, price: 59 },
  { id: 8, title: 'Business Foundations', category: 'Business', chapters: 7, price: 49 },
]