import styled from "@emotion/styled"
import { useMemo } from "react"
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

const Container = styled.div<{ x: number; y: number; color: string }>`
    width: 100px;
    height: 100px;
    background-color: ${({ color }) => color};
    position: absolute;
    transform: translate(${({ x }) => x}px, ${({ y }) => y}px);
    border-radius: 50%;
`
export default function Square({ x, y }: { x: number; y: number }) {
    const color = useMemo(() => generateRandomColor(), [])

    return <Container x={x} y={y} color={color} />
}
