import styled from "@emotion/styled";
const List = styled.ul`
padding: 20px 85px;
margin-left: 20px;
color: #fff;
`
const ContactItem = styled.li`
list-style: square;
padding: 10px;
line-height: 200%;
`
const ButtonDelete = styled.button`
font-size: 12px;
border: none;
border-radius: 50px;
padding: 4px 10px;
cursor: pointer;
margin-left: 10px;
color: #fff;
background-color: red;
opacity: 0.5;
&:hover{
    opacity: 1;
    color: #fff;
}
`
export{List, ContactItem, ButtonDelete}