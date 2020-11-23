import React, { useState } from 'react'
import { db } from "./firebase" // firebase.jsからexportされたdbインスタンスをインポート


const SampleData = () => {
  const [data, dataHandler] = useState([])

  //firebaseにアクセスしてuserデータ取得
  const getFireData = () => {
    db
      .collection("user")
      .orderBy('id')
      .limit(10)
      .get()
      .then(querySnapshot => {
        const items = querySnapshot.docs.map(doc => doc.data());
        dataHandler(items)
      });
  }


  // データ表示の生成
  const getTableData = () => {
    let result = [];
    if (data === null || data.length === 0) {
      return [<tr key="0"><th>NO DATA.</th></tr>];
    }
    for (let i in data) {
      result.push(<tr key={i}>
        <th>{data[i].id}</th>
        <td>{data[i].name}</td>
        <td>{data[i].message}</td>
      </tr>);
    }
    return result;
  }

  if (data.length === 0) {
    getFireData();
  }

  return (
    <>
      <table><tbody>
        {getTableData()}
      </tbody></table>
    </>
  )
}

export default SampleData
