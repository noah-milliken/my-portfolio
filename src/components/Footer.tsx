import { TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons'

function Footer() {
  return (
    <footer className='flex absolute  bottom-0 left-0 h-10 w-full'>
    <div className='flex items-center 
    mx-auto justify-around w-3/4'>
        <TwitterLogoIcon/>
        <LinkedInLogoIcon/>
        <GitHubLogoIcon />
        <EnvelopeOpenIcon/>
      </div>
    </footer>
  )
}

export default Footer   