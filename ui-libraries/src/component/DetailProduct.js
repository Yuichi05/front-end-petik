import React from "react";

const DetailProducts = () => {
  return (
    <section className="section mt-5">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <figure className="image is4by3">
              <img src="https://picsum.photos/800/600" alt="product" />
            </figure>
          </div>
          <div className="column">
            <div className="content">
              <div className="title is-4 text-black">Product Name</div>
              <p className="has-text-dark">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo commodi natus perferendis ducimus molestiae ea, quam
                aperiam officia consequuntur, quas iusto ipsam velit cum facere
                sit? Officia ratione qui optio!
              </p>
              <p className="text-danger">
                <strong className="text-black">Price : </strong> Rp 1.000.000
              </p>
              <p className="text-black">Stock</p>
              <div className="field p-5">
                <button className="button is-primary is-fullwidth has-text-white mb-3">
                  Add to Cart
                </button>
                <button className="button is-primary is-outlined is-fullwidth">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProducts;
