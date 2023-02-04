import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import { projects } from './projects'
import Container from '@mui/material/Container'
import SortIcon from '@mui/icons-material/Sort'
import React from "react"

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

const Filters = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  margin-bottom: 1em;
`

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
`

const Icon = styled.div<{ click?: boolean }>`
  color: #1e90ff;
  padding: 0.5em;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  }

  ${(props) =>
    props.click &&
    `
    background-color: #1e90ff;
    color: white;
    transition: 0.2s ease-in-out;
  `}
`

const uniqueBy = (arr, fn) => {
  return [...(new Map(arr.map((x) => [fn(x), x])).values() as any)]
}

export default function Projects() {
  const [selected, setSelected] = useState<string[]>([])
  const [clickSort, setClickSort] = useState(false)

  const handleClick = useCallback(() => {
    setClickSort(true)
    setTimeout(() => {
      setClickSort(false)
    }, 200)
  }, [])

  const keywords = useMemo(() => {
    return uniqueBy(
      projects.flatMap((project) => project.keywords),
      (keyword) => keyword,
    )
  }, [])

  const changeFilter = (e: any) => {
    const keyword = e.target.innerText
    if (selected.includes(keyword)) {
      setSelected(selected.filter((item) => item !== keyword))
    } else {
      setSelected([...selected, keyword])
    }
  }

  return (
    <ContainerStyled id="projects">
      <Content>
        <h1>My projects</h1>
        <Container>
          <Filters>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
              <h2>Filters</h2>
              <FiltersContainer>
                {keywords.map((keyword) => (
                  <Chip
                    variant={selected.includes(keyword) ? 'filled' : 'outlined'}
                    key={keyword}
                    label={keyword}
                    onClick={changeFilter}
                  />
                ))}
              </FiltersContainer>
            </div>
            <Icon click={clickSort} onMouseDown={() => handleClick()}>
              <SortIcon />
            </Icon>
          </Filters>
          <Grid>
            {projects.map((project) => (
              <Card key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>Keywords: {project.keywords.join(', ')}</div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Content>
    </ContainerStyled>
  )
}
