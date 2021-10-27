import React from "react";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export const SideboardData = [
  {
    title: "Dashboard",
    icon: <FormatAlignJustifyOutlinedIcon />,
    link: "/dashboard",
  },
  {
    title: "Suppliers",
    icon: <PeopleAltOutlinedIcon />,
    link: "/suppliers",
  },
  {
    title: "Products",
    icon: <ShoppingCartOutlinedIcon />,
    link: "/products",
  },
  {
    title: "Employees",
    icon: <SupervisorAccountOutlinedIcon />,
    link: "/employees",
  },
];
