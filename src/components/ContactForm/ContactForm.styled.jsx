import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  padding: 4px;
  margin: 15px 15px;
  background-color: whitesmoke;
  border: solid 2px black;
  width: auto;

  display: flex;
  flex-direction: column;
`;
export const StyledError = styled(ErrorMessage)`
  color: red;
`;
