const url = "https://raw.githubusercontent.com/luckkkkas/forum/main/data.json";

export async function getData(){
    const res = await fetch(url);
    const data = await res.json()
    return data;
};
  


