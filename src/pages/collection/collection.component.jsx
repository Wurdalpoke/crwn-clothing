import React from "react";
import { useSelector } from "react-redux";

import './collection.styles.scss';

import { useParams } from "react-router-dom";

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectShopCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collections }) => {
    const { collectionId } = useParams();
    const collection = useSelector((state) => selectShopCollection(state, collectionId));
    console.log(collection);
    return(
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {collection.items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>   
        </div>
    );
}

export default CollectionPage;