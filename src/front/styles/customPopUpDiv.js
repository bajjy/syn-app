import styled from "styled-components";



const customPopUpDiv = styled.div/*css */`
    display: none;
    position: fixed;
    cursor: pointer;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.25);
    ${props => {
        if (props.opened) {
          return /*css */`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          `;
        };
      }
    };
    .modal_content {
      cursor: default;
      background: black;
      box-shadow: 5px 5px 5px black;
      padding: 1em;
      z-index: 999;
    
      .close {
          cursor: pointer;
      }
    }
`;

export default customPopUpDiv;