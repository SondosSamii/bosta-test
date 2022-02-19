import TrackingShipmentInput from "./tracking-shimpent-input";

import "./tracking-shipment.css";

function TrackingShipment() {
  return (
    <div className="container" id="tracking-shipment">
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="track-shipment py-3 px-2 py-sm-4 px-sm-3">
            <div className="col-12">
              <h3>الرجاء إدخال رقم الشحنة</h3>
            </div>
            <TrackingShipmentInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackingShipment;
