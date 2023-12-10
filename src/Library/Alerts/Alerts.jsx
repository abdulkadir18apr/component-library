import "../library.css";


import React from "react";
import styled, { css } from "styled-components";

const AlertWrapper = styled.div`
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 16px;
  ${({ type }) => {
    switch (type) {
      case "success":
        return css`
          background-color: #d4edda;
          border-color: #c3e6cb;
          color: #155724;
        `;
      case "info":
        return css`
          background-color: #d1ecf1;
          border-color: #bee5eb;
          color: #0c5460;
        `;
      case "warning":
        return css`
          background-color: #fff3cd;
          border-color: #ffeeba;
          color: #856404;
        `;
      case "danger":
        return css`
          background-color: #f8d7da;
          border-color: #f5c6cb;
          color: #721c24;
        `;
      default:
        return css`
          background-color: #ffffff;
          border-color: #e0e0e0;
          color: #333333;
        `;
    }
  }}
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 12px;
        `;
      case "large":
        return css`
          font-size: 20px;
        `;
      default:
        return null;
    }
  }}
`;

const Alert = ({ type, size, children }) => {
  return (
    <AlertWrapper type={type} size={size}>
      {children}
    </AlertWrapper>
  );
};

export default Alert;
