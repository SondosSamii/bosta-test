import React, { Component } from "react";
import { localizeState, ShortDate, Time } from "./_functions";

class ShipmentTable extends Component {
  render() {
    return (
      <div
        style={{
          border: "var(--primary-border)",
          borderRadius: "var(--card-border-radius)",
        }}
      >
        <table
          className="table"
          style={{
            borderRadius: "var(--card-border-radius)",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr>
              <th scope="col">الفرع</th>
              <th scope="col">التاريخ</th>
              <th scope="col">الوقت</th>
              <th scope="col">تفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {this.props.transitEvents &&
              this.props.transitEvents.length > 0 &&
              this.props.transitEvents.map((status, i) => (
                <tr key={i}>
                  <td>{status.hub ? status.hub : "مدينة نصر"}</td>
                  <td>{ShortDate(status.timestamp)}</td>
                  <td>{Time(status.timestamp)}</td>
                  <td>
                    {localizeState(status.state)}
                    {status.reason ? (
                      <>
                        <br />
                        <span
                          style={{
                            fontSize: "0.85rem",
                            color: this.props.noteColor,
                          }}
                        >
                          {status.reason}
                        </span>
                      </>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShipmentTable;
