import React, { useState } from 'react'

const SearchBar = (props) => {
    const [term, setTerm] = useState('')
    const onChange = (e) => {
        setTerm(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        props.onFormSubmit(term)

    }
    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onSubmitForm} className='ui form' >
                <input type="text" value={term} onChange={onChange} />
            </form>
        </div>
    )
}

export default SearchBar
