import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Q from 'q';

import Favicon from './Favicon';
import Fade from './Fade';

import promiseProps from '../HoCs/promiseProps';
import staticProps from '../HoCs/staticProps';

import config from '../config';

import { className } from './Header.less';

const pixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

class Header extends Component {
  static propTypes = {
    img: PropTypes.string,
    title: PropTypes.string.isRequired
  };
  render() {
    document.title = this.props.title;
    return (
      <div className={className}>
        {this.props.img ? <Favicon href={this.props.img} /> : null}
        <Link to="">
          {this.props.img ?
            (
              <Fade>
                <img src={this.props.img} className="img-circle center-block avatar" />
              </Fade>
            ) :
            <img src={pixel} className="img-circle center-block avatar" />
          }
          <h3 className="text-center">{this.props.title}</h3>
        </Link>
      </div>
    );
  }
}

const configProps = staticProps(config);
const avatarProp = promiseProps(props => (
  Q.resolve($.ajax(`https://api.github.com/users/${props.github}`))
    .get('avatar_url')
    .then(img => ({ img }))
));

export default configProps(avatarProp(Header));
