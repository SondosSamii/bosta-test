import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import "./tracking-shipment.css";

class TrackingShipmentInput extends Component {
  state = { shipmentNum: "" };

  handleChange = (event) => {
    this.setState({ shipmentNum: event.target.value });
  };

  render() {
    return (
      <div className="input-group">
        <label className="col-12">تتبع شحنتك</label>
        <div className="col-8 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="رقم الشحنة"
            value={this.state.shipmentNum}
            onChange={this.handleChange}
          ></input>
        </div>
        <div className="col-auto">
          <Link
            to={`/shipment/${this.state.shipmentNum}`}
            type="button"
            className="btn search-btn"
          >
            <FiSearch />
          </Link>
        </div>
      </div>
    );
  }
}

export default TrackingShipmentInput;
