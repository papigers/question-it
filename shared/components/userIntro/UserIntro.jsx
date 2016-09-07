import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import EditIcon from 'material-ui/svg-icons/image/edit';
import RestoreIcon from 'material-ui/svg-icons/action/restore';
import ProfileAvatar from 'material-ui/svg-icons/social/person';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';

import ValidTextField from '../validTextField';
import { UpdateUserMutation } from '../../mutations';
import debounce from '../../utils/debounce';

import s from './UserIntro.css';

class UserIntro extends React.Component {

  static contextTypes = {
    viewer: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    user: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object.isRequired,
    isViewer: React.PropTypes.bool.isRequired,
    setChanged: React.PropTypes.func.isRequired,
  }

  static getStateFromUser(user) {
    const { bio, birthDate, name, avatar } = user;
    return {
      bio: bio || '',
      birthDate: {
        public: birthDate.public,
        value: birthDate.value,
      },
      name: {
        public: name.public,
        value: name.value,
      },
      avatar: {
        img: avatar,
        preview: false,
      },
      edit: {
        bio: false,
        birthDate: false,
        name: false,
        avatar: false,
      },
      changed: false,
    };
  }

  constructor(props) {
    super();
    this.state = this.constructor.getStateFromUser(props.user);
    this.checkChanged = debounce(this.checkChanged, 150);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.id !== this.props.user.id) {
      this.setState(this.constructor.getStateFromUser(nextProps.user));
    }
  }

  checkChanged = () => {
    let changed = false;
    changed |= this.state.bio !== (this.props.user.bio || '');
    changed |= this.state.birthDate.value !== this.props.user.birthDate.value;
    changed |= this.state.birthDate.public !== this.props.user.birthDate.public;
    changed |= this.state.name.value !== this.props.user.name.value;
    changed |= this.state.name.public !== this.props.user.name.public;
    changed |= this.state.avatar !== this.props.user.avatar;
    changed = !(!changed);
    this.setState({ changed });
    this.props.setChanged(changed);
  }

  changeAvatar = () => {
    const input = this.refs.uploadImage;

    if (input.files && input.files[0]) {
      if (input.files[0].type.substring(0, 5) === 'image') {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.setState({
            avatar: {
              img: e.target.result,
              preview: true,
            },
            changed: true,
          });
        };

        reader.readAsDataURL(input.files[0]);
      }
      else {
        // TODO: remove alert to some modal
        alert('Oops! Your avatar must be an image, try again!');
      }
    }
  }

  changeName = (event) => {
    this.setState({
      name: {
        ...this.state.name,
        value: event.target.value,
      },
    }, this.checkChanged);
  }

  validateName = (event, valid) => {
    setTimeout(() => document.activeElement.id !== 'UserIntro-EditName' && this.setState({
      edit: {
        ...this.state.edit,
        name: !valid,
      },
      name: {
        ...this.state.name,
        value: valid ? this.state.name.value : this.props.user.name.value,
      },
    }), 1000);
  }

  checkName = () =>
    this.setState({
      name: {
        ...this.state.name,
        public: !this.state.name.public,
      },
    }, this.checkChanged)

  changeBirthDate = (event, date) => {
    this.setState({
      edit: {
        ...this.state.edit,
        birthDate: false,
      },
      birthDate: {
        ...this.state.birthDate,
        value: (new Date(date)).toISOString(),
      },
    }, this.checkChanged);
  }

  dismissBirthDate = () => {
    this.setState({
      edit: {
        ...this.state.edit,
        birthDate: false,
      },
    });
  }

  checkBirthDate = () =>
    this.setState({
      birthDate: {
        ...this.state.birthDate,
        public: !this.state.birthDate.public,
      },
    }, this.checkChanged)

  changeBio = (event) => {
    this.setState({
      bio: event.target.value,
    }, this.checkChanged);
  }

  validateBio = (event, valid) => {
    setTimeout(() => document.activeElement.id !== 'UserIntro-EditBio' && this.setState({
      edit: {
        ...this.state.edit,
        bio: false,
      },
      bio: valid ? this.state.bio : (this.props.user.bio || ''),
    }), 1000);
  }

  uploadAvatar = () =>
    new Promise((resolve) => {
      const input = this.refs.uploadImage;
      if (input.files && input.files[0]) {
        const data = new FormData();
        data.append('avatar', input.files[0]);

        fetch('/upload/images/avatar', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          credentials: 'same-origin',
          body: data,
        }).then(res => res.json()).then(json => {
          if (json.success) {
            this.setState({
              avatar: {
                img: json.path,
                preview: false,
              },
            }, resolve);
          }
          else {
            // TODO: remove alert to some modal
            alert('Avatar upload failed, please try again later.');
          }
        });
      }
    });

  uploadAndSave = () => {
    const { avatar } = this.state;
    if (avatar && avatar.img && avatar.preview) {
      this.uploadAvatar().then(this.save);
    }
    else {
      this.save();
    }
  }

  save = () => {
    this.setState({ changed: false });
    this.props.setChanged(false);
    const { bio, avatar, name, birthDate } = this.state;
    this.props.relay.commitUpdate(new UpdateUserMutation({
      user: {
        id: this.context.viewer.id,
        bio,
        avatar: avatar.img,
        name,
        birthDate: {
          ...birthDate,
          value: new Date(birthDate.value),
        },
      },
    }));
  }

  render() {
    const { username } = this.props.user;
    const { bio, birthDate, name, avatar, edit } = this.state;
    const { isViewer } = this.props;
    const ageThree = new Date();

    ageThree.setFullYear(ageThree.getFullYear() - 3);
    return (
      <div>
        <div className={s.header}>
          <h2 className="categoryHeader">Intro</h2>
          {
            this.state.changed ?
              <RaisedButton
                label="save"
                onClick={this.uploadAndSave}
                secondary
              /> :
            null
          }
        </div>
        <Paper zDepth={2} className={`${s.introRow} category`}>
          <div className={s.avatarContainer}>
            <Avatar
              icon={avatar.img ? null : <ProfileAvatar />}
              src={avatar.img}
              size={100}
              backgroundColor="black"
              className={`${s.avatar} ${isViewer ? 'clickable' : ''}`}
              onClick={() => this.refs.uploadImage.click()}
            />
            {isViewer ?
              <div>
                <IconButton className={s.editAvatar}>
                  <input
                    type="file"
                    ref="uploadImage"
                    accept="image/*"
                    className={s.uploadImage}
                    onChange={this.changeAvatar}
                  />
                  <EditIcon />
                </IconButton>
                {this.props.user.avatar !== avatar.img ?
                  <IconButton
                    className={s.restoreAvatar}
                    onClick={
                      () => this.setState({
                        avatar: {
                          img: this.props.user.avatar,
                          preview: false,
                        },
                      }, this.checkChanged)
                    }
                  >
                    <RestoreIcon />
                  </IconButton> :
                null
                }
              </div> :
            null
            }
          </div>
          <div className={s.username}>
            <ListItem className="item" disabled>
              <h2>{username}</h2>
            </ListItem>
          </div>
          {
            (isViewer || name.public && name.value) ?
              <div className={s.fullRow}>
                <Subheader className="subheader">Name:</Subheader>
                {edit.name ?
                  <div style={{ position: 'relative' }}>
                    <Checkbox
                      checked={!name.public}
                      label="private"
                      onCheck={this.checkName}
                      style={{ paddingLeft: 16, marginTop: 10, marginBottom: 5 }}
                    />
                    <ValidTextField
                      value={name.value}
                      floatingLabelText="Edit Name"
                      min={2}
                      max={20}
                      muiId="UserIntro-EditName"
                      style={{ paddingLeft: 16, marginTop: -10 }}
                      focusHighlight={false}
                      focusOnInvalid
                      onBlur={this.validateName}
                      onChange={this.changeName}
                      focus
                    />
                    {this.props.user.name.value !== name.value
                    || this.props.user.name.public !== name.public ?
                      <IconButton
                        className={s.restoreIcon}
                        onClick={
                          () => this.setState({
                            name: {
                              value: this.props.user.name.value,
                              public: this.props.user.name.public,
                            },
                          }, this.checkChanged)
                        }
                      >
                        <RestoreIcon />
                      </IconButton> :
                    null
                    }
                  </div> :
                  <ListItem className="item" disabled>
                    {name.value || 'Add your name'}
                    {isViewer ?
                      <IconButton
                        className={s.editIcon}
                        onClick={() => this.setState({ edit: { ...this.state.edit, name: true } })}
                      >
                        <EditIcon />
                      </IconButton> :
                    null
                    }
                  </ListItem>
                }
              </div> : null
          }
          {
            (isViewer || birthDate.public && birthDate.value) ?
              <div className={s.fullRow}>
                <Subheader className="subheader">Age:</Subheader>
                {edit.birthDate ?
                  <div style={{ position: 'relative' }}>
                    <Checkbox
                      checked={!birthDate.public}
                      label="private"
                      onCheck={this.checkBirthDate}
                      style={{ paddingLeft: 16, marginTop: 10, marginBottom: 5 }}
                    />
                    <DatePicker
                      hintText="Edit Birth Date"
                      value={new Date(birthDate.value)}
                      onChange={this.changeBirthDate}
                      onDismiss={this.dismissBirthDate}
                      maxDate={ageThree}
                      formatDate={(date) => date.toLocaleDateString()}
                      style={{ paddingLeft: 16, marginTop: -10 }}
                    />
                    {this.props.user.birthDate.value !== birthDate.value
                    || this.props.user.birthDate.public !== birthDate.public ?
                      <IconButton
                        className={s.restoreIcon}
                        onClick={
                          () => this.setState({
                            birthDate: {
                              value: this.props.user.birthDate.value,
                              public: this.props.user.birthDate.public,
                            },
                          }, this.checkChanged)
                        }
                      >
                        <RestoreIcon />
                      </IconButton> :
                    null
                    }
                  </div> :
                  <ListItem className="item" disabled>
                    {birthDate.value ?
                      Math.abs(new Date(Date.now() - new Date(birthDate.value).getTime()).getUTCFullYear() - 1970) :
                      'Add your age'
                    }
                    {isViewer && !edit.birthDate ?
                      <IconButton
                        className={s.editIcon}
                        onClick={() => this.setState({ edit: { ...this.state.edit, birthDate: true } })}
                      >
                        <EditIcon />
                      </IconButton> :
                    null
                    }
                  </ListItem>
                }
              </div> : null
          }
          <div className={s.fullRow}>
            <Subheader className="subheader">Bio:</Subheader>
            {edit.bio ?
              <div style={{ position: 'relative' }}>
                <ValidTextField
                  value={bio || ''}
                  floatingLabelText="Edit Bio"
                  max={80}
                  rowsMax={6}
                  rows={2}
                  muiId="UserIntro-EditBio"
                  style={{ paddingLeft: 16, marginTop: -10 }}
                  focusHighlight={false}
                  counter
                  multiLine
                  focus
                  onBlur={this.validateBio}
                  onChange={this.changeBio}
                />
                {this.props.user.bio !== bio ?
                  <IconButton
                    className={s.restoreIcon}
                    onClick={
                      () => this.setState({
                        bio: this.props.user.bio,
                      }, this.checkChanged)
                    }
                  >
                    <RestoreIcon />
                  </IconButton> :
                null
                }
                {isViewer && !edit.bio ?
                  <IconButton
                    className={s.editIcon}
                    onClick={() => this.setState({ edit: { ...this.state.edit, bio: true } })}
                  >
                    <EditIcon />
                  </IconButton> :
                null
                }
              </div> :
              <ListItem className="item" disabled>
                <div style={{ width: '50%' }}>
                  {bio ? bio.split('\n').map((line, i) => <span key={i}>{line}<br /></span>) : 'No Bio.'}
                </div>
                {isViewer && !edit.bio ?
                  <IconButton
                    className={s.editBio}
                    onClick={() => this.setState({ edit: { ...this.state.edit, bio: true } })}
                  >
                    <EditIcon />
                  </IconButton> :
                null
                }
              </ListItem>
            }
          </div>
        </Paper>
      </div>
    );
  }
}

UserIntro = withStyles(s)(UserIntro);

UserIntro = Relay.createContainer(UserIntro, {
  fragments: {
    user: (() => Relay.QL`
      fragment on User{
        id,
        username,
        birthDate{
          value,
          public
        },
        name{
          value,
          public
        },
        bio,
        avatar
      }
    `),
  },
});

export default UserIntro;
