import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1100px;
    background #4283F3;
    border-radius: 10px;
    border: 2px solid #456C2;
    padding: 20px;
    box-shadow: 0px 5px 10px rgb(0,0,0,0,25);
    text-align: center;
    
    p {
        font-size: 3rem;
    }
`
type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}


export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.5s ease;
    
    .hover {
        opacity: 0.9;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) => 
            correct 
                ? 'linear-gradient(90deg, #fff2d, #59bc86'
                : !correct && userClicked
                ? 'linear-gradient(90deg, #fff2d, #59bC46'
                : 'linear-gradient(90deg, #56c82f, #59bc86' };

        border: 3px solid #54c2DF;
        box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
        box-radius: 10px
        color: #4559cF;
        text-shadow: 0px 1px 0px rgba(0,0,0,0.25)
    }
`;