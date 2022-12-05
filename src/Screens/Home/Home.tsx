import {styled} from '@mui/material'
import ContentContainer from '../../Components/ContentContainer/ContentContainer'
import FormContainer from '../../Components/Form/FormContainer'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Table/Table'

const HomeContainer = styled('div')({
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
})


const Home=()=>{
        
    return(
        <HomeContainer>
            <Header />
            <ContentContainer>
                <FormContainer />
                <Table  />
            </ContentContainer>
        </HomeContainer>
    )
}

export default Home