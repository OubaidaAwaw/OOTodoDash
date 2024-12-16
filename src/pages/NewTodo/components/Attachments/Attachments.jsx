  // import css files
import "./Attachments.css"

export default function Attachments(props) {
  return (
    <section className="attachmentContainer col gap10">
      <label htmlFor="textAttachment" className="H4D">Attachments</label>
      <textarea value={props.value} onChange={props.onChange} className="inputsClassic" name="textAttachment" id="textAttachment"></textarea>
    </section>
  )
}
