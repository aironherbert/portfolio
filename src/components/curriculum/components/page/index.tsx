import styled from "@emotion/styled"
import { ReactNode } from "react"

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    box-sizing: border-box;
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
