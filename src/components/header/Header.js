import './../../styles/header.css'
import BrowseHeader from './BrowseHeader'
import {IoMdClose} from 'react-icons/io'
import {BiMenu} from 'react-icons/bi'

function Header({setCat, dropDown, setDropDown, dropDownCat, setDropDownCat}) {

  function menuToggle(type){
    if (dropDown){
      setDropDown(!dropDown)
      if (type !== dropDownCat){
        setTimeout(()=>{
          setDropDownCat(type)
          setDropDown(true)
        }, 600)
      } else {
        setDropDownCat(type)
        setDropDown(!dropDown)
      }
    } else {
      setDropDownCat(type)
      setDropDown(!dropDown)
    }
  }

  function clickCat(cat){
    setDropDown(false)
    setCat(cat)
  }

  return( 
    <div id="header" className={dropDown ? "openMenu" : "closedMenu"}>
      <div id="headerTop">
        <div id="logoBrowse">
          <img src="/media/other/signature.png" alt="fakelogo"/>
          {dropDown && dropDownCat === 'browse'? <h2 onClick={()=>setDropDown(false)}><IoMdClose/></h2> : <h2 onClick={()=>{menuToggle('browse')}}><BiMenu /></h2>}
        </div>
      </div>
      <div id={dropDown}>
        <BrowseHeader setCat={setCat} setDropDown={setDropDown} clickCat={clickCat}/>
      </div> 
    </div>
  );
}

export default Header;
