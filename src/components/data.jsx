import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
const sublinks = [
  // product
  {
    page: "product",
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
          { label: "online courses", icon: <FaCreditCard />, url: "/products" },
          { label: "coaching", icon: <FaCreditCard />, url: "/products" },
        ],
      },
    ],
  },

  // solutions

  {
    page: "solutions",
    links: [
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
            icon: <FaBriefcase />,
            url: "/products",
          },
        ],
      },
    ],
  },

  // pricing
];

export default sublinks;

// Features;

// Courses;
// Online;
// On - Sight;
// Resources;
