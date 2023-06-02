import { Link } from "@swan-io/chicane"

import { AvatarList } from "@/components/AvatarList"

import RootLayout from "../RootLayout"

const Home = () => {
    return (
        <RootLayout nav={<AvatarList />}>
            <div className="flex h-full flex-col items-center justify-center">
                <span className="text-2xl font-medium">Welcome to Limina</span>
                <span className="text-xl font-medium">Select a bot to start chatting</span>
                <div className="mt-8 flex flex-col items-center justify-center">
                    <Link className="text-blue-500" to="/bots/ChatGPT">
                        ChatGPT
                    </Link>
                </div>
            </div>
        </RootLayout>
    )
}

export default Home
