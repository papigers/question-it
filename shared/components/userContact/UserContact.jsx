import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

import SocialButton from '../../components/socialButton';

import s from './UserContact.css';

const socials = ['facebook', 'google', 'linkedin'];

class UserContact extends React.Component {

  static propTypes = {
    isViewer: React.PropTypes.bool.isRequired,
    user: React.PropTypes.object,
  }

  render() {
    const { isViewer, user } = this.props;

    const socialButtons = socials.map((social, i) => {
      const socialName = social[0].toUpperCase() + social.substr(1);
      const linked = user[social].link && user[social].link.length;
      let editSocial = null;
      if (isViewer) {
        editSocial = linked ?
          <Checkbox
            defaultChecked={!user[social].public}
            label="private"
            className={s.privateCheckbox}
          /> :
          <Subheader className="subheader center-text">Click to link account</Subheader>;
      }
      return (
        <div className="col-xs-4" key={i}>
          <Subheader className="subheader">{socialName}:</Subheader>
          <ListItem className="item" disabled>
            <SocialButton
              link={user[social].link}
              className={s.social}
              type={social}
              disabled={!linked}
              isViewer={isViewer}
              newWindow
            />
          </ListItem>
          {editSocial}
        </div>
      );
    });

    return (
      <div>
        <h2 className="categoryHeader">Contact Info</h2>
        <Paper zDepth={2} className="category">
          <div className="row">

            {socialButtons}

            <div className="col-xs-6 col-xs-offset-3" style={{ marginTop: 20 }}>
              <Subheader className="subheader">Email:</Subheader>
              <ListItem className="item" disabled>
                <SocialButton className={s.social} type="envelope" isViewer={isViewer} />
              </ListItem>
              {isViewer ?
                <Checkbox
                  defaultChecked
                  label="private"
                  className={s.privateCheckbox}
                />
                : null
              }
            </div>

          </div>
        </Paper>
      </div>
    );
  }
}


UserContact = withStyles(s)(UserContact);

UserContact = Relay.createContainer(UserContact, {
  fragments: {
    user: (() => Relay.QL`
      fragment on User{
        facebook{
          link,
          public,
        }
        google{
          link,
          public,
        },
        linkedin{
          link,
          public,
        }
      }
    `),
  },
});

export default UserContact;
