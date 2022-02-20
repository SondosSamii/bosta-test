import { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { AiOutlineCheck, AiOutlineFileDone } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";

import * as ShipmentAPI from "../../ShipmentAPI";
import ShipmentTable from "./shipment-table";
import { localizeState, FullDate, LongDate, Time } from "./_functions";

import "./shipment.css";

class ShipmentDetails extends Component {
  state = {
    shipmentDetails: {},
    currentStatus: "",
    fullDate: "",
    time: "",
    promisedDate: "",
    progressPercent: 0,
    colorStyle: {
      color: "",
      bgColor: "",
      borderColor: "",
    },
    noteColor: "",
  };

  async componentDidMount() {
    const shipmentNum = window.location.pathname.replace("/shipment/", "");
    await this.getShipmentDetails(shipmentNum);
    await this.changeProgress(this.state.currentStatus);
  }

  async getShipmentDetails(id) {
    const shipmentDetails = await ShipmentAPI.get(id);
    const timestamp = shipmentDetails.CurrentStatus.timestamp;
    this.setState(() => ({ shipmentDetails }));
    this.setState({
      currentStatus: shipmentDetails.CurrentStatus.state,
      fullDate: FullDate(timestamp),
      time: Time(timestamp),
      promisedDate: LongDate(timestamp),
    });
  }

  changeValues(color, secondColor, percent) {
    this.setState({
      colorStyle: {
        color: color,
        backgroundColor: secondColor,
        borderColor: secondColor,
      },
      progressPercent: percent,
      noteColor: secondColor,
    });
  }

  changeProgress(status) {
    switch (status) {
      case "TICKET_CREATED":
        this.changeValues("#fff", "var(--yellow)", 0);
        break;
      case "PACKAGE_RECEIVED":
        this.changeValues("#fff", "var(--yellow)", 33.3);
        break;
      case "IN_TRANSIT":
      case "OUT_FOR_DELIVERY":
      case "WAITING_FOR_CUSTOMER_ACTION":
      case "RECEIVED_DELIVERY_LOCATION":
        this.changeValues("#fff", "var(--yellow)", 66.6);
        break;
      case "NOT_YET_SHIPPED":
      case "DELIVERED_TO_SENDER":
        this.changeValues("#fff", "var(--primary-color)", 66.6);
        break;
      case "DELIVERED":
        this.changeValues("#fff", "var(--green)", 100);
        break;
      default:
        break;
    }
  }

  render() {
    const {
      shipmentDetails,
      currentStatus,
      fullDate,
      time,
      promisedDate,
      progressPercent,
      colorStyle,
      noteColor,
    } = this.state;

    localizeState(currentStatus);

    return (
      <div className="container">
        <div id="shipment-details">
          <div className="shipment-progress-card py-4">
            <div className="row justify-content-between px-4">
              <div className="col-auto">
                <h2>رقم الشحنة {shipmentDetails.TrackingNumber}</h2>
                <h3 className="note" style={{ color: noteColor }}>
                  {localizeState(currentStatus)}
                </h3>
              </div>
              <div className="col-auto">
                <h2>آخر تحديث</h2>
                <h3>
                  {fullDate} في {time}
                </h3>
              </div>
              <div className="col-auto">
                <h2>اسم التاجر</h2>
                <h3>أمازون</h3>
              </div>
              {promisedDate && promisedDate !== "Invalid Date" && (
                <div className="col-auto">
                  <h2>موعد التسليم خلال</h2>
                  <h3>{promisedDate}</h3>
                </div>
              )}
            </div>
            <hr />

            <div className="row px-4 pt-4">
              <div className="col-12">
                <div
                  className="progress"
                  style={{
                    position: "relative",
                    overflow: "visible",
                    height: "0.5rem",
                  }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={progressPercent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{
                      width: `${progressPercent}%`,
                      backgroundColor: noteColor,
                    }}
                  >
                    <span className="sr-only">{progressPercent}% Complete</span>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row justify-content-center icons">
                  {currentStatus === "TICKET_CREATED" ? (
                    <>
                      <div className="col">
                        <AiOutlineCheck
                          className="icon check-icon first"
                          style={colorStyle}
                        />
                      </div>
                      <div className="col">
                        <AiOutlineCheck className="icon check-icon second" />
                      </div>
                      <div className="col">
                        <FaShippingFast className="icon shipping-icon" />
                      </div>
                      <div className="col">
                        <AiOutlineFileDone className="icon delivered-icon" />
                      </div>
                    </>
                  ) : currentStatus === "PACKAGE_RECEIVED" ? (
                    <>
                      <div className="col">
                        <AiOutlineCheck
                          className="icon check-icon first"
                          style={colorStyle}
                        />
                      </div>
                      <div className="col">
                        <AiOutlineCheck
                          className="icon check-icon second"
                          style={colorStyle}
                        />
                      </div>
                      <div className="col">
                        <FaShippingFast className="icon shipping-icon" />
                      </div>
                      <div className="col">
                        <AiOutlineFileDone className="icon delivered-icon" />
                      </div>
                    </>
                  ) : currentStatus === "NOT_YET_SHIPPED" ||
                    currentStatus === "DELIVERED_TO_SENDER" ||
                    currentStatus === "IN_TRANSIT" ||
                    currentStatus === "OUT_FOR_DELIVERY" ||
                    currentStatus === "WAITING_FOR_CUSTOMER_ACTION" ||
                    currentStatus === "RECEIVED_DELIVERY_LOCATION" ? (
                    <>
                      <div className="col">
                        <AiOutlineCheck
                          className="icon check-icon first"
                          style={colorStyle}
                        />
                      </div>
                      <div className="col">
                        <AiOutlineCheck
                          className="icon check-icon second"
                          style={colorStyle}
                        />
                      </div>
                      <div className="col">
                        <FaShippingFast
                          className="icon shipping-icon"
                          style={colorStyle}
                        />
                      </div>
                      <div className="col">
                        <AiOutlineFileDone className="icon delivered-icon" />
                      </div>
                    </>
                  ) : currentStatus === "DELIVERED" ? (
                    <>
                      <div className="col">
                        <AiOutlineCheck
                          className="icon check-icon first"
                          style={colorStyle}
                        />
                      </div>
                      <div className="col">
                        <AiOutlineCheck
                          className="icon check-icon second"
                          style={colorStyle}
                        />
                      </div>
                      <div className="col">
                        <FaShippingFast
                          className="icon shipping-icon"
                          style={colorStyle}
                        />
                      </div>
                      <div className="col">
                        <AiOutlineFileDone
                          className="icon delivered-icon"
                          style={colorStyle}
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="row justify-content-center status-row pt-4">
                  <div className="col">
                    <h4>تم إنشاء الشحنة</h4>
                  </div>
                  <div className="col">
                    <h4>تم استلام الشحنة من التاجر</h4>
                  </div>
                  <div className="col">
                    <h4>الشحنة خرجت للتسليم</h4>
                    {currentStatus.reason ? (
                      <>
                        <br />
                        <span
                          style={{
                            fontSize: "1rem",
                            color: noteColor,
                            display: "block",
                            padding: "0 10px",
                          }}
                        >
                          {currentStatus.reason}
                        </span>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="col">
                    <h4>تم التسليم</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-12 col-lg-8">
              <h4 className="pb-3">تفاصيل الشحنة</h4>
              <ShipmentTable
                transitEvents={shipmentDetails.TransitEvents}
                noteColor={noteColor}
              />
            </div>
            <div className="col-12 col-lg-4">
              <h4 className="pb-3">عنوان التسليم</h4>
              <p className="address">
                امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 7 بلوك 9 ..
                القاهرة
              </p>
              <div className="support">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img src="/images/support.png" alt="Support"></img>
                  </div>
                  <div className="col">
                    <h5>هل يوجد مشكلة في شحنتك؟!</h5>
                    <Link
                      to="/"
                      className="btn w-100"
                      style={{
                        color: "#fff",
                        fontSize: "0.85rem",
                        backgroundColor: "var(--primary-color)",
                        borderColor: "var(--primary-color)",
                        borderRadius: "0.75rem",
                        padding: "0.35rem 1.5rem",
                      }}
                    >
                      إبلاغ عن مشكلة
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShipmentDetails;
