import styled from "@emotion/styled"
import { projects } from "./projects"
import Container from "@mui/material/Container"

const ContainerStyled = styled.div`
    flex: 1;
    min-height: 100vh;
    overflow: hidden;
    background-color: white;
`

const Content = styled.div`
    flex: 1;
    margin: 3em 1em;

    & > h1 {
        text-align: center;
    }
`
const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2em;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    min-height: 300px;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

        background-color: white;
        transform: scale(1.01);
        transition: 0.2s ease-in-out;
        h3 {
            color: #1e90ff;
        }
    }
`

export default function Projects() {
    return (
        <ContainerStyled id="projects">
            <Content>
                <h1>My projects</h1>
                <Container>
                    <Grid>
                        {projects.map((project) => (
                            <Card key={project.id}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div>
                                    Keywords: {project.keywords.join(", ")}
                                </div>
                            </Card>
                        ))}
                    </Grid>
                </Container>
            </Content>
        </ContainerStyled>
    )
}
