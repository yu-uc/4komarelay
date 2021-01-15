import React from "react";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  AppBar,
  Toolbar,
  // InputBase,
  // IconButton,
  fade,
  Typography,
  Menu,
  MenuItem,
  TextField,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolBar: {
      backgroundColor: "#FFB549",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 3,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    koumoku: {
      color: "#FFF",
      display: "none",
      padding: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    //ここから検索フォームのcss
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
    btn: {
      height: "100%",
      padding: "6px 12px",
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
  })
);

const Navbar = () => {
  const classes = useStyles();

  //ドロップダウンメニュー
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  //検索キーワード
  const [keyWord, setKeyWord] = React.useState("");

  //検索フォームの情報からsidを取得する
  const callSrchApi = async () => {
    console.log(keyWord);
  };
  //完成作品のapi呼び出し
  const callKanseiApi = async (jyanru: any) => {
    console.log(jyanru);
    handleClose();
  };
  //未完成作品のapi呼び出し
  const callMikanseiApi = async (jyanru: any) => {
    console.log(jyanru);
    handleClose2();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }; //ドロップダウンを選択したとき
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  }; //ドロップダウンを選択したとき
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.toolBar} position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h5" className={classes.title}>
            ４コマリレー
          </Typography>
          <Typography variant="h6" className={classes.koumoku}>
            マイページ
          </Typography>
          <Typography variant="h6" className={classes.koumoku}>
            新規作成
          </Typography>
          <div>
            <Typography
              variant="h6"
              className={classes.koumoku}
              aria-controls="simple-menu1"
              aria-haspopup="true"
              onClick={handleClick}
            >
              完成作品
            </Typography>
            <Menu
              id="simple-menu1"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => callKanseiApi("全ての作品")}>
                全ての作品
              </MenuItem>
              <MenuItem onClick={() => callKanseiApi("ギャグ")}>
                ギャグ
              </MenuItem>
              <MenuItem onClick={() => callKanseiApi("シリアス")}>
                シリアス
              </MenuItem>
            </Menu>
          </div>
          <div>
            <Typography
              variant="h6"
              className={classes.koumoku}
              aria-controls="simple-menu2"
              aria-haspopup="true"
              onClick={handleClick2}
            >
              未完成作品
            </Typography>
            <Menu
              id="simple-menu2"
              anchorEl={anchorEl2}
              keepMounted
              open={Boolean(anchorEl2)}
              onClose={handleClose2}
            >
              <MenuItem onClick={() => callMikanseiApi("全ての作品")}>
                全ての作品
              </MenuItem>
              <MenuItem onClick={() => callMikanseiApi("ギャグ")}>
                ギャグ
              </MenuItem>
              <MenuItem onClick={() => callMikanseiApi("ラブコメ")}>
                ラブコメ
              </MenuItem>
            </Menu>
          </div>
          {/* 検索フォーム */}
          <div className={classes.search}>
            <TextField
              id="outlined-required"
              label="検索"
              defaultValue=""
              variant="outlined"
              onChange={(id) => setKeyWord(id.target.value)}
            />
            <Button
              className={classes.btn}
              variant="contained"
              startIcon={<SearchIcon />}
              onClick={() => callSrchApi()}
            >
              検索
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
