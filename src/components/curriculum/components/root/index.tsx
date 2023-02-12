import styled from "@emotion/styled"
import { ReactNode } from "react"

const Container = styled.div`
    overflow: auto;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #1a193a;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    & .page {
        width: 209.2mm;
        height: 296.3mm;
        background-color: white;
        margin: 0.5cm auto;
        padding: 0;
    }
`

export default function Root({
    layout,
    children,
}: {
    layout: string
    children: ReactNode
}) {
    return <Container id="root">{children}</Container>
}
