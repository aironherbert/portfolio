import styled from "@emotion/styled"
import { ReactNode } from "react"

const Container = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
`
export default function Page({
    children,
    style,
}: {
    children: ReactNode
    style?: React.CSSProperties
}) {
    return (
        <Container className="page" style={style}>
            {children}
        </Container>
    )
}
