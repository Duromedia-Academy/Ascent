import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import React from "react";
const sublinks = [
  // product
  {
    page: "products",
    links: [
      // 1
      {
        title: "WHAT YOU CAN SELL",
        sublink: [
          { label: "online courses", icon: <FaCreditCard />, url: "/products" },
          { label: "coaching", icon: <FaCreditCard />, url: "/products" },
          {
            label: "digital downloads",
            icon: <FaCreditCard />,
            url: "/products",
          },
        ],
      },

      // 2
      {
        title: "feature highlights",
        sublink: [
          { label: "online courses", icon: <FaCreditCard />, url: "/products" },
          { label: "coaching", icon: <FaCreditCard />, url: "/products" },
          {
            label: "digital downloads",
            icon: <FaCreditCard />,
            url: "/products",
          },
        ],
      },

      {
        title: "partials",
        sublink: [
          {
            label: "Product overview",
            icon: <BsArrowRight />,
            url: "/products",
          },
        ],
      },
    ],
  },

  // solutions

  {
    page: "solutions",
    links: [
      {
        title: "BY BUSINESS STAGE",
        sublink: [
          { label: "online courses", icon: <FaCreditCard />, url: "/products" },
          { label: "coaching", icon: <FaCreditCard />, url: "/products" },
          {
            label: "digital downloads",
            icon: <FaCreditCard />,
            url: "/products",
          },
        ],
      },

      // 2
      {
        title: "BY INDUSTRY",
        sublink: [
          { label: "online courses", icon: <FaBook />, url: "/products" },
          { label: "coaching", icon: <FaCreditCard />, url: "/products" },
          {
            label: "digital downloads",
            icon: <FaCreditCard />,
            url: "/products",
          },
        ],
      },
    ],
  },

  // resources

  {
    page: "resources",
    links: [
      // 1
      {
        title: "RESOURCES",
        sublink: [
          { label: "online courses", icon: <FaCreditCard />, url: "/products" },
          { label: "coaching", icon: <FaCreditCard />, url: "/products" },
          {
            label: "digital downloads",
            icon: <FaCreditCard />,
            url: "/products",
          },
        ],
      },

      // 2
      {
        title: "SUPPORT SERVICES",
        sublink: [
          { label: "online courses", icon: <FaCreditCard />, url: "/products" },
          { label: "coaching", icon: <FaCreditCard />, url: "/products" },
          {
            label: "digital downloads",
            icon: <FaBriefcase />,
            url: "/products",
          },
        ],
      },
    ],
  },

  // pricing

  {
    page: "pricing",
    links: [
      // 1
      {
        title: "RESOURCES",
        sublink: [
          { label: "online courses", icon: <FaCreditCard />, url: "/products" },
          { label: "coaching", icon: <FaCreditCard />, url: "/products" },
          {
            label: "digital downloads",
            icon: <FaCreditCard />,
            url: "/products",
          },
        ],
      },

      // 2
      {
        title: "SUPPORT SERVICES",
        sublink: [
          { label: "online courses", icon: <FaCreditCard />, url: "/products" },
          { label: "coaching", icon: <FaCreditCard />, url: "/products" },
          {
            label: "digital downloads",
            icon: <FaBriefcase />,
            url: "/products",
          },
        ],
      },
    ],
  },
];

export default sublinks;
