import {styled} from '@mui/material'

const HeaderContainer = styled('div')({
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '20px 10px',
    textAlign: 'center',
    fontSize: '20px'
})

const Header=()=>{
    return(
        <HeaderContainer>
            Header Component
        </HeaderContainer>
    )
}

export default Header