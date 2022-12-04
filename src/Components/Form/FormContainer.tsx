import { styled } from "@mui/material";
import React from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

const FormContainerStyled = styled("div")({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

const Form = styled("form")({
    padding: '10px 20px',
});

const FormContainer = () => {

  return (
    <FormContainerStyled>
      <Form>
        <FormInput />
        <FormButton
          flag={'Adicionar'}
        />
      </Form>
    </FormContainerStyled>
  );
};

export default FormContainer;
