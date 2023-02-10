import styled from "@emotion/styled"
import { ReactNode } from "react"

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: black;
    color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export default function Root({
    layout,
    children,
}: {
    layout: string
    children: ReactNode
}) {
    return <Container>{children}</Container>
}
