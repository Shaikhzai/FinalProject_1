import React from 'react'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div>
        {/* if the user in signedout show signin else vice versa */}
        
         <SignedOut>
           <SignInButton />
         </SignedOut>
         <SignedIn>
           <UserButton />
         </SignedIn>
    </div>
  )
}

export default Header