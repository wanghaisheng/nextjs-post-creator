import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ModeToggle } from './mode-toggle';

export default function Navbar() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 px-6 items-center">
          <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Cloudflare Workers Test
          </h1>
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <SignedOut>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <SignInButton />
                    </NavigationMenuLink>
                  </SignedOut>
                  <SignedIn>
                    <NavigationMenuLink
                      className="w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
                    >
                      <UserButton />
                    </NavigationMenuLink>
                  </SignedIn>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <ModeToggle />
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
