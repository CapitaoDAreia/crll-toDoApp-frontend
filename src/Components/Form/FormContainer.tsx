import { styled } from "@mui/material";
import React from "react";

const FormContainerStyled = styled("div")({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

const Form = styled("form")({
    padding: '10px 20px',

});

const Input = styled("input")({
    width: '380px',
    height: '35px',
    borderRadius: '10px 0px 0px 10px',
    border: '1px solid darkblue',
    padding: '10px',
    textAlign: 'center',
    background:'#EEEEEE',
    // outline: '1px solid red',
    "&:focus-visible":{
        outline: '1px solid darkblue',
        background: '#FFFFFF'
    }
});

const Button = styled('button')({
    height: '35px',
    width: '80px',
    borderRadius: '0px 10px 10px 0px',
    border: '1px solid darkblue',
    background: 'darkblue',
    color: '#FFFFFF',
    '&:hover':{
        cursor: 'pointer',
        opacity: '.9'
    },
    '&:active':{

    }
})

const FormContainer = () => {
  const [inputState, setInputState] = React.useState<string>("controled");

  return (
    <FormContainerStyled>
      <Form>
        <Input
          type={"text"}
          value={inputState}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputState(e.target.value);
          }}
        />
        <Button>
            Adicionar
        </Button>
      </Form>
    </FormContainerStyled>
  );
};

export default FormContainer;
