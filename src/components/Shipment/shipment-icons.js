import { Component } from "react";
import { AiOutlineCheck, AiOutlineFileDone } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

class ShipmentIcons extends Component {
  SwitchCases() {
    const style = this.props.colorStyle;
    switch (this.props.currentStatus) {
      case "TICKET_CREATED":
        return this.renderIcons(style, null, null, null);
      case "PACKAGE_RECEIVED":
      case "IN_TRANSIT":
      case "OUT_FOR_DELIVERY":
      case "WAITING_FOR_CUSTOMER_ACTION":
      case "RECEIVED_DELIVERY_LOCATION":
        return this.renderIcons(style, style, null, null);
      case "NOT_YET_SHIPPED":
      case "DELIVERED_TO_SENDER":
        return this.renderIcons(style, style, style, null);
      case "DELIVERED":
        return this.renderIcons(style, style, style, style);
      default:
        break;
    }
  }

  renderIcons(first, second, shipping, delivered) {
    return (
      <>
        <div className="col">
          <AiOutlineCheck className="icon check-icon first" style={first} />
        </div>
        <div className="col">
          <AiOutlineCheck className="icon check-icon second" style={second} />
        </div>
        <div className="col">
          <FaShippingFast className="icon shipping-icon" style={shipping} />
        </div>
        <div className="col">
          <AiOutlineFileDone
            className="icon delivered-icon"
            style={delivered}
          />
        </div>
      </>
    );
  }

  render() {
    return <>{this.SwitchCases()}</>;
  }
}

export default ShipmentIcons;
