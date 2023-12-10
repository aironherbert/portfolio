import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"

import Header from "./Header"
import MainFeaturedPost from "./MainFeaturedPost"
import FeaturedPost from "./FeaturedPost"
import Main from "./Main"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import post1 from "../blog-post.1.md"
import post2 from "../blog-post.2.md"
import post3 from "../blog-post.3.md"
import GitHubIcon from "@mui/icons-material/GitHub"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import React, { useMemo } from "react"
import LinePlot from "../line-point"
import { Route, Routes } from "react-router-dom"

export default function Blog() {
    const blog = useMemo(
        () => ({
            title: "Energia Solar",
            description: "A blog example built with Material-UI and Next.js.",
            sections: [
                { title: "Tecnologia", url: "/technology" },
                { title: "Energia Renovável", url: "#" },
                { title: "Engenharia Econômica", url: "#" },
                { title: "Sustentabilidade", url: "#" },
                { title: "Sobre", url: "#" },
                { title: "Contato", url: "#" },
            ],
            posts: [post1, post2, post3],
            mainFeaturedPost: {
                title: "Title of a longer featured blog post",
                description:
                    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
                image: "https://source.unsplash.com/random?wallpapers",
                imageText: "main image description",
                linkText: "Continue reading…",
            },
            featuredPosts: [
                {
                    title: "Featured post",
                    date: "Nov 12",
                    description:
                        "This is a wider card with supporting text below as a natural lead-in to additional content.",
                    image: "https://source.unsplash.com/random?wallpapers",
                    imageLabel: "Image Text",
                },
                {
                    title: "Post title",
                    date: "Nov 11",
                    description:
                        "This is a wider card with supporting text below as a natural lead-in to additional content.",
                    image: "https://source.unsplash.com/random?wallpapers",
                    imageLabel: "Image Text",
                },
            ],
            sidebar: {
                title: "About",
                description:
                    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
                archives: [
                    { title: "March 2020", url: "#" },
                    { title: "February 2020", url: "#" },
                    { title: "January 2020", url: "#" },
                    { title: "November 1999", url: "#" },
                    { title: "October 1999", url: "#" },
                    { title: "September 1999", url: "#" },
                    { title: "August 1999", url: "#" },
                    { title: "July 1999", url: "#" },
                    { title: "June 1999", url: "#" },
                    { title: "May 1999", url: "#" },
                    { title: "April 1999", url: "#" },
                ],
                social: [
                    { name: "GitHub", icon: GitHubIcon },
                    { name: "Twitter", icon: TwitterIcon },
                    { name: "Facebook", icon: FacebookIcon },
                ],
            },
        }),
        []
    )
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <MainFeaturedPost
                                        post={blog.mainFeaturedPost}
                                    />
                                    <Grid container spacing={4}>
                                        {blog.featuredPosts.map((post) => (
                                            <FeaturedPost
                                                key={post.title}
                                                post={post}
                                            />
                                        ))}
                                    </Grid>
                                    <Grid container spacing={5} sx={{ mt: 3 }}>
                                        <Main
                                            title="From the firehose"
                                            posts={blog.posts}
                                        />
                                        <Sidebar
                                            title={blog.sidebar.title}
                                            description={
                                                blog.sidebar.description
                                            }
                                            archives={blog.sidebar.archives}
                                            social={blog.sidebar.social}
                                        />
                                    </Grid>
                                </>
                            }
                        ></Route>
                        <Route
                            path="/line-plot"
                            element={
                                <div
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <LinePlot
                                        data={Array.from({ length: 100 }, () =>
                                            Math.floor(Math.random() * 40)
                                        )}
                                    />
                                </div>
                            }
                        ></Route>
                    </Routes>
                </main>
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </>
    )
}
