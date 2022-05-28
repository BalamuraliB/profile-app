import styled from 'styled-components';
import AboutMe from './AboutMe';
import WorkExperience from './WorkExperience/WorkExperience';

const MainInfo = props => {
    return (
        <MainContainer>
            <AboutMe />
            <WorkExperience />
        </MainContainer>
    );
}

export default MainInfo;

const MainContainer = styled.div`
    margin-top: 150px;
    margin-left: 220px;
    padding: 20px;
    position: fixed;
    text-align: left;
`;