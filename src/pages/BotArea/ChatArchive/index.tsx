import { BiMap } from "@rizzzse/bimap"
import { Array as A, Option as O } from "@swan-io/boxed"
import { Link } from "@swan-io/chicane"
import { formatDistanceToNow } from "date-fns"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { useMemo } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import useEvent from "react-use-event-hook"

import List, { ListItem } from "@/components/atoms/List"
import { AvatarList } from "@/components/AvatarList"
import { isUUIDStamp, uid } from "@/lib/uuid"
import RootLayout from "@/pages/RootLayout"
import type { TitleProtocol } from "@/protocols/base"
import { activeChatIDAtom, chatMetaAtom, removeChatAtom } from "@/stores"

import * as css from "./styles.css"

type ChatListProps = {
    botName: string
}

const SectionTitle = ({ title }: TitleProtocol) => {
    return <span className={css.sectionTitle}>{title}</span>
}

const ChatList = ({ botName }: ChatListProps) => {
    const [activeChatID, setActiveChatID] = useAtom(activeChatIDAtom)

    const chatSummaries = useAtomValue(chatMetaAtom)

    const removeChat = useSetAtom(removeChatAtom)

    const sorted = useMemo(
        () => [...chatSummaries].sort((a, b) => uid.parseStamp(b.id).getTime() - uid.parseStamp(a.id).getTime()),
        [chatSummaries],
    )

    const markers = useMemo(() => {
        const markers: BiMap<string, number> = new BiMap()

        for (const [index, chat] of sorted.entries()) {
            const dateAgo = formatDistanceToNow(chat.updatedAt, { addSuffix: true })

            if (markers.has(dateAgo)) {
                continue
            }

            markers.inverse.set(index, dateAgo)
        }

        return markers
    }, [sorted])

    const onSelectedChange = useEvent(({ id }) => {
        if (!isUUIDStamp(id)) {
            return
        }
        setActiveChatID(id)
    })

    const onSelectPrev = useEvent(() => {
        A.findIndex(sorted, (chat) => chat.id === activeChatID)
            .flatMap((index) => O.fromNullable(sorted[index - 1]))
            .map(onSelectedChange)
    })

    const onSelectNext = useEvent(() => {
        A.findIndex(sorted, (chat) => chat.id === activeChatID)
            .flatMap((index) => O.fromNullable(sorted[index + 1]))
            .map(onSelectedChange)
    })

    const onRemoveChat = useEvent(() => {
        onSelectNext()
        removeChat(activeChatID)
    })

    useHotkeys("up", onSelectPrev)
    useHotkeys("down", onSelectNext)
    // useHotkeys("esc", onRequestClose)
    // useHotkeys("enter", onRequestClose)
    useHotkeys("delete", onRemoveChat)
    useHotkeys("backspace", onRemoveChat)

    return (
        <RootLayout nav={<AvatarList />}>
            <main className={css.container}>
                <List
                    data={sorted}
                    selectedID={activeChatID}
                    renderItem={(item, selected, index) => (
                        <>
                            {markers.inverse.has(index) ? (
                                <SectionTitle title={markers.inverse.get(index) ?? ""} />
                            ) : null}
                            <ListItem
                            // data-selected={selected}
                            // onClick={() => {
                            //     onSelectedChange({ id: item.id })
                            //     // onRequestClose()
                            // }}
                            >
                                <Link to={`/chat/${item.id}`}>{item.title || "Untitled"}</Link>
                            </ListItem>
                        </>
                    )}
                />
            </main>
        </RootLayout>
    )
}

export default ChatList
