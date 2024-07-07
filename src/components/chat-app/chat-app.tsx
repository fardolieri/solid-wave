/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LOyl5Wee15h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import FriendList from './friend-list'
import NavigationSidebar from './navigation-sidebar'

export default function ChatApp() {
  return (
    <div class="flex h-screen w-full bg-background pt-8">
      <NavigationSidebar />
      <div class="m-auto"></div>
      <FriendList />
      <div class="m-auto"></div>
    </div>
  )
}
