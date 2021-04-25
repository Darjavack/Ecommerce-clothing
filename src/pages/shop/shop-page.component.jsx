import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PreviewCollection } from "../../components/preview-collection/preview-collection.component";
import { selectShopCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, title, items }) => (
        <PreviewCollection key={id} title={title} items={items} />
      ))}
    </div>

    //*Esta es otra forma de pasar los parametros.. No la entiendo muy bien, aun.
    /* <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div> */
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
