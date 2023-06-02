import { Text } from "@mantine/core"

import { AvatarList } from "@/components/AvatarList"

import RootLayout from "../RootLayout"

const WorkflowArea = () => {
    return (
        <RootLayout
            nav={<AvatarList />}
            navHeader="Flow"
            navFooter={
                <Text color="#565869" weight="bold">
                    Limina
                </Text>
            }
        >
            {/* <Suspense>{contentView}</Suspense> */}
        </RootLayout>
    )
}

export default WorkflowArea
