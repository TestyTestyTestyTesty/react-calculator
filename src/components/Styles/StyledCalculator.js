import styledComponents from "styled-components";

export const StyledCalculator = styledComponents.div`
    display:flex;
    flex-direction:column;
    border:1px solid black;
    max-width:600px;
    margin:50px auto;
    padding: 2px;
    border-radius:2px;
`;
export const StyledFields = styledComponents.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    padding-top:2px;
`;
export const StyledInput = styledComponents.input`
    border-bottom:1px solid black;
    padding:20px;
    text-align:right;
`;
export const StyledField = styledComponents.button`
    text-align:center;
    padding:20px;
    cursor:pointer;
    background:rgba(193, 190, 191, 0.8);
    transition: all 0.3s;
    border:1px solid white;
    border-radius:2px;
    &:hover{
        background: rgba(227, 227, 227, 0.8)
    }
    &:disabled{
        cursor: not-allowed;
        &:hover{
            background:rgba(193, 190, 191, 0.8);
        }
    }
`;
