import { styled } from "@mui/material";
import React from "react";
import {GlobalFormContext} from './FormContext'

interface FormInputProps {
    
}

const Input = styled("input")({
    flex: '4',
    height: '35px',
    borderRadius: '10px 0px 0px 10px',
    border: '1px solid darkblue',
    padding: '10px',
    textAlign: 'center',
    background:'#EEEEEE',
    "&:focus-visible":{
        outline: '1px solid darkblue',
        background: '#FFFFFF'
    }
});

const FormInput=(props: FormInputProps)=>{

    const {formtext, setFormText} = React.useContext(GlobalFormContext)

    return(
        <Input
          type={"text"}
          value={formtext}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFormText(e.target.value);
          }}
        />
    )
}

export default FormInput