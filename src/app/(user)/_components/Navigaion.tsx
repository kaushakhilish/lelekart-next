import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
  import {mainCategories, otherCategories} from "@/lib/data"
import { cn } from "@/lib/utils"
import React from "react"

const Navigaion = () => {
  return (
    <div className="flex w-[30%] pl-4" >
       {mainCategories.map((category)=> <NavigationMenu key={category.name}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {category.subCategory.map((subCategory) => (
                <ListItem
              
                  key={subCategory.name}
                  title={subCategory.name}
                  href={subCategory.link}
                >

                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
      </NavigationMenuList>
      
    </NavigationMenu>)}
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Others</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-3  lg:w-[600px] ">
            {otherCategories.map((category)=> <NavigationMenu key={category.name}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm">{category.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid z-30 w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {category.subCategory.map((subCategory) => (
                <ListItem
                className="overflow-visible"
                  key={subCategory.name}
                  title={subCategory.name}
                  href={subCategory.link}
                >

                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
      </NavigationMenuList>
      
    </NavigationMenu>)}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
      </NavigationMenuList>
      
    </NavigationMenu>
    
</div>
  )
}

export default Navigaion


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"