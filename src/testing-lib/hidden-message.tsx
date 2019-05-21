import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Fade(props: { children: any; in: boolean }) {
  return (
    <CSSTransition in={props.in} timeout={1000} className="fade">
      {props.children}
    </CSSTransition>
  );
}

export default class HiddenMessage extends React.Component<
  {
    initialShow: boolean;
  },
  { show: boolean }
> {
  static defaultProps = { initialShow: false };
  state = { show: this.props.initialShow };
  toggle = () => {
    this.setState(({ show }) => ({ show: !show }));
  };
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <Fade in={this.state.show}>
          <div>Hello world</div>
        </Fade>
      </div>
    );
  }
}
