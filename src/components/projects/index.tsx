import styled from "@emotion/styled";
import { Chip } from "@mui/material";
import { useMemo, useState } from "react";
import { projects } from "./projects";

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  overflow: hidden;
  background-color: white;
`;

const Content = styled.div`
  flex: 1;
  margin: 3em 1em;
`;
const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2em;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border: 1px solid black;
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
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
  margin-bottom: 1em;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
`;

const uniqueBy = (arr, fn) => {
  return [...(new Map(arr.map((x) => [fn(x), x])).values() as any)];
};

export default function Projects() {
  const [selected, setSelected] = useState<string[]>([]);
  const keywords = useMemo(() => {
    return uniqueBy(
      projects.flatMap((project) => project.keywords),
      (keyword) => keyword
    );
  }, []);

  const changeFilter = (e: any) => {
    const keyword = e.target.innerText;
    if (selected.includes(keyword)) {
      setSelected(selected.filter((item) => item !== keyword));
    } else {
      setSelected([...selected, keyword]);
    }
  };

  return (
    <Container id="projects">
      <Content>
        <h1>My projects</h1>
        <Filters>
          <h2>Filters</h2>
          <FiltersContainer>
            {keywords.map((keyword) => (
              <Chip
                variant={selected.includes(keyword) ? "filled" : "outlined"}
                key={keyword}
                label={keyword}
                onClick={changeFilter}
              />
            ))}
          </FiltersContainer>
        </Filters>
        <Grid>
          {projects.map((project) => (
            <Card key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>Keywords: {project.keywords.join(", ")}</div>
            </Card>
          ))}
        </Grid>
      </Content>
    </Container>
  );
}
