import { useState, useEffect } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);


  // const test = () => {
  //   return new Promise((resolve)=>{
  //     return resolve("test");
  //   })
  // }

  // const test2 = () => {
  //   return new Promise((resolve)=>{
  //     return resolve("test2");
  //   })
  // }

  // const test3 = () => {
  //   return new Promise((resolve)=>{
  //     return resolve("test3");
  //   })
  // }

  // const alltest = async() => {
  //   const a = await test();
  //   console.log(a);
  //   const b = await test2();
  //   console.log(b);
  //   const c = await test3();
  //   console.log(c);
  // }
  // const alltest = async() => {
  //   const a = await Promise.all([
  //     test(),
  //     test2(),
  //     test3()
  //   ])
  //   console.log(a);
  // }

  // alltest();

  // const alwaysLateBoy = (ms) => {
  //   new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, ms);
  //   }).then(() => {
  //     console.log(`すまん！${ms}ms待たせたな。`);
  //   });
  // };

  //上記をawait使って書くと

  const alwaysLateBoy = (ms) => {
    
  }
  
  

  useEffect(() => {//fetchPokemonDataっていう関数を作って
    const fetchPokemonData = async () => {//asyncを適用してawaitを使えるようにして
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);//ここでデータと一緒にresolveが帰ってくるからawaitで制御して
      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);//ここで引数としてurl含んだデータを渡してる
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = (data) => {//ここでurl含んだデータを渡されてる
    let _pokemonData = Promise.all(//promiseallは配列で関数を渡す、ここではmap関数（配列を返す関数）を使ってるからこれでいいってこと？か？
      data.map((pokemon) => {//一個ずつ取り出してる
        // console.log(pokemon)
        let pokemonRecord = getPokemon(pokemon.url);//ここで引数としてurlを渡して、
        return pokemonRecord;
      })

      //だからこれは言うなれば
      // a = await getPokemon(pokemon1url);
      // b = await getPokemon(pokemon2url);
      // ...
      // みたいな話ってことよな

    );

    // console.log(_pokemonData); プロミスでラップされた？データが出力されている
  };

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <>
          <h1>ポケモンデータを取得しました。</h1>
        </>
      )}
    </div>
  );
}

export default App;
