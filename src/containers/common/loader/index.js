import PuffLoader from "react-spinners/PuffLoader";

const override = `
  position: fixed;
  z-index: 999;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

function Loader() {
  return (
    <>
      <div style={{ position: "fixed", top: "0", height: "100%", width: "100%", opacity: "0.3", background: "black", zIndex: "999" }}></div>
      <PuffLoader color={"black"} loading={true} css={override} size={150} />
    </>
  );
}

export default Loader;
