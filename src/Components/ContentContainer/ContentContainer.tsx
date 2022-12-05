import { styled } from '@mui/material'

interface ContentContainerProps {
    children: JSX.Element | JSX.Element[]
}

const ContentContainerStyled = styled('section')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0px',
    backgroundColor: 'grey',

    background: 'linear-gradient(360deg, #010144, #000007)',

})

const ContentContainer=(props: ContentContainerProps)=>{
    return(
        <ContentContainerStyled>
            {props.children}
        </ContentContainerStyled>
    )
}

export default ContentContainer