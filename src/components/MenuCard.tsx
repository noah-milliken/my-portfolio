import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from './ui/button'

function MenuCard() {
  return (
   <Card >
    <CardHeader>
        <CardTitle>About Me</CardTitle>
        <CardDescription>Learn about me, my background, and my work</CardDescription>
    </CardHeader> 
    <CardContent >
        <Button >Click</Button>
    </CardContent>
   </Card>
  )
}

export default MenuCard