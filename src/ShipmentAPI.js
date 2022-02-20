const api = "https://tracking.bosta.co/shipments/track";

export const get = (shipmentID) =>
  fetch(`${api}/${shipmentID}`)
    .then((res) => res.json())
    .then((data) => data);
