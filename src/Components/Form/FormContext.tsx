import React from 'react'

const initialState = {
    formtext: '',
    setFormText: (value: string)=>{},
    URL: `http://localhost:3004/api/todos/`
}

interface FormContextProps {
    children: JSX.Element | JSX.Element[]
}

export const GlobalFormContext = React.createContext(initialState)

const FormContext=(props: FormContextProps)=>{

    const [state, setState] = React.useState(initialState)

    function updateState(key: any, value: any){
        setState(
            {...state, [key]: value}
        )
    }

    return(
        <GlobalFormContext.Provider
            value={{
                formtext: state.formtext,
                setFormText: (value: string) => updateState('formtext', value),
                URL: state.URL
            }}
        >
            <div>
                {props.children}
            </div>
        </GlobalFormContext.Provider>
    )
}

export default FormContext