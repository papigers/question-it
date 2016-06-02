import React from "react";
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import RadioChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import RadioUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import RaisedButton from 'material-ui/RaisedButton';

import s from './VoteArea.css';

class VoteArea extends React.Component{
	constructor(props){
		super();
		let {choices, multi} = props;
		this.state = {
			choices,
			selected: multi ? choices.map((o, i) => {return i===0 ? true : false}) : 0,
			multi,
			error: ''
		};
	}
	
	onChangeRadio(val){
		val = +val;
		if(this.state.selected !== val)
			this.setState({selected: val});
	}
	
	onChangeCheckbox(val){
		val = +val;
		let selected = this.state.selected;
		selected[val] = !selected[val];
		this.setState({selected});
	}
	
	checkSubmit(){
		if(this.state.multi){
			let numSelected = this.state.selected.reduce((counter, value) => {return (value ? ++counter : counter)});
			if(numSelected == 0){
				this.setState({error: 'You have to choose an option.'});
				return;
			}
		}
		this.setState({error: ''});
		this.props.onSubmit(...arguments);
	}
	
	render(){
		let options = this.state.choices.map((choice, i) => {
			let checkbox;
			if(this.state.multi){
				checkbox = (
					<Checkbox
						label={choice[0]}
						key={i}
						value={""+i}
						checked={this.state.selected[i]}
						onCheckFunc={this.onChangeCheckbox.bind(this, i)}
					/>
				);
			}
			else{
				checkbox = (
					<Checkbox
						label={choice[0]}
						key={i}
						value={""+i}
					  checked={this.state.selected === i}
						onCheckFunc={this.onChangeRadio.bind(this, i)}
						checkedIcon={<RadioChecked />}
						uncheckedIcon={<RadioUnchecked />}
					/>
				);
			}
			return (
				<div key={i} className={s.listItem}>
					{i !== 0 ? (<Divider key={'divider'+i} />) : ''}
					<ListItem key={'item'+i} onTouchTap={checkbox.props.onCheckFunc}>
						{checkbox}
					</ListItem>
				</div>
			);
		});
		return (
			<div>
				<h1>Vote:</h1>
				<h2>{this.props.title}</h2>
				<List>
					{options}
				</List>
				<RaisedButton label="submit" secondary={true} className={s.submitBtn} onMouseUp={this.checkSubmit.bind(this)} />
				<p className={s.error}>{this.state.error}</p>
			</div>
		);
	}
}

VoteArea.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default VoteArea;