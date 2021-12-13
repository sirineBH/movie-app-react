import React, { useState, useEffect, useRef } from "react";

//style
import { Wrapper, Content } from './SearchBar.styles';

//image
import searchIcon from '../../images/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        //timeout
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer);
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input type='text'
                    placeholder="Search movie"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}

                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;