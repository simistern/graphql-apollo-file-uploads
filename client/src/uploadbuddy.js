import gql from 'graphql-tag'
import React, { useCallback } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { useDropzone } from 'react-dropzone'

export const SINGLE_FILE_UPLOAD = gql`
  mutation singleFileUpload($file: Upload!) {
    singleFileUpload(file: $file) {      
      confidence
      valid      
    }
  }
`;


export default function UploadFile(props){
    const uploadMutation = useMutation(SINGLE_FILE_UPLOAD,{context:{hasUpload:true}})    
    const onDrop = useCallback(async acceptedFiles => {
        let file = await acceptedFiles[0];
        console.log('show me files: ', acceptedFiles)
        uploadMutation({variables: {file: file }})
    }, [])
    const {getRootProps, getInputProps } = useDropzone({onDrop})
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />      
            <p>Drag 'n' drop some files here, or click to select files</p>      
      </div>
    )
}