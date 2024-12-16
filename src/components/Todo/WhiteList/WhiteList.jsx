export default function WhiteList({allow, children,status}) {

  return allow.indexOf(status) !== -1? children : <></>

}
