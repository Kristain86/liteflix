import React from 'react';
import {useDropzone} from 'react-dropzone';

function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container drag-container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p><img src={require('../images/clip.png')} alt="clip" /><span><b>Agregar un archivo</b> o soltarlo aquí</span></p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}



export default Basic;
