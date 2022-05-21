import styled from 'styled-components';
import { device, colors } from "../../constants";
import timeline_bg from '../../assets/timeline_bg.svg'

export const Timeline = styled.div`
    @media ${device.md} {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
        background: url('${timeline_bg}');
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;

    }
`

export const TimelineCard = styled.div`
    position: relative;
    margin: 2rem 0;
    border: 2px solid ${colors.white};
    z-index: 1;
    @media ${device.md} {
        margin: 1rem 0;
        width: 47.5%;
        &:nth-child(odd) {
            align-self: end;
        }
        &:after {
            content: ' ';
            background-color: #fff;
            position: absolute;
            right: -1.5rem;
            top: calc(50% - 1.5rem);
            width: 0;
            height: 0;
            border-top: 1.5rem solid transparent;
            border-bottom: 1.5rem solid transparent;
            border-left: 1.5rem solid ${colors.white};
            background: transparent;
        }
        &:nth-child(odd)::after {
            border-right: 1.5rem solid ${colors.white};
            border-left: 1.5rem transparent;
            right: 0;
            left: -1.5rem;
        }
    }
`

export const TLCardBg = styled.div`
    height: 55vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 0.5rem;
`

export const TLCardContent = styled.div`
    padding: 0.5rem;
    background: ${colors.white};
    
`
export const TLCardHeaderCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    img {
        width: 1.75rem;
        height: 1.75rem;
    }
`
export const TLCardFooter = styled.div`
    padding: 0.5rem;
    border-top: 1px solid ${colors.darkgrey};
    background: ${colors.white};
    padding: auto 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: row;
`