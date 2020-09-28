import React from "react";
import "./Subtotal.css";
import CurrentFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrentFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong></strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" />
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
