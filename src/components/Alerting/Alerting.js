  // import css
import "./Alerting.css"

export default function Alerting(title, content) {
  try{
      // get element root to append element
    const root  = document.getElementById("mainScroll")
      /* ceate h3 header element and add class and title text which provided as aparameter */
    const header = document.createElement("h3")
    header.setAttribute("class","alertTitle")
    const headerContent = document.createTextNode(title)
    header.appendChild(headerContent)
      /* create p the same of header h3 above */
    const p = document.createElement("p")
    p.setAttribute("class","alertContent")
    const pContent = document.createTextNode(content)
    p.appendChild(pContent)
      /* append all elements above in container called alertingContainer */
    const alertContainer = document.createElement("div")
    alertContainer.setAttribute("class","alertingContainer col")
    alertContainer.appendChild(header)
    alertContainer.appendChild(p)
      // place css style
      /* append alertingContainer in root */
    root.append(alertContainer)
    setTimeout(() => {
      alertContainer.remove()
    }, 1900);
    return "Success"
  }catch(e){
    return "Fail"
  }
}
