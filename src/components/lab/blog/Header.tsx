import * as React from "react"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy"
import { ArrowDropDown } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    Advanced React Lab
                </Typography>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: "space-between", overflowX: "auto" }}
            >
                <Dropdown>
                    <MenuButton
                        endDecorator={<ArrowDropDown />}
                        variant="plain"
                    >
                        Gráficos
                    </MenuButton>
                    <Menu>
                        <MenuItem
                            target="_self"
                            onClick={() => {
                                navigate("/lab/line-plot")
                            }}
                        >
                            Line Plot
                        </MenuItem>
                    </Menu>
                </Dropdown>
            </Toolbar>
        </React.Fragment>
    )
}
