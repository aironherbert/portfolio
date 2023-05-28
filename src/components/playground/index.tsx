import styled from "@emotion/styled"
import { useRef, useState } from "react"
import Square from "./square"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: relative;
    overflow: hidden;
`

export default function Playground() {
    const ref = useRef<HTMLDivElement>(null)
    const [ids, setIds] = useState<number[]>([])

    return (
        <Container
            ref={ref}
            onClick={() => setIds((ids) => [...ids, ids.length + 1])}
        >
            {ids.map((id) => (
                <Square key={id} containerRef={ref} />
            ))}
        </Container>
    )
}
