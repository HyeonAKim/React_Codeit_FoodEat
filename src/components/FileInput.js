function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    console.log(e.target.files[0]);
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };
  return <input type="file" onChange={handleChange} />;
}

export default FileInput;
