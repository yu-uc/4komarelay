import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      width: "100%",
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

const Scroll = (props: any) => {
  //表示するデータ
  const [list, setList] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state);
  let num: number = selector.serches.count;

  console.log("テスト用：；list");
  console.log(list);

  //項目を読み込むときのコールバック
  const loadMore = async (page: any) => {
    let apiurl = "";

    if (num == 0) {
      apiurl = "http://localhost:3000/api/method/completed?page=" + page;
    } else if (num == 1) {
      console.log("0のまま");
      apiurl = "http://localhost:3000/api/method/idsearch?page=" + page;
      console.log("1に変更");
    } else if (num == 2) {
    } else if (num == 3) {
    } else {
      //   apiurl = "http://localhost:3000/api/method/completed?page=" + page;
    }

    const res = await fetch(apiurl);
    const data = await res.json(); //取得データ

    console.log("page" + page);

    //   データ件数が0件の場合、処理終了
    if (data.length < 1) {
      console.log("おしまい");
      setHasMore(false);
      return;
    }

    // console.log("for文開始"); //ここで止まっている
    //apiからとってきたデータをlistに追加する
    const newList: any[] = [];
    data.forEach(function (da: any) {
      const addList = [da.urls.url1, da.urls.url2, da.urls.url3, da.urls.url4];
      newList.push(addList);
    });
    // props.setList([...props.list, ...newList]);
    // setList(props.list);
    setList([...list, ...newList]);
  };

  //各スクロール要素
  const items = (
    <div className={classes.paper}>
      <Grid container>
        {list.map((value, index) => (
          <Grid item xs={3}>
            {index}
            <img key={index} src={value[0]} alt={"sample"} width="100%" />
            <img key={index + 100} src={value[1]} alt={"sample"} width="100%" />
            <img key={index + 101} src={value[2]} alt={"sample"} width="100%" />
            <img key={index + 102} src={value[3]} alt={"sample"} width="100%" />
          </Grid>
        ))}
      </Grid>
    </div>
  );

  //全体のスタイル
  const root_style = {
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "50px",
  };

  //ロード中に表示する項目
  const loader = (
    <div className="loader" key={0}>
      Loading ...
    </div>
  );

  return (
    <div style={root_style}>
      {/* <button onClick={() => dispatch(setList([]))}></button> */}
      <InfiniteScroll
        loadMore={loadMore} //項目を読み込む際に処理するコールバック関数
        hasMore={hasMore} //読み込みを行うかどうかの判定
        loader={loader}
      >
        {" "}
        {/* 読み込み最中に表示する項目 */}
        {items} {/* 無限スクロールで表示する項目 */}
      </InfiniteScroll>
    </div>
  );
};

export default Scroll;
