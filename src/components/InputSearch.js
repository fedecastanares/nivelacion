import { InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useContext, useState } from "react";
import {DataContext} from '../context/dataContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


const InputSearch = () => {
  const classes = useStyles();
  const [ value, setValue ] = useState('');
  const { setSearchTextNews, setLoading } = useContext(DataContext)

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setSearchTextNews(value);
  };



  return (
    <form onSubmit={onSubmit}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Buscar"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={value}
          onChange={handleChange}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </form>
  );
};

export default InputSearch;
