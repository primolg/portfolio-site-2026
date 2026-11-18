import './../styles/singlePage.css'

function SinglePage({page}) {
  console.log(page.imageRef)
  return(
    <div id='currentPage'>
      <div id="leftSide">
          <img src={page.imageRef} alt={page.title} style={{filter: (page.backdrop ? "drop-shadow(1px 4px 4px #1d130072)" : "")}}/>
      </div>
      <div id="rightSide">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <h1>{page.title}</h1>
        </div>
        <div id='infoText'>
          <h4>{page.text1}<br></br></h4>
          <h4>{page.text2}<br></br></h4>
          <h4>{page.text3}<br></br></h4>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
