export default {
  rows: {
    style: {
      // minHeight: '72px', // override the row height
      backgroundColor: "#263043",
      borderBottom: "none",
      borderTop: "none",
    },
    highlightOnHoverStyle: {
      backgroundColor: "#5b6d7e",
      outlineColor: "#9e93a4",
      border: "none",
      borderBottomColor: "none"
    },
    stripedStyle: {
      backgroundColor: "#283249"
    }
  },
  headRow: {
    style: {
      // backgroundColor: theme.background.default,
      // minHeight: '56px',
      borderBottom: "1px solid #9e93a4",
    },
    denseStyle: {
      minHeight: '32px',
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      fontSize: "1rem",
      backgroundColor: "#242c38",
      color: "#9e93a4",
      padding: "10px",
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
      color: "#E8E8E8",
      fontSize: "0.9rem"
    }
  },
  pagination: {
    style: {
      color: "#9e93a4",
      fontSize: "0.9rem",
      backgroundColor: "#242c38",
      borderTop: "1px solid #9e93a4",
      // padding: "10px",
      borderRadius: "0 0 15px 15px"
    },
    pageButtonsStyle: {

      fill: "#9e93a4",
    },
  }
}