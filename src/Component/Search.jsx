import { Divider, Input } from 'antd';

function Search(props) {


    const { searchValue, setSearchValue } = props



    //                              STATE



    //                          COMPORTEMENT


    // const handleSearch = (event) => {

    //     setSearchValue(event.target.value)

    // }



    //                              RENDER
    return (
        <div>
            <Divider>Search</Divider>
            <Input value={searchValue} type="text" onChange={(event) => setSearchValue(event.target.value)} />

            <ul>

                <li></li>
            </ul>

        </div>
    );
}

export default Search;