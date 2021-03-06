import React, { Component, PropTypes } from 'react';
import { mergeStyles, applyStyle } from '../Styling';

var styles = {
  osx_10_11: {
    WebkitUserSelect: 'none',
    cursor: 'default',
  }
};

class Item extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    control: PropTypes.any,
    tabId: PropTypes.number,
    style: PropTypes.object,
    title: PropTypes.string,
    selected: PropTypes.bool,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { selected: props.selected, visible: props.visible !== false, display: props.display !== false };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.selected });
    if (nextProps.selected) {
      this.props.control.select(this);
    } else {
      this.props.control.unselect(this);
    }
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    const { control, style, title, children, selected, visible, display, ...props } = this.props;
    const content = this.state.selected ? children : '';
    const styles = mergeStyles(this.styles, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    return (
      <div {...props} style={applyStyle(styles)}>
        {content}
      </div>
    );
  }
}

export default Item;
