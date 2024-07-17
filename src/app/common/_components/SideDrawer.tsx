import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import logo from "../_assets/logo.png"

export function SideDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="block lg:hidden">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-10 items-center">
          <Link href="/" className='cursor-pointer'>
            <Image src={logo.src} alt='logo' width={120} height={120}/>
          </Link>
          <Link href="/" className='cursor-pointer'>Home</Link>
          <Link href="#" className='cursor-pointer'>Categories</Link>
          <Link href="#" className='cursor-pointer'>Infrastructure</Link>
          <Link href="/use-cases" className='cursor-pointer'>Use cases</Link>
          <Link href="/about" className='cursor-pointer'>About & Contact</Link>
          <button className='w-[150px]'>Enquire Now</button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
