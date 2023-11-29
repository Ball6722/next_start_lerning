import { getServerSession } from "next-auth";
import DrakModeToggle from "./DrakModeToggle";
import Logo from "./Logo";
import UserButton from "./UserButton";
import { authOption } from "@/auth";
import { MessageSquareIcon } from "lucide-react";
import Link from "next/link";
import CreateChatButton from "./CreateChatButton";
async function Header() {
  const session = await getServerSession(authOption);
  return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
            <nav className="flex flex-col sm:flex-row items-center max-w-7xl mx-auto">
                <Logo />
                <div className="flex-1 flex items-center justify-end spece-x-4">
                    {/* Select Languege */}
                    {session ? (
                        <>
                            <Link
                                href={'/chat'}
                                prefetch={false}
                            >
                            <MessageSquareIcon 
                                className="text-black dark:text-white"
                            />
                            </Link>
                            <CreateChatButton />
                        </>
                    ) : (
                        <Link href='/pricing'> Pricing </Link>
                    )}
                    <DrakModeToggle />
                    <UserButton session={session} />
                </div>
            </nav> 
        </header>
    )
}

export default Header;
