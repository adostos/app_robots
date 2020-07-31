import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className="pb2">
			<input 
				type="search" 
				className="tc pa2 ba b--green bg-light-blue br3" 
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;