import React from "react";
import { Route, Routes } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
    return (
        <div className='shop-page'>    
            <Routes>
                <Route path='' >
                    <Route index={true} element={<CollectionOverview/>}/>
                    <Route index={false} path=':collectionId' element={<CollectionPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default ShopPage;