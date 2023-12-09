import styled from "@emotion/styled"
import { useCallback, useLayoutEffect, useRef, useState } from "react"
import Square from "./square"
import { v4 as uuidv4 } from "uuid"
import { Button } from "@mui/material"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: relative;
    overflow: hidden;
`

export default function Playground() {
    const ref = useRef<HTMLDivElement>(null)
    const [components, setComponents] = useState<
        { id: string; position: { x: number; y: number } }[]
    >([])

    const getRandomPosition = useCallback(() => {
        if (ref.current) {
            const { clientHeight, clientWidth } = ref.current
            let x = Math.random() * clientWidth
            let y = Math.random() * clientHeight
            if (x >= clientWidth - 100) x = 0
            if (y >= clientHeight - 100) y = 0
            return {
                x,
                y,
            }
        }
        return { x: 0, y: 0 }
    }, [ref])

    const updatePosition = useCallback(() => {
        if (ref.current) {
            const { clientHeight, clientWidth } = ref.current
            setComponents((components) =>
                components.map((component) => ({
                    ...component,
                    position: {
                        x:
                            component.position.x >= clientWidth - 100
                                ? -component.position.x
                                : component.position.x + 5,
                        y:
                            component.position.y >= clientHeight - 100
                                ? -component.position.y
                                : component.position.y + 5,
                    },
                }))
            )
        }
        requestAnimationFrame(updatePosition)
    }, [ref])

    useLayoutEffect(() => {
        requestAnimationFrame(updatePosition)
    }, [updatePosition])

    return (
        <Container ref={ref}>
            <Button
                style={{ position: "absolute", top: 0, left: 0 }}
                onClick={() =>
                    setComponents((components) => [
                        ...components,
                        { id: uuidv4(), position: getRandomPosition() },
                    ])
                }
            >
                Add
            </Button>
            {components.map((component) => (
                <Square
                    key={component.id}
                    x={Math.abs(component.position.x)}
                    y={Math.abs(component.position.y)}
                />
            ))}
        </Container>
    )
}
