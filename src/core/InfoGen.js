var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true;
}
var InfoGen = {
  email: localStorage.getItem("case_email"),
  token: localStorage.getItem("case_token"),
  info: JSON.parse(localStorage.getItem("info")),
  isMobile:isMobile,
  listUserCanAddTask:JSON.parse(localStorage.getItem("listUserCanAddTask")),
  lat:((localStorage.getItem("lat"))?localStorage.getItem("lat"):0),
  lng:((localStorage.getItem("lng"))?localStorage.getItem("lng"):0)
}

export default InfoGen;
