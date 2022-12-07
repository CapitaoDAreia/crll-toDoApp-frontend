import {styled} from '@mui/material'
import FormContainer from '../../Components/Form/FormContainer'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Table/Table'

const HomeContainer = styled('div')({
    color: '#ffffff',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    background: 'linear-gradient(360deg, #010144, #000000)',
    height: '100vh',
    width: '100vw'
})


const Home=()=>{
        
    return(
        <HomeContainer>
            <Header />
            <FormContainer />
            <Table  />
        </HomeContainer>
    )
}

export default Home