import employees from "../../employees.json";

function individual() {
  const id = window.location.href.split("employee/");
  if(id[1]) {
    return employees.filter(obj => {
      return obj.id === parseInt(id[1])
    });
  }
  else {
    return []
  }
}

export default individual;