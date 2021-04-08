import React, { Component } from "react";
import { PreviewCollection } from "../../components/preview-collection/preview-collection.component";
import { shop_data } from "./shop.data";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shop_data,
    };
  }

  render() {
    const { collections } = this.state;

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
  }
}
