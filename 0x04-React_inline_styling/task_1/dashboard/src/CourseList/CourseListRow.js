import React from 'react'
import propTypes from 'prop-types'


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	const row_background_color = { backgroundColor: '#f5f5f5ab' };
	const header_row_background_color = { backgroundColor: '#deb5b545' };
	let node;
	let style;
	
	if (isHeader) {
		style = header_row_background_color;
		if (!textSecondCell) {
			node = <th colSpan="2">{textFirstCell}</th>;
		} else {
			node = 
		  <React.Fragment>
			  <th>{textFirstCell}</th>
			  <th>{textSecondCell}</th>
		  </React.Fragment>;
		}
	} else {
		style = row_background_color;
		node = 
		  <React.Fragment>
			  <td>{textFirstCell}</td>
			  <td>{textSecondCell}</td>
		  </React.Fragment>;
	}
	return (
		<tr style={style}>
			{node}
		</tr>
	);
}

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null
}

CourseListRow.propTypes = {
	isHeader: propTypes.bool,
	textFirstCell: propTypes.string.isRequired,
	textSecondCell: propTypes.oneOfType([
		propTypes.string,
		propTypes.number,
	])
}

export default CourseListRow