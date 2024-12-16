export default function TitleInput(props) {
  return (
    <section className="titleInputContainer col gap10">
      <label htmlFor="TitleInput" className="H4D">Title</label>
      <input onChange={props.onChange} value={props.value} className="inputsClassic" type="text" name="TitleInput" id="TitleInput" />
    </section>
  )
}
