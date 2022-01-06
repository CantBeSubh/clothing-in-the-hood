import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collection:SHOP_DATA
        }
    }

    render(){
        const {collection}=this.state;
        return(
            <div className="show-page">
                {
                    collection.map(
                        ({id,...otherProps})=>(
                            <CollectionPreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
} 

export default ShopPage;