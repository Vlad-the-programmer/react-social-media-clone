import { Toast } from "bootstrap";
import { useRef } from "react";

export default function useToast() {
  const toastRef = useRef(null);
  console.log("Toast ", document.querySelectorAll(".toast"));
  console.log("ref ", toastRef);
  let myToast = toastRef.current;
  let bsToast = Toast.getInstance(myToast);

  const showToast = () => {
    bsToast = new Toast(myToast, { autohide: true, delay: 1000 });
    bsToast.show();
  };

  const hideToast = () => {
    bsToast = new Toast(myToast, { autohide: true });
    bsToast.hide();
  };
  return { toastRef, showToast, hideToast };
}
