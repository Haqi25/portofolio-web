import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon } from "lucide-react"
export function ButtonDefault() {

  return <Button className="cursor-pointer">Hubungi Saya</Button>
}

function ButtonViewResume(){
   return <Button className="cursor-pointer">
    View Resume
    <ArrowUpRightIcon/>
   </Button>
}

function ButtonViewWeb(){
  return <Button className="cursor-pointer">
    View Website
    <ArrowUpRightIcon/>
   </Button>
}
export {ButtonViewResume, ButtonViewWeb}