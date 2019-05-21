import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface FadeProps {
  children: any;
  inx: boolean;
}

function Fade({ children, inx }: FadeProps) {
  return (
    <CSSTransition in={inx} timeout={3000} className="fade">
      {children}
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
        <Fade inx={this.state.show}>
          <div>Hello world</div>
        </Fade>
      </div>
    );
  }
}
