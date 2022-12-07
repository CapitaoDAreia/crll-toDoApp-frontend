import {styled} from '@mui/material'

const HeaderContainer = styled('h1')({
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '20px 10px',
    textAlign: 'center',
    fontSize: '1.6rem',
    width: '100%',
    marginBottom: '30px'
})

const Header=()=>{
    return(
        <HeaderContainer>
            TASKER | TODO APP
        </HeaderContainer>
    )
}

export default Header