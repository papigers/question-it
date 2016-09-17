import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import AboutCard from '../../components/aboutCard';
import cards from './cards';

import s from './About.css';

class About extends React.Component {

  componentDidMount = () => {
    NProgress.done();
  }

  render() {
    const mainCards = Object.keys(cards.main).map(
      (card, i) =>
        <div className="col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-3" key={`main${i}`}>
          <AboutCard {...cards.main[card]} />
        </div>
    );
    const moreCards = Object.keys(cards.more).map(
      (card, i) =>
        <div className={`col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-6 col-md-4 ${s.moreCard}`} key={`more${i}`}>
          <AboutCard {...cards.more[card]} />
        </div>
    );
    return (
      <div className="container">
        <h1 className="center-text">
          Here you can see many of the technologies and librarys I used, to make Question It happen:
        </h1>
        <div className={s.cards}>
          {mainCards}
        </div>
        <h1 className="center-text">And:</h1>
        <div className={s.cards}>
          {moreCards}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(About);
