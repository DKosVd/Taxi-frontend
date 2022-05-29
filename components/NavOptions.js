import React from 'react'
import { FlatList } from 'react-native'
import data from '../mock-data/navElements'
import RendreNavOption from './RendreNavOption'

const renderItem = ({item}) => {
    return <RendreNavOption screen={item.screen} title={item.title} img={item.image}/>
}


const NavOptions = () => {


    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            keyExtractor={(item) => item.id}
        />
    )
}

export default NavOptions;
