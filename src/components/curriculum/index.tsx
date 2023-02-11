import styled from "@emotion/styled"
import Page from "./components/page"
import Root from "./components/root"

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.2cm;
    position: relative;

    & .inner {
        width: 100%;
        height: 100%;
        background-color: white;
        border: 1px solid black;
        display: flex;
    }
`

const LeftContainer = styled.div`
    flex: 2;
    height: 100%;
    border-right: 1px solid black;

    & h1 {
        text-align: center;
    }

    & .img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`

const RightContainer = styled.div`
    flex: 3;
    height: 100%;
`

export default function Curriculum() {
    return (
        <Root layout="portrait">
            <Page style={{ pageBreakAfter: "always" }}>
                <Content>
                    <div className="inner">
                        <LeftContainer>
                            <h1>Airon Herbert</h1>
                            <img
                                className="img"
                                src={process.env.PUBLIC_URL + "/airon.png"}
                                alt="Airon"
                            />
                        </LeftContainer>
                        <RightContainer></RightContainer>
                    </div>
                </Content>
            </Page>
        </Root>
    )
}
