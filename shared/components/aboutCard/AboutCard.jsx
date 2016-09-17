import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Card, CardText, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import s from './AboutCard.css';

class AboutCard extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    link1: React.PropTypes.string.isRequired,
    label1: React.PropTypes.string.isRequired,
    author: React.PropTypes.string,
    link2: React.PropTypes.string,
    label2: React.PropTypes.string,
    logo: React.PropTypes.string,
    logoAlt: React.PropTypes.string,
  }

  render() {
    const {
      logo,
      logoAlt,
      title,
      author,
      text,
      link1,
      label1,
      link2,
      label2,
    } = this.props;

    return (
      <Card zDepth={2} className={s.card}>
        {
          logo ?
            <CardMedia className={s.logoBg}>
              <img className={s.logo} alt={logoAlt} src={logo} />
            </CardMedia> :
          null
        }
        <CardTitle
          showExpandableButton
          actAsExpander
          title={title}
          subtitle={
            author ?
              <a
                href={`https://github.com/${author}`}
                target="_blank"
                className={s.author}
              >
                {author}
              </a> :
            null
          }
          className="center-text"
        />
        <CardText expandable>
          {text}
        </CardText>
        <CardActions expandable={!!logo} className={s.actions}>
          <a href={link1} target="_blank">
            <FlatButton label={label1} />
          </a>
          {
            link2 ?
              <a href={link2} target="_blank">
                <FlatButton label={label2} style={{ float: 'right' }} />
              </a> :
            null
          }
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(s)(AboutCard);
