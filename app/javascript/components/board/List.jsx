import React from 'react';
import PropTypes from 'prop-types';

import CardTile from './CardTile';
import CreateCardContainer from './CreateCardContainer';

import * as actions from '../../actions/BoardActions';

const List = (props) => {
  const cardComponents = props.cards.map((card, idx) => <CardTile card={card} key={card.id} idx={idx}/>);
  const renderTitle = () => {
    if (props.editing) {
      return (
        <input
          className="list-title edit-title"
          value={props.title}
          autoFocus={true}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
        );
    } else {
      return (<p className="list-title">{props.title}</p>);
    }
  };

  return (
    <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div onClick={props.onClick}>
              {renderTitle()}
          </div>
          <div className="add-dropdown add-top">
              <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
              <div className="add-options"><span>...</span>
              </div>
          </div>

          <div id="cards-container" data-id={`list-${props.id}-cards`}>
            {cardComponents}
          </div>

          <div className="add-dropdown add-bottom">
              <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
              <a className="button">Add</a><i className="x-icon icon"></i>
              <div className="add-options"><span>...</span></div>
          </div>
          <CreateCardContainer
            id={props.id}
            cards={props.cards}
            showAddCardForm={props.showAddCardForm}
            openAddCardForm={props.openAddCardForm}
            closeAddCardForm={props.closeAddCardForm}
          />
        </div>
    </div>

  );
};

export default List;
