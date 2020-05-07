import React, {Component} from 'react';
class ProjectCardStack extends Component {
    constructor (props) {
        console.log("hi");
        super(props);
        console.log(props);
        this.state = {imgURLList: props};
    }
    render() {
        let icons = this.state.imgURLList.map((val) => {
            return (<img src={val} alt=""></img>)
        });
        return ({icons});
    }
}
export default ProjectCardStack;