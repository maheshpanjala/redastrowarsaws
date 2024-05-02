import AdvancedApes from "./advancedApes";

const Docs = ({ page }) => {

  const pageCheck = (page) => {
    if (page === "home") {
      return (
        <>  
          <AdvancedApes page="home" />
        </>
      )
    }else if (page === "docs") {
      return (
        <>
          <div className="flex h-[170px]"></div>
          <AdvancedApes page="home" />
        </>
      )
    }
    
  }

  return (
    pageCheck(page)
  )
}

export default Docs;