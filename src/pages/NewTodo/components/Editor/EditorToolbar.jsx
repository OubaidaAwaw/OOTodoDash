  // import react hooks
import {  forwardRef } from "react";

  // import css files
import 'react-quill/dist/quill.snow.css';
import "./EditorToolbar.css"

  // import react quill editor component
import ReactQuill from "react-quill"

const EditorToolbar = forwardRef((props,ref) => {
  return(
    <ReactQuill 
        // reference to pass
      ref={ref}
      onChange={props.onChange}
      theme="snow"
        // layout of the tools
      modules={{
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          ['link', 'image', 'video', 'formula'],
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction
          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean']                                              // remove formatting button
        ],
      }} 
        // what you want to use in the tool bar
      formats={[
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'size', 
        'color','background',
        'font',
        'align',
        'script',
        'ident' ,
        'direction',
        'clean'
      ]}
    />
  )
})
export default EditorToolbar