import styled from "@emotion/styled"
import { useCallback, useLayoutEffect, useMemo, useState } from "react"
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
`
export default function Square({
    containerRef,
}: {
    containerRef: React.RefObject<HTMLDivElement>
}) {
    const getRandomPosition = useCallback(() => {
        if (containerRef.current) {
            const { clientHeight, clientWidth } = containerRef.current
            return {
                x: Math.random() * clientWidth,
                y: Math.random() * clientHeight,
            }
        }
        return { x: 0, y: 0 }
    }, [containerRef])

    const color = useMemo(() => generateRandomColor(), [])

    const [position, setPosition] = useState(() => getRandomPosition())
    useLayoutEffect(() => {
        const updatePosition = () => {
            if (containerRef.current) {
                const { clientHeight, clientWidth } = containerRef.current
                setPosition((prevPosition) => ({
                    x:
                        prevPosition.x >= clientWidth - 100
                            ? -prevPosition.x
                            : prevPosition.x + 1,
                    y:
                        prevPosition.y >= clientHeight - 100
                            ? -prevPosition.y
                            : prevPosition.y + 1,
                }))
            }
            requestAnimationFrame(updatePosition)
        }
        requestAnimationFrame(updatePosition)
    }, [containerRef])

    return (
        <Container
            x={Math.abs(position.x)}
            y={Math.abs(position.y)}
            color={color}
        />
    )
}
