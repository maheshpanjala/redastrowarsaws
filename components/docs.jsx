import AdvancedApes from "./advancedApes";

const Docs = ({ page }) => {

  const pageCheck = (page) => {
    return (
      <>
        <AdvancedApes page="home" />
      </>
    )
  }

  return (
    pageCheck(page)
  )
}

export default Docs;