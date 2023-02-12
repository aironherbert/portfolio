import styled from "@emotion/styled"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Button, CircularProgress, TextField } from "@mui/material"
import { Box } from "@mui/system"

const Container = styled.div`
    flex: 1;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    flex: 1;
    height: calc(100% - 2em);
    margin: 4em 1em;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 80%;
    align-items: end;
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2em;
    background-color: #1d2ae4;
    color: white;
`

export default function Contact() {
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs
            .send(
                process.env.REACT_APP_SERVICE_ID ?? "",
                process.env.REACT_APP_TEMPLATE_ID ?? "",
                state,
                process.env.REACT_APP_PUBLIC_KEY ?? ""
            )
            .then(
                (result) => {
                    console.log(result.text)
                    setLoading(false)
                    setState({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    })
                },
                (error) => {
                    console.log(error.text)
                    setLoading(false)
                    setState({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    })
                }
            )
    }
    return (
        <Container id="contact">
            <Content>
                <h1>Contact</h1>
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "primary.dark",
                        "&:hover": {
                            backgroundColor: "primary.main",
                        },
                    }}
                >
                    <h2>Send me a message</h2>
                    <Form onSubmit={sendEmail}>
                        <TextField
                            required
                            fullWidth
                            name="name"
                            label="Name"
                            type="text"
                            autoComplete="name"
                            value={state.name}
                            onChange={(e) =>
                                setState({ ...state, name: e.target.value })
                            }
                        />
                        <TextField
                            required
                            fullWidth
                            name="email"
                            label="E-mail"
                            type="email"
                            autoComplete="email"
                            value={state.email}
                            onChange={(e) =>
                                setState({ ...state, email: e.target.value })
                            }
                        />
                        <TextField
                            required
                            fullWidth
                            name="subject"
                            label="Subject"
                            type="text"
                            autoComplete="subject"
                            value={state.subject}
                            onChange={(e) =>
                                setState({ ...state, subject: e.target.value })
                            }
                        />
                        <TextField
                            required
                            fullWidth
                            multiline
                            rows={4}
                            name="message"
                            label="Message"
                            type="text"
                            autoComplete="message"
                            value={state.message}
                            onChange={(e) =>
                                setState({ ...state, message: e.target.value })
                            }
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            startIcon={
                                loading ? (
                                    <CircularProgress
                                        style={{
                                            color: "white",
                                            width: "1em",
                                            height: "1em",
                                        }}
                                    />
                                ) : null
                            }
                        >
                            Send
                        </Button>
                    </Form>
                </Box>
            </Content>
            <Footer />
        </Container>
    )
}
