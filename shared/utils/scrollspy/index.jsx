import React from 'react';
import debounce from '../debounce';

function getDisplayName(ComposedComponent) {
  return ComposedComponent.displayName || ComposedComponent.name || 'Component';
}

function scrollSpy(ComposedComponent) {
  return class ScrollSpy extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        onScreen: 0,
      };
    }

    static displayName = `ScrollSpy(${getDisplayName(ComposedComponent)})`;
    static ComposedComponent = ComposedComponent;

    handleScroll = () => {
      if (this.enabled) {
        const scrollPosition =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
        let onScreen = 0;
        for (let i = this.toSpy.length - 1; i >= 0; i--) {
          if (this.toSpy[i].offsetTop <= scrollPosition) {
            onScreen = i;
            break;
          }
        }

        if (onScreen !== this.state.onScreen) {
          this.setState({ onScreen });
        }
      }
    }

    enableScrollSpy = (enable) => {
      this.enabled = enable;
      if (this.enabled) {
        this.handleScroll();
      }
    }

    componentDidMount() {
      this.toSpy = this.refs.composed.scrollSpy;
      this.enabled = true;
      this.handleScroll();
      this.listener = debounce(this.handleScroll, 75);
      window.addEventListener('scroll', this.listener);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.listener);
    }

    render() {
      return (
        <ComposedComponent
          ref="composed"
          enableScrollSpy={this.enableScrollSpy}
          {...this.props}
          scrollspy={this.state.onScreen}
        />
      );
    }
  };
}

export default scrollSpy;
