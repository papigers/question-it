import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { UpdateUserMutation } from '../../mutations';

import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import SocialButton from '../../components/socialButton';

import s from './UserContact.css';

const socials = ['facebook', 'google', 'linkedin'];

class UserContact extends React.Component {

  static propTypes = {
    isViewer: React.PropTypes.bool.isRequired,
    setChanged: React.PropTypes.func.isRequired,
    relay: React.PropTypes.object.isRequired,
    user: React.PropTypes.object,
  }

  static contextTypes = {
    viewer: React.PropTypes.object.isRequired,
  }

  static getStateFromUser(user) {
    return {
      facebook: {
        public: user.facebook.public,
      },
      google: {
        public: user.google.public,
      },
      linkedin: {
        public: user.linkedin.public,
      },
      changed: false,
    };
  }

  constructor(props) {
    super();
    this.state = this.constructor.getStateFromUser(props.user);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.id !== this.props.user.id) {
      this.setState(this.constructor.getStateFromUser(nextProps.user));
    }
  }

  onCheck = (social) => {
    const changed = socials.some(soc => {
      if (soc === social) {
        return this.state[soc].public === this.props.user[soc].public;
      }
      return this.state[soc].public !== this.props.user[soc].public;
    });
    this.props.setChanged(changed);
    this.setState({
      [social]: {
        public: !this.state[social].public,
      },
      changed,
    });
  }

  save = () => {
    this.setState({ changed: false });
    this.props.setChanged(false);
    const { facebook, google, linkedin } = this.state;
    this.props.relay.commitUpdate(new UpdateUserMutation({
      user: {
        id: this.context.viewer.id,
        profile: {
          facebook,
          google,
          linkedin,
        },
      },
    }));
  }

  render() {
    const { isViewer, user } = this.props;

    const socialButtons = socials.map((social, i) => {
      const socialName = social[0].toUpperCase() + social.substr(1);
      let link = user[social].link;
      const linked = link && link.length;
      let newWindow = true;
      let editSocial = null;
      if (isViewer) {
        if (!link) {
          link = `/link/${social}`;
          newWindow = false;
        }
        editSocial = linked ?
          <Checkbox
            checked={!this.state[social].public}
            label="private"
            className={s.privateCheckbox}
            onCheck={() => this.onCheck(social)}
          /> :
          <Subheader className="subheader center-text">Click to link account</Subheader>;
      }
      return (
        <div className="col-xs-4" key={i}>
          <Subheader className="subheader">{socialName}:</Subheader>
          {isViewer && link ?
            <Subheader
              className={`subheader center-text ${s.reload}`}
            >
              <a href={`/reload/${social}`}>Reload Data</a>
            </Subheader>
            : null
          }
          <ListItem className="item" disabled>
            <SocialButton
              link={link}
              className={s.social}
              type={social}
              disabled={!linked}
              isViewer={isViewer}
              newWindow={newWindow}
            />
          </ListItem>
          {editSocial}
        </div>
      );
    });

    return (
      <div>
        <div className={s.header}>
          <h2 className="categoryHeader">Contact Info</h2>
          {
            this.state.changed ?
              <RaisedButton
                label="save"
                onClick={this.save}
                secondary
              /> :
            null
          }
        </div>
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
        id,
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
