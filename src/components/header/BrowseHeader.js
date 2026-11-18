import './../../styles/header.css'

function BrowseHeader({clickCat}) {

  return(
        <div id="catList">
            <h3 onClick={()=>{clickCat('paintings')}}>Recent Work</h3>
            <h3 onClick={()=>{clickCat('digital')}}>Projects</h3>
            <h3 onClick={()=>{clickCat('about')}}>About</h3>
          </div>
  );
}

export default BrowseHeader;
