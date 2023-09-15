//ここでプロミス関数を作って、URL先のデータを取ってきて、resolveとdataを一緒に返してる（から、awaitが使える）
export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

export const getPokemon = (url) => {//ポケモンの詳細なデータが入ったurlを引数としてもらってる
  return new Promise((resolve) => {//ここで新しくプロミス関数を作って
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);//詳細データをresolveと一緒にreturnしてる
        console.log(data);
      });
  });
};
