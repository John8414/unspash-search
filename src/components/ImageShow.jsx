
function ImageShow({ data }) {
  console.log(data)
  const renderImageList = () => data.map((ele, index) => {
    return (
      <div className="" key={index}>
        <img className="w-full h-full object-cover" src={ele.urls.full} alt={ele.alt_description} />
      </div>
    )
  })
  return (
    <div className="grid grid-cols-4 gap-4 pt-2">
      {renderImageList()}
    </div>
  )
}

export default ImageShow