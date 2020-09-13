import styled from "styled-components";

const CustomModalDiv = styled.div/*css */`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    cursor: default;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: hsla(0, 0%, 100%, 0.41);
    ${props => {
        if (!props.opened) {
          return /*css */`
            cursor: default;
            pointer-events: none;
            color: purple;
            background-color: transparent;
          `;
        };
      }
    };/
`;

export default CustomModalDiv;