import React, {ChangeEventHandler, Component} from 'react';

interface Props {
    getText: (text:string)=>void;
}

interface State {
    text: string;
}


class InputText extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {text: ''};

    }

    handleOnChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({text: e.target.value});
    }

    getText = (): void => {
        this.props.getText(this.state.text);
        this.setState({text:''});
    }

    render():React.ReactNode {
        return (
            <div>
                <input type={"text"} value={this.state.text} onChange={this.handleOnChangeInput}/>
                <button onClick={this.getText}>find</button>
            </div>
        );
    }
}

export {InputText};