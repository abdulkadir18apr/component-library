import "../library.css";
import React from "react";
import styled, { css } from "styled-components";

const BadgeWrapper = styled.span`
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  ${({ type }) => {
    switch (type) {
      case "primary":
        return css`
          background-color: #007bff;
          color: #ffffff;
        `;
      case "secondary":
        return css`
          background-color: #6c757d;
          color: #ffffff;
        `;
      case "success":
        return css`
          background-color: #28a745;
          color: #ffffff;
        `;
      case "danger":
        return css`
          background-color: #dc3545;
          color: #ffffff;
        `;
      default:
        return css`
          background-color: #ffffff;
          color: #333333;
        `;
    }
  }}
`;

const Badge = ({ type, children }) => {
  return <BadgeWrapper type={type}>{children}</BadgeWrapper>;
};

export default Badge;
