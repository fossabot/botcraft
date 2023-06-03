import { Link } from "@swan-io/chicane"

import { AvatarList } from "@/components/AvatarList"

import RootLayout from "../RootLayout"

const Home = () => {
    return <RootLayout nav={<AvatarList />} />
}

export default Home
