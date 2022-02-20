export function localizeState(status) {
  switch (status) {
    case "TICKET_CREATED":
      return "تم إنشاء الشحنة";
    case "PACKAGE_RECEIVED":
      return "تم استلام الشحنة من التاجر";
    case "IN_TRANSIT":
      return "الشحنة خرجت للتسليم";
    case "NOT_YET_SHIPPED":
      return "لم يتم تسليم الشحنة";
    case "OUT_FOR_DELIVERY":
      return "الشحنة خرجت للتسليم";
    case "WAITING_FOR_CUSTOMER_ACTION":
      return "تأجيل بطلب من العميل";
    case "RECEIVED_DELIVERY_LOCATION":
      return "تم استلام موقع التسليم";
    case "DELIVERED":
      return "تم التسليم";
    case "DELIVERED_TO_SENDER":
      return "تم إلغاء الشحنة";
    default:
      return status;
  }
}

export function FullDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function LongDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ShortDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}

export function Time(timestamp) {
  return new Date(timestamp).toLocaleTimeString("ar-EG", {
    hour: "numeric",
    minute: "numeric",
  });
}
