import styled from 'styled-components'

//main container
const Container = styled.div`
width: 100%;
height: 100%;
margin-top: 0;
padding-top: 0;
display: flex;
flex-direction: row;
`;


//divides the main conatainer into sections
const Pane = styled.div`
margin-top: 2%;
flex: ${props => props.weight}
`

//receives left and right components as children, also receives weight of Panes
export const SplitScreen = ({children,}) => {
    //components to render
    const [left, right] = children;

    //returns main container along with 2 sections dividers
    return (
        <Container>
            <Pane weight={2}>{left}</Pane>

            <Pane weight={3}>{right}</Pane>
        </Container>
    )
}