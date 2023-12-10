"use client";

import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export function Navbar() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="100"
              viewBox="0 0 200 100"
            >
              <text
                x="20"
                y="60"
                font-family="serif"
                font-size="40"
                fill="#007acc"
              >
                UnityKit
              </text>
            </svg>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            <li>
              <Link
                to="/"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/components"
                className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Components
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex grow justify-end">
          <Search />
        </div>
        <div className="ml-2 mt-2 hidden lg:block"></div>
      </div>
    </div>
  );
}
